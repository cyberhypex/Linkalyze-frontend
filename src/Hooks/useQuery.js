import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/totalClicks?startDate=2024-01-01&endDate=2025-12-31",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        select: (data) => {
            return Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key],
            }));
        },
        onError,
        staleTime: 5000,
    });
};
