import styles from './ProductReviews.module.scss'
import { FC } from 'react'
import { IReview } from '@/models/review.interface'
import Reviews from '../reviews/Reviews'
import CreateReview from '../create-review/CreateReview'
import { useAuth } from '@/hooks/redux/useAuth'

interface IProductReviews{
    id: number
    mutateAsync: (data: {rating: number, text: string, productId: number}) => void
    reviews?: IReview[],
    isLoading: boolean
}

const ProductReviews: FC<IProductReviews> = ({id, mutateAsync, reviews, isLoading}) => {

    const {user} = useAuth()

    return (
        <div className={styles.reviewsContainer}>
            {
                user && <CreateReview id={id} mutateAsync={mutateAsync}/>
            }
            <Reviews reviews={reviews} isLoading={isLoading}/>
        </div>
    )
}

export default ProductReviews