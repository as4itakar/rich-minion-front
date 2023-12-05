import { instance } from "@/api/api.interceptor"
import { ICompany } from "@/models/company.interface"
import { errorCatch } from "@/api/api.helper"
import { errorToast, successToast } from "@/utils/toasterActions"

export class CompanyService{

    static getOne(){
       return instance.get<ICompany>(
            '/company'
        )
    }

    static getAll(){
        return instance.get<ICompany[]>(
             '/company/all'
         )
     }

    static async create(data: FormData){
        try{
            await instance<ICompany>({
                method:'post',
                url: '/company',
                headers: { "Content-Type": "multipart/form-data" },
                data
            })

            successToast('Компания успешно создана!')
        }catch(error){
            errorToast(errorCatch(error))
        }
    }

    static update(data: any){
        return instance.put<ICompany>(
            '/company',
            {...data},
        )
    }

    static getById(id: string | number){
        return instance.get<ICompany>(
             '/company/one/' + id
         )
     }
}