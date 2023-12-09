import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { ProductsService } from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useCategoryProducts = (dto: IGetAllProductData,categoryId: number) => {
    const {data, error, isError, isLoading} = useQuery({
        queryKey: ['get category products', dto.searchTerm, dto.sort, dto.page, dto.perPage],
        queryFn: () => ProductsService.getByCategory(dto,categoryId),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {data, isLoading}
}