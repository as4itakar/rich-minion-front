import { useCartResult } from '@/hooks/useCartResult'
import styles from './BasketResult.module.scss'
import { useMutateOrder } from '@/hooks/fetch/useMutateOrder'
import Button from '../button/Button'

interface IBasketResult{
}

function BasketResult(){

    const {quantity, price} = useCartResult()

    const {createOrder} = useMutateOrder()

    return (
        <div className={styles.resultContainer}>
            <p className={styles.resultInfo}>Всего: {quantity} товара</p>
            <p className={styles.resultInfo}>К оплате: <span className={styles.cost}>{price} руб.</span></p>
            <Button callBack={createOrder} classVar='black' text='ОПЛАТИТЬ'/>
        </div>
    )
}

export default BasketResult