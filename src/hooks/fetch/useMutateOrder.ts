import { OrderService } from "@/services/orders/order.service"
import { errorToast, successToast } from "@/utils/toasterActions"
import { useMutation } from "@tanstack/react-query"
import { useCart } from "../redux/useCart"
import { useActions } from "../redux/useActions"
import { EnumOrderStatus } from "@/models/enums/OrderStatus"

export const useMutateOrder = () => {

    const {items} = useCart()

    const {reset} = useActions()

    const {mutateAsync} = useMutation({
        mutationKey: ['update favorites'],
        mutationFn: OrderService.create,
        onSuccess() {
            reset()
            successToast('Заказ успешно создан!')
        },
        onError(error) {
            errorToast(error.message)
        }
    })

    const createOrder = () => {
        const orderItems = items.map( item => ({
            quantity: item.quantity,
            price: item.price,
            productId: item.product.id
        }))

        mutateAsync({status: EnumOrderStatus.PENDING, items: orderItems})
    }

    return {createOrder}
}