import { instance } from "@/api/api.interceptor"
import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { IProduct, IStaticProducts } from "@/models/product.interface"
import { errorToast, successToast } from "@/utils/toasterActions"
import { errorCatch } from "@/api/api.helper"
import { pathGeneration } from "@/utils/pathCreator"
import { FetchMethods } from "@/models/enums/FetchMethods"

export class ProductsService{

    private static path = pathGeneration('/products/')

    static async getAll(queryData = {} as IGetAllProductData){
       return instance<IStaticProducts>({
            url: this.path(),
            method: FetchMethods.GET,
            params: queryData
        })
    }

    static async getById(id: string | number){
        return instance<IProduct>({
            method: FetchMethods.GET,
            url: this.path('one/' + id)
        })
    }

    static async getByCategory(queryData = {} as IGetAllProductData,categoryId: string | number){
        return instance<IStaticProducts>({
            url:  this.path('category/' + categoryId),
            method: FetchMethods.GET,
            params: queryData
    })
    }

    static async getByCompany(queryData = {} as IGetAllProductData,companyId: string | number){
        return instance<IStaticProducts>({
            url:  this.path('company/' + companyId),
            method: FetchMethods.GET,
            params: queryData
        })
    }

    static async create(data: FormData){
        try {
            await instance<{message: string}>({
                method: FetchMethods.POST,
                url: this.path(),
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
                url: this.path(id),
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
            url: this.path('random'),
        })
    }

    static async delete(id: string | number){
        return instance({
            method: FetchMethods.DELETE,
            url: this.path(id)
        })
    }
}