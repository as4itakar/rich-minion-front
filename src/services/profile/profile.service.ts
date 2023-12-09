import { instance } from "@/api/api.interceptor"
import { IProfile } from "@/models/profile.interface"
import { IFavorites } from "@/models/favorites.interface"
import { pathGeneration } from "@/utils/pathCreator"
import { FetchMethods } from "@/models/enums/FetchMethods"

export class ProfileService{

    private static path = pathGeneration('/profile/')

    static async update(data: FormData){
       return instance<IProfile>({
            method: FetchMethods.PUT,
            url: this.path(),
            headers: { "Content-Type": "multipart/form-data" },
            data
       })
    }

    static async get(){
        return instance<IProfile>({
            method: FetchMethods.GET,
            url: this.path(),
        })
    }

    static async toggleFav(productId: string | number){
        return instance<{message: string}>({
            method: FetchMethods.PATCH,
            url: this.path('favorites/' + productId)
        })
    }

    static async getFav(productId: string | number){
        return instance<IFavorites[]>({
            method: FetchMethods.GET,
            url: this.path('favorites/' + productId)
        })
    }
}