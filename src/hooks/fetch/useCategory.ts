import { CategoryService } from "@/services/category/category.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"
import { errorToast, successToast } from "@/utils/toasterActions"

export const useCategory = () => {
    const { data, isError, error, refetch } = useQuery({
        queryKey: ['get categories'],
        queryFn: () => CategoryService.getAll(),
        select: ({data}) => data
    })

    const {mutateAsync} = useMutation({
        mutationKey: ['delete category'],
        mutationFn: CategoryService.delete,
        onSuccess() {
            successToast('Категория успешно удалена')
            refetch()
        },
        onError(error) {
            errorToast(error.message)
        }
    })

    const deleteCategory = (id: string | number) => {
        mutateAsync(id)
    }

    useError(isError, error?.message)

    return {categories: data, deleteCategory}
}