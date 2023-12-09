import { instance } from "@/api/api.interceptor";
import { ICategory } from "@/models/category.interface";
import { errorToast, successToast } from "@/utils/toasterActions";
import { errorCatch } from "@/api/api.helper";
import { pathGeneration } from "@/utils/pathCreator";
import { FetchMethods } from "@/models/enums/FetchMethods";

export class CategoryService{

    private static path = pathGeneration('/category/')

    static async getAll(){
       return instance<ICategory[]>({
            method: FetchMethods.GET,
            url: this.path()
       })
    }

    static async getById(id: string | number){
        return instance<ICategory>({
           method: FetchMethods.GET,
           url: this.path(id)
        })
    }

    static async create(data: FormData){
       try {
            instance<ICategory>({
                url: this.path(),
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
            url: this.path(id)
        })
    }
}
