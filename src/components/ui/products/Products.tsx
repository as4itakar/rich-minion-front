import styles from './Products.module.scss'
import { IProduct } from '@/models/product.interface'
import { FC } from 'react'
import Product from '../product/Product'
import Link from 'next/link'
import ErrorContainer from '../error-container/ErrorContainer'

interface IProducts{
    products?: IProduct[]
    isLoading: boolean
}

const Products: FC<IProducts> = ({products, isLoading}) => {

    if (products && products.length > 0){
        return (
            <div key='product-container' className={styles.productsContainer}>
                {
                    products.map( product => <Link key={product.id} href={'/products/'+product.id}>
                        <Product product={product}/>
                    </Link>)
                }
            </div>
        )
    }

    return (
        <>
            {
                isLoading 
                ?
                <ErrorContainer key='error-container' text='Загрузка...'/>
                :
                <ErrorContainer key='error-container' text='Продукты не найдены...'/>
            }
        </>
    )
}

export default Products
