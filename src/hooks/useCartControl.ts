import { IProduct } from "@/models/product.interface"
import { useActions } from "./redux/useActions"
import { useCart } from "./redux/useCart"

export const useCartControl = (product: IProduct) => {

    const {addToCart, removeFromCart} = useActions()

    const {items} = useCart()

    const add = () => {
        const cartItem = {
            quantity: 1,
            price: product.price,
            product
        }

        addToCart(cartItem)
    }

    const remove = () => {
        const id = product.id
        removeFromCart({id})
    }

    const isOnCard = items?.some( item => item.product.name === product.name)

    return {add, remove, isOnCard}
}