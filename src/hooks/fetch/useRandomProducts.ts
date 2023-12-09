import { ProductsService } from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useRandomProducts = () => {
    const {data, error, isError, isLoading} = useQuery({
        queryKey: ['get random orders'],
        queryFn: () => ProductsService.getRandom(),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {products: data, isLoading}
}