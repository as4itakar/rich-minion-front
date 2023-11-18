import { instance } from "@/api/api.interceptor"
import { IRoleData } from "@/models/request/role-data.interface"
import { IRole } from "@/models/response/role.interface"

export class UsersService{

    static async create(data: IRoleData){
       return instance.post<IRole>(
            '/roles',
            {...data}
        )
    }

}