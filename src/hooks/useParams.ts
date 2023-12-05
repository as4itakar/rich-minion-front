import { useSearchParams } from "next/navigation"

export const useParams = () => {
    const searchParams = useSearchParams()

    const search = searchParams.get('search') || ''

    const sort = searchParams.get('sort')

    const page = JSON.parse(searchParams.get('page') || '1') 

    return {search, sort, page}
}