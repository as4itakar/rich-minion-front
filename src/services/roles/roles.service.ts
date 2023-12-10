import { instance } from "@/api/api.interceptor"
import { IRoleData } from "@/services/roles/role-data.interface"
import { IRole } from "@/models/role.interface"
import { FetchMethods } from "@/models/enums/FetchMethods"
import { Paths } from "@/utils/Paths"

export class UsersService{

    static async create(data: IRoleData){
       return instance<IRole>({
            method: FetchMethods.POST,
            url: Paths.rolesPaths(),
            data
       })
    }

}