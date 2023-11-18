import { instance } from "@/api/api.interceptor"
import { IProductData } from "@/models/request/product-data.interface"
import { IGetAllProductData } from "@/models/request/products-filter-data.interface"
import { IProduct } from "@/models/response/product.interface"

export class ProductsService{

    static async getAll(queryData = {} as IGetAllProductData){
       return instance.get<IProduct[]>(
            '/products',
            {
                params: {
                    ...queryData
                }
            }
        )
    }

    static async getById(id: string | number){
        return instance.get<IProduct>(
            '/products/' + id,
         )
    }

    static async getByCategory(categoryId: string | number){
        return instance.get<IProduct[]>(
            '/products/'+categoryId,
        )
    }

    static async getSimular(id: string | number){
        return instance.post<IProduct>(
            '/products/'+id,
        )
    }

    static async create(data: IProductData){
        return instance.put<IProduct>(
            '/products/',
            {...data}
        )
    }

    static async update(id: number | string, data: IProduct){
        return instance.put<IProduct>(
            '/products/' + id,
            {...data}
        )
    }
}