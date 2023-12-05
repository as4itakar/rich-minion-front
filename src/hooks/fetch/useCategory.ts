import { CategoryService } from "@/services/category/category.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"

export const useCategory = () => {
    const { data, isError, error } = useQuery({
        queryKey: ['get categories'],
        queryFn: () => CategoryService.getAll(),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {categories: data}
}