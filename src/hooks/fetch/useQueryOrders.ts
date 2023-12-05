import { OrderService } from "@/services/orders/order.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useQueryOrders = () => {
    const {data, error, isError} = useQuery({
        queryKey: ['get orders'],
        queryFn: () => OrderService.get(),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {orders: data}
}