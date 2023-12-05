import { IReview } from "@/models/review.interface"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export const useReviewForm = (id: number, mutateAsync: (data: {rating: number, text: string, productId: number}) => void) => {
    const [rate, setRate] = useState<number>(5)

    const {
        register: formRegister,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<Pick<IReview, 'text'>>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<Pick<IReview, 'text'>> = data => {
        mutateAsync({rating: rate, text: data.text, productId: id})
        reset()
    }

    return {formRegister, handleSubmit, rate, setRate, onSubmit, errors, isValid}

}
