import { ProductsService } from "@/services/products/products.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useRandomProducts = () => {
    const {data, error, isError} = useQuery({
        queryKey: ['get orders'],
        queryFn: () => ProductsService.getRandom(),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {products: data}
}