import { instance } from "@/api/api.interceptor"
import { IProfile } from "@/models/profile.interface"
import { IFavorites } from "@/models/favorites.interface"

export class ProfileService{

    static async update(data: FormData){
       return instance<IProfile>({
            method: 'put',
            url: '/profile',
            headers: { "Content-Type": "multipart/form-data" },
            data
       })
    }

    static async get(){
        return instance.get<IProfile>(
            '/profile',
        )
    }

    static async toggleFav(productId: string | number){
        return instance.patch<{message: string}>(
            '/profile/favorites/' + productId,
        )
    }

    static async getFav(productId: string | number){
        return instance.get<IFavorites[]>(
            '/profile/favorites/' + productId,
        )
    }
}