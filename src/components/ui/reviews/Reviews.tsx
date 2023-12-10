import { FC } from 'react'
import styles from './Reviews.module.scss'
import { IReview } from '@/models/review.interface'
import ReviewPanel from '../review-panel/ReviewPanel'
import ErrorContainer from '../error-container/ErrorContainer'

interface IReviews{
    reviews?: IReview[],
    isLoading: boolean
}

const Reviews: FC<IReviews> = ({reviews, isLoading}) => {
    return (
        <div className={styles.reviewList}>
                    {
                        reviews && reviews.length > 0 ?
                        reviews.map( review => <ReviewPanel key={review.id} review={review}/>)
                        :
                        isLoading
                        ?
                        <ErrorContainer text='Загрузка...'/>
                        :
                        <ErrorContainer text='Отзывов не найдено...'/>
                    }
        </div>
    )
}

export default Reviews