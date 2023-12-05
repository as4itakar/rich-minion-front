import { IUser } from "@/models/user.interface"

export interface IUserState{
    id: number,
    email: string,
    roles: Array<string>
}

export interface ITokens{
    accessToken: string
    refreshToken: string
}

export interface IInitialState{
    user: IUserState | null
    isLoading: boolean,
    isError: boolean
}

export interface IEmailPassword{
    email: string
    password: string
    name?: string
}

export interface IAuthResponse extends ITokens{
    user: IUser
}