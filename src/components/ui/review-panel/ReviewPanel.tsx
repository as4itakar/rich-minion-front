import { IReview } from '@/models/review.interface'
import styles from './ReviewPanel.module.scss'
import { FC } from 'react'

interface IReviewPanel{
    review: IReview
}

const ReviewPanel: FC<IReviewPanel> = ({review}) => {
    return (
        <div className={styles.reviewWrapper}>
            <h5>{review.user.email}</h5>
            <p>{review.text}</p>
        </div>
    )
}

export default ReviewPanel