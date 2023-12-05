import { useCart } from '@/hooks/redux/useCart'
import styles from './BasketGoods.module.scss'
import BasketGood from '../basket-good/BasketGood'

function BasketGoods(){

    const {items} = useCart()

    return (
        <div className={styles.goodsContainer}>
            {
                items?.map( item => <BasketGood item={item} key={item.id}/>)
            }
        </div>
    )
}

export default BasketGoods