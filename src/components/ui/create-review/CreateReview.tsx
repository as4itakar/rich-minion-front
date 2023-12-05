import { useReviewForm } from '@/hooks/form/useReviewForm'
import styles from './CreateReview.module.scss'
import { FC } from 'react'
import Button from '../button/Button'
import FormInput from '../form-input/form-input'
import StarRating from '../star-rating/StarRating'

interface ICreateReview{
    id: number
    mutateAsync: (data: {rating: number, text: string, productId: number}) => void
}

const CreateReview:FC<ICreateReview> = ({id, mutateAsync}) => {
    
    const {formRegister, handleSubmit, rate, setRate, onSubmit, errors, isValid} = useReviewForm(id, mutateAsync)
    
    return (
        <form className={styles.reviewForm} onSubmit={handleSubmit(onSubmit)}>
            <h3>Оставьте комментарий:</h3>
            <StarRating rating={rate} callBack={setRate}/>
            <FormInput error={errors.text?.message} inputName={'text'} type='text' placeholder='Введите комметарий...' 
            {...formRegister('text', {required: 'Сначала напишите комментарий!'})}/>
            <Button disabled={isValid} classVar='black' text='ОТПРАВИТЬ' type='submit'/>
        </form>
    )
}

export default CreateReview