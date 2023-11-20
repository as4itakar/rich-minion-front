import { instance } from "@/api/api.interceptor"
import { IProfileData } from "@/services/profile/profile-data.interface"
import { IProfile } from "@/models/profile.interface"

export class ProfileService{

    static async update(data: IProfileData){
       return instance.put<IProfile>(
            '/profile',
            {...data}
        )
    }
}