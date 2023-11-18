import { instance } from "@/api/api.interceptor"
import { ICompanyData } from "@/models/request/company-data.interface"
import { ICompany } from "@/models/response/company.interface"

export class CompanyService{

    static async getOne(){
       return instance.get<ICompany>(
            '/company'
        )
    }

    static async create(data: ICompanyData){
        return instance.post<ICompany>(
            '/category',
            {...data}
         )
    }

    static async update(data: any){
        return instance.put<ICompany>(
            '/category',
            {...data}
        )
    }
}