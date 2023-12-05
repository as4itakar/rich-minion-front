import { instance } from "@/api/api.interceptor"
import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { IProduct, IStaticProducts } from "@/models/product.interface"
import { errorToast, successToast } from "@/utils/toasterActions"
import { errorCatch } from "@/api/api.helper"

export class ProductsService{

    static async getAll(queryData = {} as IGetAllProductData){
       return instance<IStaticProducts>({
            url: '/products',
            method: 'GET',
            params: queryData
        })
    }

    static async getById(id: string | number){
        return instance.get<IProduct>(
            '/products/one/' + id,
         )
    }

    static async getByCategory(queryData = {} as IGetAllProductData,categoryId: string | number){
        return instance<IStaticProducts>({
            url: '/products/category/'+categoryId,
            method: 'GET',
            params: queryData
    })
    }

    static async getByCompany(queryData = {} as IGetAllProductData,companyId: string | number){
        return instance<IStaticProducts>({
            url: '/products/company/'+companyId,
            method: 'GET',
            params: queryData
        })
    }

    static async getSimular(id: string | number){
        return instance.post<IProduct>(
            '/products/'+id,
        )
    }

    static async create(data: FormData){
        try {
            await instance<{message: string}>({
                method: 'post',
                url:'/products',
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
                method: 'put',
                url: '/products/' + id,
                headers: { "Content-Type": "multipart/form-data" },
                data
            })

            successToast('Продукт успешно обновлен!')
        } catch (error) {
            errorToast(errorCatch(error))
        }
    }

    static async getRandom(){
        return instance.get<IProduct[]>(
            '/products/random',
        )
    }
}