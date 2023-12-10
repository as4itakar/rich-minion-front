import { instance } from "@/api/api.interceptor"
import { ICompany } from "@/models/company.interface"
import { errorCatch } from "@/api/api.helper"
import { errorToast, successToast } from "@/utils/toasterActions"
import { FetchMethods } from "@/models/enums/FetchMethods"
import { Paths } from "@/utils/Paths"

export class CompanyService{

    static getOne(){
       return instance<ICompany>({
            method: FetchMethods.GET,
            url: Paths.companyPaths()
       })
    }

    static getAll(){
        return instance<ICompany[]>({
            method: FetchMethods.GET,
            url: Paths.companyPaths('all')
        })
     }

    static async create(data: FormData){
        try{
            await instance<ICompany>({
                method:FetchMethods.POST,
                url: Paths.companyPaths(),
                headers: { "Content-Type": "multipart/form-data" },
                data
            })

            successToast('Компания успешно создана!')
        }catch(error){
            errorToast(errorCatch(error))
        }
    }

    static update(data: any){
        return instance<ICompany>({
            method: FetchMethods.PUT,
            url: Paths.companyPaths(),
            data,
        })
    }

    static getById(id: string | number){
        return instance<ICompany>({
            method: FetchMethods.GET,
            url: Paths.companyPaths('one/' + id)
        })
     }
}