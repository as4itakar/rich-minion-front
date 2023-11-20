export interface IOrder{
    id: number,
    status: string,
    items: IOrderItem[]
}

export interface IOrderItem{
    id: number,
    quantity: number,
    price: number
}

