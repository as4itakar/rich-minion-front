import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { ProductsService } from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useCompanyProducts = (dto: IGetAllProductData,companyId: string) => {
    const { data, isError, error } = useQuery({
        queryKey: ['get company products', dto.searchTerm, dto.sort, dto.page, dto.perPage],
        queryFn: () => ProductsService.getByCompany(dto, companyId),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {data}
}