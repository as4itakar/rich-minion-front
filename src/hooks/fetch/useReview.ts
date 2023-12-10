import { ReviewService } from "@/services/review/review.service"
import { errorToast } from "@/utils/toasterActions"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useReview = (productId: number) => {
  
    const {data, refetch, error, isError, isLoading} = useQuery({
        queryKey: ['get reviews'],
        queryFn: () => ReviewService.getByProductId(productId),
        select: ({data}) => data,
        
    })

    const {mutateAsync} = useMutation({
        mutationKey: ['update reviews'],
        mutationFn: ReviewService.create,
        onSuccess(){
            refetch()
        },
        onError(error){
            errorToast(error.message)
        }
    })

    useError(isError, error?.message)

    return {reviews: data?.reviews, rating: data?.rate._avg.rating, mutateAsync, isLoading}
}