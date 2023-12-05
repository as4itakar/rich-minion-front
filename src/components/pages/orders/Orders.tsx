import Order from '@/components/ui/order/Order'
import styles from './Orders.module.scss'
import { useQueryOrders } from '@/hooks/fetch/useQueryOrders'
const Orders = () => {

    const {orders} = useQueryOrders()

    return (
        <div className={styles.ordersContainer}>
            <h1>Заказы</h1>
            {
                orders && orders.length > 0 &&
                orders.map( order => <Order order={order}/>)
            }
        </div>
    )
}

export default Orders