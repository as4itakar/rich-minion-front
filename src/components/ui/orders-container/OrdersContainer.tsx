import { IOrder } from "@/models/order.interface"
import Order from "../order/Order"
import { FC } from "react"

interface IOrdersContiner{
    orders: IOrder[]
}

const OrdersContainer: FC<IOrdersContiner> = ({orders}) => {
    return (
        <>
            {
                 orders.map( order => <Order key={order.id} order={order}/>)
            }
        </>
    )
}

export default OrdersContainer