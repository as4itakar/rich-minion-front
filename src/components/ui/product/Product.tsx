import { IProduct } from '@/models/product.interface'
import styles from './Product.module.scss'
import { FC } from 'react'
import ImageController from '../image-controller/ImageController'

interface IProductUI{
    product: IProduct
}

const Product: FC<IProductUI> = ({product}) => {

    
    return (
        <article className={styles.productContainer}>
            <ImageController customAlt={product.name} customImage={product.images[0]}
             defImage='unknown-profile.jpg' defAlt='unknown'/>
            <div className={styles.descriptionContainer}>
                <h5 className={styles.description}>{product?.name}</h5>
                <div className={styles.line}/>
                <p>{product?.description}</p>
            </div>
        </article>
    )
}

export default Product