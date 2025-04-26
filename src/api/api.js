import axios from "axios";

export default axios.create({
    baseURl:import.meta.env.VITE_BACKEND_URL,
}
    
);