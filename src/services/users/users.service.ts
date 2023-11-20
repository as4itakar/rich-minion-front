import { instance } from "@/api/api.interceptor"
import { IUser } from "@/models/user.interface"

export class UsersService{

    static async addRole(userId: string | number, data: {value: string}){
       return instance.patch<IUser>(
            '/users/addRole/' + userId
        )
    }

    static async getAll(){
        return instance.get<IUser[]>(
            '/users/',
        )
    }

    static async getById(userId: string | number){
        return instance.get<IUser>(
            '/users/' + userId,
        )
    }
}