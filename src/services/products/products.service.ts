import { instance } from "@/api/api.interceptor"
import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { IProduct, IStaticProducts } from "@/models/product.interface"
import { errorToast, successToast } from "@/utils/toasterActions"
import { errorCatch } from "@/api/api.helper"
import { FetchMethods } from "@/models/enums/FetchMethods"
import { Paths } from "@/utils/Paths"

export class ProductsService{

    static async getAll(queryData = {} as IGetAllProductData){
       return instance<IStaticProducts>({
            url: Paths.productsPaths(),
            method: FetchMethods.GET,
            params: queryData
        })
    }

    static async getById(id: string | number){
        return instance<IProduct>({
            method: FetchMethods.GET,
            url: Paths.productsPaths('one/' + id)
        })
    }

    static async getByCategory(queryData = {} as IGetAllProductData,categoryId: string | number){
        return instance<IStaticProducts>({
            url:  Paths.productsPaths('category/' + categoryId),
            method: FetchMethods.GET,
            params: queryData
    })
    }

    static async getByCompany(queryData = {} as IGetAllProductData,companyId: string | number){
        return instance<IStaticProducts>({
            url:  Paths.productsPaths('company/' + companyId),
            method: FetchMethods.GET,
            params: queryData
        })
    }

    static async create(data: FormData){
        try {
            await instance<{message: string}>({
                method: FetchMethods.POST,
                url: Paths.productsPaths(),
                headers: { "Content-Type": "multipart/form-data" },
                data
            })
    
            successToast('Продукт успешно создан!')
        } catch (error) {
            errorToast(errorCatch(error))
        }
    }

    static async update(id: number | string, data: FormData){
        try {
            await instance<{message: string}>({
                method: FetchMethods.PUT,
                url: Paths.productsPaths(id),
                headers: { "Content-Type": "multipart/form-data" },
                data
            })

            successToast('Продукт успешно обновлен!')
        } catch (error) {
            errorToast(errorCatch(error))
        }
    }

    static async getRandom(){
        return instance<IProduct[]>({
            method: FetchMethods.GET,
            url: Paths.productsPaths('random'),
        })
    }

    static async delete(id: string | number){
        return instance({
            method: FetchMethods.DELETE,
            url: Paths.productsPaths(id)
        })
    }
}