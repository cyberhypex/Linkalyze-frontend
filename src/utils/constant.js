import { main } from "framer-motion/client";
import AppRouter, { SubDomainRouter } from "../AppRouter";

export const subDomainList=[
    {subdomain:"www",app:AppRouter,main:true},
    {subdomain:"url",app:SubDomainRouter,main:false}
];