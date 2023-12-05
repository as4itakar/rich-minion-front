import styles from './ProductInfo.module.scss'
import { IProduct } from '@/models/product.interface';
import { FC } from 'react';
import { useReview } from '@/hooks/fetch/useReview';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductPanel from '@/components/ui/product-panel/ProductPanel';
import ProductReviews from '@/components/ui/product-reviews/ProductReviews';

const ProductInfo: FC<{product: IProduct}> = ({product}) => {

    const {reviews, rating, mutateAsync} = useReview(product.id)

    return (
        <div className={styles.productInfo}>
            <ProductPanel product={product} rating={rating}/>
            <ProductReviews mutateAsync={mutateAsync} reviews={reviews} id={product.id}/>
        </div>
    )
}

export default ProductInfo