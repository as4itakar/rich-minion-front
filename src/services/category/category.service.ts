import { instance } from "@/api/api.interceptor";
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

    static async create(data: Pick<ICategory, 'name' | 'image'>){
        return instance.post<ICategory>(
            '/category',
            {...data}
        )
    }

    static async update(id: number | string, data: Pick<ICategory, 'name' | 'image'>){
        return instance.put<ICategory>(
            '/category/' + id,
            {...data}
        )
    }
}