import type { User } from "@/interface/user.interface";

//^^ LOGIN, REGISTER, CHECKSTATUS
export interface AuthResponse {
    user:  User;
    token: string;
}
