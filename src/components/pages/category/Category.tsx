import styles from './Category.module.scss'
import { FC } from 'react'
import { ICategory } from '@/models/category.interface'
import { useCategoryProducts } from '@/hooks/fetch/useCategoryProducts'
import Products from '../../ui/products/Products'
import { useParams } from '@/hooks/useParams'
import Sort from '@/components/ui/sort/Sort'
import { EnumProductSort } from '@/models/enums/ProductSort'


const Category: FC<{category: ICategory}> = ({category}) => {

    const {search, sort, page} = useParams()

    const {data} = useCategoryProducts({
        searchTerm: search,
        sort: sort as EnumProductSort,
        page,
        perPage: '30'
    },category.id)

    return (
        <div className={styles.categoryContainer}>
            <h1>{category.name}</h1>
            <Sort pages={data ? data?.length: 1}/>
            {
                data?.products && data.products.length > 0 &&
                <Products products={data?.products}/>
            }
        </div>
    )
}

export default Category