import { instance } from "@/api/api.interceptor"
import { IUser } from "@/models/user.interface"
import { pathGeneration } from "@/utils/pathCreator"

export class UsersService{

    private static path = pathGeneration('/users/')

    static async addRole(userId: string | number, data: {value: string}){
       return instance.patch<IUser>(
            this.path('addRole/' + userId)
        )
    }

    static async getAll(){
        return instance.get<IUser[]>(
            this.path(),
        )
    }

    static async getById(userId: string | number){
        return instance.get<IUser>(
            this.path(userId)
        )
    }
}