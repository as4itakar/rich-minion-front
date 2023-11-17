import { IProfile } from "./profile.interface"
import { Role } from "./role.interface"

export interface IUser{
    id: number
    email: string,
    roles: Role[]
}