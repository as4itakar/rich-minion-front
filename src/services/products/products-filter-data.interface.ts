import { EnumProductSort } from "@/models/enums/ProductSort"

export interface IGetAllProductData{
    sort?: EnumProductSort 
    searchTerm?: string 
    page?: string 
    perPage?: string 
}