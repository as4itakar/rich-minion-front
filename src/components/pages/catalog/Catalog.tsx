import { useAllProducts } from '@/hooks/fetch/useAllProducts'
import Products from '../../ui/products/Products'
import Sort from '@/components/ui/sort/Sort'
import { useParams } from '@/hooks/useParams'
import { EnumProductSort } from '@/models/enums/ProductSort'


const Catalog = () => {
    
    const {search, sort, page} = useParams()

    const {data} = useAllProducts({
        searchTerm: search,
        sort: sort as EnumProductSort,
        page,
        perPage: '30'
    })

    return (
        <>
            <Sort pages={data ? data?.length : 1}/>
            {
                data?.products && data.products.length > 0 &&
                <Products products={data.products}/>
            }
        </>
    )
}

export default Catalog