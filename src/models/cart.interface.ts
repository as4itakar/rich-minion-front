import { IProduct } from "./product.interface"

export interface ICartItem{
    id: number
    quantity: number
    price: number
    product: IProduct
}

export interface ICartState{
    items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'>{}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'>{
    type: 'minus' | 'plus'
}