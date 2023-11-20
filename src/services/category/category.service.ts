import { instance } from "@/api/api.interceptor";
import { ICategoryData } from "@/services/category/category-data.interface";
import { ICategory } from "@/models/category.interface";

export class CategoryService{

    static async getAll(){
       return instance.get<ICategory[]>(
            '/category'
        )
    }

    static async getById(id: string | number){
        return instance.get<ICategory[]>(
            '/category/' + id
         )
    }

    static async create(data: ICategoryData){
        return instance.post<ICategory>(
            '/category',
            {...data}
        )
    }

    static async update(id: number | string, data: ICategoryData){
        return instance.put<ICategory>(
            '/category/' + id,
            {...data}
        )
    }
}