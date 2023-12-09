import { IGetAllProductData } from "@/services/products/products-filter-data.interface"
import { ProductsService } from "@/services/products/products.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"
import { successToast, errorToast } from "@/utils/toasterActions"

export const useCompanyProducts = (dto: IGetAllProductData,companyId: string) => {
    const { data, isError, error, refetch, isLoading } = useQuery({
        queryKey: ['get company products', dto.searchTerm, dto.sort, dto.page, dto.perPage],
        queryFn: () => ProductsService.getByCompany(dto, companyId),
        select: ({data}) => data
    })

    const {mutateAsync} = useMutation({
        mutationKey: ['delete company product'],
        mutationFn: ProductsService.delete,
        onSuccess() {
            successToast('Продукт успешно удален!')
            refetch()
        },
        onError(error) {
            errorToast(error.message)
        }
    })

    const deleteProduct = (id: string | number) => {
        mutateAsync(id)
    }

    useError(isError, error?.message)

    return {data, deleteProduct, isLoading}
}