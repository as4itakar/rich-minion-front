import { useCart } from '@/hooks/redux/useCart'
import styles from './BasketGoods.module.scss'
import BasketGood from '../basket-good/BasketGood'
import { ICartItem } from '@/models/cart.interface'
import { FC } from 'react'

interface IBasketGood{
    items: ICartItem[]
}

const BasketGoods: FC<IBasketGood> = ({items}) => {

    return (
        <div className={styles.goodsContainer}>
            {
                items?.map( item => <BasketGood item={item} key={item.id}/>)
            }
        </div>
    )
}

export default BasketGoods