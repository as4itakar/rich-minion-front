import { EnumOrderStatus } from "@/models/enums/OrderStatus"

export interface IOrderData{
    status: EnumOrderStatus
    items: IOrderItemData[]   
}

export interface IOrderItemData{
    quantity: number
    price: number
    productId: number
}