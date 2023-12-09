import { IProduct } from '@/models/product.interface'
import SlideBar from '../slide-bar/SlideBar'
import styles from './ProductPanel.module.scss'
import { FC } from 'react'
import { useCartControl } from '@/hooks/useCartControl'
import Button from '../button/Button'
import FavoriteController from '../favorite-controller/FavoriteController'
import StarRating from '../star-rating/StarRating'
import { useAuth } from '@/hooks/redux/useAuth'
import { currencyFormat } from '@/utils/currencyFormat'

interface IProductPanel{
    product: IProduct,
    rating?: number
}

const ProductPanel:FC<IProductPanel> = ({product, rating}) => {

    const {add, remove, isOnCard} = useCartControl(product)

    const {user} = useAuth()

    return (
        <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <SlideBar isLink={false} height={400} slider={product.images}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.nameContainer}>
                        <h1>{product.name}</h1>
                        <h5>{currencyFormat(product.price)}</h5>
                    </div>
                    <p>{product?.description}</p>
                    <div className={styles.actionsContainer}>
                        {
                            user && <FavoriteController id={product.id}/>
                        }
                        <StarRating rating={rating}/>
                    </div>
                    {
                        user && 
                        (isOnCard ?
                            <Button callBack={remove} classVar='black' text='Убрать из корзины'/>
                                :
                            <Button callBack={add} classVar='black' text='Добавить в корзину'/>
                        )
                    }
                </div>
            </div>
    )
}

export default ProductPanel