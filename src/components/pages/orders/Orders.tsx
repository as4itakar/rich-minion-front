import styles from './Orders.module.scss'
import { useQueryOrders } from '@/hooks/fetch/useQueryOrders'
import OrdersContainer from '@/components/ui/orders-container/OrdersContainer'
import ErrorContainer from '@/components/ui/error-container/ErrorContainer'
const Orders = () => {

    const {orders, isLoading} = useQueryOrders()

    return (
        <div className={styles.ordersContainer}>
            <h1>Заказы</h1>
            {
                orders && orders.length > 0
                ?
                <OrdersContainer key="orders-container" orders={orders}/>
                :
                isLoading 
                ?
                <ErrorContainer key="error-container" text='Загрузка...'/>
                :
                <ErrorContainer key="error-container" text='Заказов не найдено...'/>
            }
        </div>
    )
}

export default Orders