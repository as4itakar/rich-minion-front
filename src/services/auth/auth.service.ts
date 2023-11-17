import axios from "axios"
import { getRefreshToken, saveToStorage } from "./auth.helper"
import { IAuthResponse, IEmailPassword } from "@/store/user/user.intereface"
import { getContentType } from "@/api/api.helper"
import { instance } from "@/api/api.interceptor"

export class AuthService{

    static async login(data: IEmailPassword, type: 'login' | 'register'){
        const response = await instance.post<IAuthResponse>(
            process.env.SERVER_URL + '/auth/'+type,
            {...data}
        )

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    }

    static async getNewTokens(){
        const refreshToken = getRefreshToken()

        const response = await axios.post<string, {data: IAuthResponse}>(
            process.env.SERVER_URL + '/auth/login/access-token',
            {refreshToken},
            {
                headers: getContentType()
            }
        )

        if (response.data.accessToken) saveToStorage(response.data)
    }
}

export default AuthService