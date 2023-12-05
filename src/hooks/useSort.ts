
import { EnumProductSort } from "@/models/enums/ProductSort"
import { useRouter } from "next/router"
import { useState, useRef, useEffect } from "react"
import { useDebounce } from "use-debounce"

export const useSort = () => {
    const [sort, setSort] = useState<EnumProductSort>(EnumProductSort.NEWEST)

    const [search, setSearch] = useState<string>('')

    const [page, setPage] = useState<number>(1)

    const [query] = useDebounce(search, 500)

    const router = useRouter()

    const pathRef = useRef<string>(router.pathname)

    const checkQueries = () => {
        if (search !== ''){
             return checkId({search: query, sort, page})
        }

        return checkId({sort, page})
    }

    const checkId = (data: {search?: string, sort: string, page: number, id?: string}) => {
        if (router.query.id){
            data.id = router.query.id as string
        }

        return data
    }

    const changePage = (type: 'increase' | 'decrease') => {
        if (type === 'decrease'){
            setPage(page - 1)
            return
        }
        setPage(page + 1)    
    }

    useEffect(() => {
        const mainQuery = checkQueries()

        router.replace({
            pathname: pathRef.current,
            query: mainQuery
        })
        
    }, [sort, query, page])

    return {sort, setSort, search, setSearch, page, changePage}
}