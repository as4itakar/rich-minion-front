import { EnumOrderStatus } from "./enums/OrderStatus"
import { IProduct } from "./product.interface"

export interface IOrder{
    id: number
    status: EnumOrderStatus,
    items: IOrderItem[]
}

export interface IOrderItem{
    id: number
    quantity: number,
    price: number,
    productId: number
    product: IProduct
}

