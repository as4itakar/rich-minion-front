import { instance } from "@/api/api.interceptor"
import { IRoleData } from "@/services/roles/role-data.interface"
import { IRole } from "@/models/role.interface"
import { pathGeneration } from "@/utils/pathCreator"
import { FetchMethods } from "@/models/enums/FetchMethods"

export class UsersService{

    private static path = pathGeneration('/roles/')

    static async create(data: IRoleData){
       return instance<IRole>({
            method: FetchMethods.POST,
            url: this.path(),
            data
       })
    }

}