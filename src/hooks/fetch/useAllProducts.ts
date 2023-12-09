import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { ProductsService } from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useAllProducts = (dto: IGetAllProductData) => {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['get all products', dto.searchTerm, dto.sort, dto.page, dto.perPage],
        queryFn: () => ProductsService.getAll(dto),
        select: ({data}) => data,
    })

    useError(isError, error?.message)

    return {data, isLoading}
}