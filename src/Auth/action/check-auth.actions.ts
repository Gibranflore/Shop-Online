import { ShopApi } from "@/api/ShopApi";
import type { AuthResponse } from "../interfaces/auth.respose";



export const checkAcutAction = async ():Promise<AuthResponse> => {
    const token = localStorage.getItem('token')
    if (!token) throw new Error("No token found");

    try {

        const {data} = await ShopApi.get<AuthResponse>('/auth/check-status')
        localStorage.setItem('token', data.token)
        return data;

    } catch (error) {
        console.log(error);
        localStorage.removeItem('token')
        throw new Error("Token expired ro not valid");
        
    }
}