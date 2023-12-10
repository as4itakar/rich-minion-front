import { instance } from "@/api/api.interceptor"
import { IUser } from "@/models/user.interface"
import { Paths } from "@/utils/Paths"

export class UsersService{

    static async addRole(userId: string | number, data: {value: string}){
       return instance.patch<IUser>(
            Paths.userPaths('addRole/' + userId)
        )
    }

    static async getAll(){
        return instance.get<IUser[]>(
            Paths.userPaths(),
        )
    }

    static async getById(userId: string | number){
        return instance.get<IUser>(
            Paths.userPaths(userId)
        )
    }
}