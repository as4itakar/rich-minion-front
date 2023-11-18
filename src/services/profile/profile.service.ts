import { instance } from "@/api/api.interceptor"
import { IProfileData } from "@/models/request/profile-data.interface"
import { IProfile } from "@/models/response/profile.interface"

export class ProfileService{

    static async update(data: IProfileData){
       return instance.put<IProfile>(
            '/profile',
            {...data}
        )
    }
}