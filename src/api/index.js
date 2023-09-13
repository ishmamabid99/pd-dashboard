import BASE_URL from "@/env/env";
import axios from "axios";


export const authAxios= axios.create({
    baseURL:`${BASE_URL}/auth`,
    timeout:3000
})