import styles from './OrderItem.module.scss'
import { IOrderItem } from '@/models/order.interface'
import { FC } from 'react'
import ImageController from '../image-controller/ImageController'
import { currencyFormat } from '@/utils/currencyFormat'

interface IOrderItemUI{
    item: IOrderItem
}

const OrderItem: FC<IOrderItemUI> = ({item}) => {
    return (
        <div className={styles.orderItemContainer}>
            <div className={styles.imageContainer}>
                <ImageController customAlt={item.product.name} customImage={item.product.images[0]}
                 defImage='unknown-profile.jpg' defAlt='unknown'/>
            </div>
            <ul className={styles.infoContainer}>
                <li>Название: {item.product.name}</li>
                <li>Количество: {item.quantity}</li>
                <li>Цена: {currencyFormat(item.price)}</li>
            </ul>
        </div>
    )
}

export default OrderItem