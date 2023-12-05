import { FC } from 'react'
import styles from './Reviews.module.scss'
import { IReview } from '@/models/review.interface'
import ReviewPanel from '../review-panel/ReviewPanel'

interface IReviews{
    reviews?: IReview[]
}

const Reviews: FC<IReviews> = ({reviews}) => {
    return (
        <div className={styles.reviewList}>
                    {
                        reviews?.map( review => <ReviewPanel key={review.id} review={review}/>)
                    }
        </div>
    )
}

export default Reviews