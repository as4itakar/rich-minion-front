import { IProduct } from '@/models/product.interface'
import styles from './MultiSlide.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Button from '../button/Button'
import ImageController from '../image-controller/ImageController'

interface IMultiSlide{
    slide: IProduct
}

const MultiSlide: FC<IMultiSlide> = ({slide}) => {
    return(
        <div className={styles.favoriteContainer}>
            <div className={styles.imageContainer}>
                <ImageController customAlt={slide.name} customImage={slide.images[0]}
                 defImage='unknown-profile.jpg' defAlt='unknown'/>
            </div>
            <div className={styles.prodInfo}>
                <h2>{slide.name}</h2>
                <p>{slide.price}</p>
            </div>
            <div className={styles.bottomBtn}>
                <Link href={'/products/'+slide.id}>
                    <Button classVar='black' text='ПЕРЕЙТИ'/>
                </Link>
            </div>
        </div>
    )
}

export default MultiSlide