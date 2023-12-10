import { instance } from "@/api/api.interceptor"
import { IProfile } from "@/models/profile.interface"
import { IFavorites } from "@/models/favorites.interface"
import { FetchMethods } from "@/models/enums/FetchMethods"
import { Paths } from "@/utils/Paths"

export class ProfileService{

    static async update(data: FormData){
       return instance<IProfile>({
            method: FetchMethods.PUT,
            url: Paths.profilePaths(),
            headers: { "Content-Type": "multipart/form-data" },
            data
       })
    }

    static async get(){
        return instance<IProfile>({
            method: FetchMethods.GET,
            url: Paths.profilePaths(),
        })
    }

    static async toggleFav(productId: string | number){
        return instance<{message: string}>({
            method: FetchMethods.PATCH,
            url: Paths.profilePaths('favorites/' + productId)
        })
    }

    static async getFav(productId: string | number){
        return instance<IFavorites[]>({
            method: FetchMethods.GET,
            url: Paths.profilePaths('favorites/' + productId)
        })
    }
}