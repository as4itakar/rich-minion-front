import { CompanyService } from "@/services/company/company.service"
import { useQuery } from "@tanstack/react-query"
import { useError } from "../useStatus"
import { useAuth } from "../redux/useAuth"

export const useCompany = () => {

    const {user} = useAuth()

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['get personal company', user?.id],
        queryFn: () => CompanyService.getOne(),
        select: ({data}) => data
    })

    useError(isError, error?.message)

    return {company: data, isLoading}
}