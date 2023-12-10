import axios from "axios"
import { getRefreshToken, saveToStorage } from "./auth.helper"
import { IAuthResponse, IEmailPassword } from "@/store/user/user.intereface"
import { instance } from "@/api/api.interceptor"
import { FetchMethods } from "@/models/enums/FetchMethods"
import { Paths } from "@/utils/Paths"

export class AuthService{

    static async login(data: IEmailPassword, type: 'login' | 'register'){
        const response = await instance<IAuthResponse>({
            method: FetchMethods.POST,
            url: Paths.authPaths(type),
            data
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    }

    static async getNewTokens(){
        const refreshToken = getRefreshToken()
        
        const response = await axios<string, {data: IAuthResponse}>({
            method: FetchMethods.POST,
            url: process.env.SERVER_URL + Paths.authPaths('login/access-token'),
            data: {refreshToken},
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response
    }
}

export default AuthService