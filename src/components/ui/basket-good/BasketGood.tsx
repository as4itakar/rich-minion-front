import styles from './BasketGood.module.scss'
import { ICartItem } from '@/models/cart.interface'
import { MdOutlineDelete } from "react-icons/md";
import { FC } from 'react'
import { useActions } from '@/hooks/redux/useActions';
import Counter from '@/components/ui/counter/Counter';
import ImageController from '../image-controller/ImageController';
import { currencyFormat } from '@/utils/currencyFormat';

interface IBasketGood{
    item: ICartItem
}

const BasketGood:FC<IBasketGood> = ({item}) => {

    const {removeFromCart, changeQuantity} = useActions()

    const remove = () => {
        const id = item.product.id
        removeFromCart({id})
    }

    const change = (type: 'minus' | 'plus') => {
        const id = item.id
        changeQuantity({id, type})
    }

    return (
        <div className={styles.goodContainer}>
            <div className={styles.imageContainer}>
                <ImageController customAlt={item.product.name} customImage={item.product.images[0]}
                 defImage='unknown-profile.jpg' defAlt='unknown'/>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.productInfo}>{item.product.name}</p>
                <p className={styles.brandInfo}>pLhad</p>
            </div>
            <div className={styles.costContainer}>
                <h1>{currencyFormat(item.price)}</h1>
                <Counter change={change} counter={item.quantity}/>
                <MdOutlineDelete size={25} onClick={remove} className={styles.icon} />
            </div>
        </div>
    )
}

export default BasketGood