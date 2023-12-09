import { useCart } from '@/hooks/redux/useCart'
import BasketGoods from '../../ui/basket-goods/BasketGoods'
import BasketResult from '../../ui/basket-result/BasketResult'
import styles from './Basket.module.scss'
import ErrorContainer from '@/components/ui/error-container/ErrorContainer'

function Basket(){

    const {items} = useCart()

    if (items && items.length > 0) {
        return (
            <div className={styles.basketContainer}>
                <BasketGoods items={items}/>
                <BasketResult/>
            </div>
        )
    }

    return <ErrorContainer text='Корзина пуста...'/>
}

export default Basket