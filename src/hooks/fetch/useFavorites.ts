import { ProfileService } from "@/services/profile/profile.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"
import { errorToast } from "@/utils/toasterActions"

export const useFavorites = (productId: string | number) => {

    const { data, refetch, isError, error } = useQuery({
        queryKey: ['get favorites'],
        queryFn: () => ProfileService.getFav(productId),
        select: ({data}) => data
    })

    const {mutateAsync} = useMutation({
        mutationKey: ['update favorites'],
        mutationFn: ProfileService.toggleFav,
        onSuccess() {
            refetch()
        },
        onError(error) {
            errorToast(error.message)
        }
    })

    const toggle = () => {
        mutateAsync(productId)
    }

    const checkFav = data?.some( fav => fav.product.id === productId)

    useError(isError, error?.message)
    
    return {toggle, checkFav}
}