import styles from './Products.module.scss'
import { IProduct } from '@/models/product.interface'
import { FC } from 'react'
import Product from '../product/Product'
import Link from 'next/link'

const Products: FC<{products: IProduct[]}> = ({products}) => {

    return (
        <div className={styles.productsContainer}>
            {
                products && products.length > 0 &&
                products.map( product => <Link key={product.id} href={'/products/'+product.id}>
                    <Product product={product}/>
                </Link>)
            }
        </div>
    )
}

export default Products
