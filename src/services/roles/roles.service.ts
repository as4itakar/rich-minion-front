import { instance } from "@/api/api.interceptor"
import { IRoleData } from "@/services/roles/role-data.interface"
import { IRole } from "@/models/role.interface"

export class UsersService{

    static async create(data: IRoleData){
       return instance.post<IRole>(
            '/roles',
            {...data}
        )
    }

}