import CompanyProduct from '../company-product/CompanyProduct'
import styles from './CompanyProducts.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import { LuPlus } from 'react-icons/lu'
import Button from '../button/Button'
import Sort from '../sort/Sort'
import { useParams } from '@/hooks/useParams'
import { useCompanyProducts } from '@/hooks/fetch/useCompanyProducts'
import { ICompany } from '@/models/company.interface'
import { EnumProductSort } from '@/models/enums/ProductSort'

interface ICompanyProducts{
    company: ICompany
}

const CompanyProducts: FC<ICompanyProducts> = ({company}) => {

    const {search, sort, page} = useParams()

    const {data} = useCompanyProducts({
        searchTerm: search,
        sort: sort as EnumProductSort,
        page,
        perPage: '30'
    }, company.id)

    return (
        <>
            <Sort pages={data?.length ? data.length: 1}/>
            <Link href={'/profile/company/add-product'}>
                <Button Icon={LuPlus} size={25} classVar={'green'}/>
            </Link>
            
            {
                data?.products && data.products.length > 0
                    ?
                <div className={styles.productsContainer}>
                    {
                        data.products.map( product => <CompanyProduct key={product.id} product={product}/>)
                    }
                </div>
                    :
                <div className={styles.errorContainer}>
                    <h1>Продукты отсутствуют...</h1>
                </div>
            }
        </>
    )
}

export default CompanyProducts
