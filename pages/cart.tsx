import Basket from "@/components/pages/basket/Basket"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"

const CartPage:NextPageAuth = () => {
    return <Basket/>
}

CartPage.isOnlyUser = true

export default CartPage