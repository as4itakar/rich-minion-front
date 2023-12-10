import { instance } from "@/api/api.interceptor";
import { ICategory } from "@/models/category.interface";
import { errorToast, successToast } from "@/utils/toasterActions";
import { errorCatch } from "@/api/api.helper";
import { FetchMethods } from "@/models/enums/FetchMethods";
import { Paths } from "@/utils/Paths";

export class CategoryService{

    static async getAll(){
       return instance<ICategory[]>({
            method: FetchMethods.GET,
            url: Paths.categoryPaths()
       })
    }

    static async getById(id: string | number){
        return instance<ICategory>({
           method: FetchMethods.GET,
           url: Paths.categoryPaths(id)
        })
    }

    static async create(data: FormData){
       try {
            instance<ICategory>({
                url: Paths.categoryPaths(),
                method: FetchMethods.POST,
                headers: { "Content-Type": "multipart/form-data" },
                data
            })

            successToast('Категория успешно создана!')
       }catch (error) {
            errorToast(errorCatch(error))
       }
    }

    static async delete(id: string | number){
        return instance({
            method: FetchMethods.DELETE,
            url: Paths.categoryPaths(id)
        })
    }
}
