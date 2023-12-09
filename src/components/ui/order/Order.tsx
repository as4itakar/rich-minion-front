import { IOrder } from '@/models/order.interface'
import OrderItem from '../order-item/OrderItem'
import styles from './Order.module.scss'
import { FC } from 'react'

interface IOrderUI{
    order: IOrder
}

const Order: FC<IOrderUI> = ({order}) => {
    return (
        <div className={styles.orderContainer}>
            <h1>Статус: {order.status}</h1>
            {
                order.items && order.items.length > 0 &&
                order.items.map( item => <OrderItem key={item.id} item={item}/>)
            }
        </div>
    )
}

export default Order