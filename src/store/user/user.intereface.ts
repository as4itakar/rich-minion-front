import { IRole } from "@/models/role.interface"
import { IUser } from "@/models/user.interface"

export interface IUserState{
    email: string,
}

export interface ITokens{
    accessToken: string
    refreshToken: string
}

export interface IInitialState{
    user: IUserState | null
    isLoading: boolean
}

export interface IEmailPassword{
    email: string
    password: string
    name?: string
}

export interface IAuthResponse extends ITokens{
    user: IUser
}