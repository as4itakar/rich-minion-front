import { useAllProducts } from '@/hooks/fetch/useAllProducts'
import Products from '../../ui/products/Products'
import Sort from '@/components/ui/sort/Sort'
import { useParams } from '@/hooks/useParams'
import { EnumProductSort } from '@/models/enums/ProductSort'


const Catalog = () => {
    
    const {search, sort, page} = useParams()

    const {data, isLoading} = useAllProducts({
        searchTerm: search,
        sort: sort as EnumProductSort,
        page,
        perPage: '30'
    })

    return (
        <>
            <Sort pages={data ? data?.length : 1}/>
            {
                <Products isLoading={isLoading} products={data?.products}/>
            }
        </>
    )
}

export default Catalog