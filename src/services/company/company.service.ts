import { instance } from "@/api/api.interceptor"
import { ICompany } from "@/models/company.interface"
import { errorCatch } from "@/api/api.helper"
import { errorToast, successToast } from "@/utils/toasterActions"
import { pathGeneration } from "@/utils/pathCreator"
import { FetchMethods } from "@/models/enums/FetchMethods"

export class CompanyService{

    private static path = pathGeneration('/company/')

    static getOne(){
       return instance<ICompany>({
            method: FetchMethods.GET,
            url: this.path()
       })
    }

    static getAll(){
        return instance<ICompany[]>({
            method: FetchMethods.GET,
            url: this.path('all')
        })
     }

    static async create(data: FormData){
        try{
            await instance<ICompany>({
                method:FetchMethods.POST,
                url: this.path(),
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
            url: this.path(),
            data,
        })
    }

    static getById(id: string | number){
        return instance<ICompany>({
            method: FetchMethods.GET,
            url: this.path('one/' + id)
        })
     }
}