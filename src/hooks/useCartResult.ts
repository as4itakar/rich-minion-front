import { useCart } from "./redux/useCart"

export const useCartResult = () => {
    const {items} = useCart()

    const quantity = items.reduce( (acc, el) => acc + el.quantity, 0)

    const price = items.reduce( (acc, el) => acc + (el.price * el.quantity), 0)

    return {quantity, price}
}