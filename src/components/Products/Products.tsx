import Image from 'next/image'
import styles from './Products.module.scss'
import Product from '../Product/Product'

function Products(){
    return (
        <section className={styles.productsContainer}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </section>
    )
}

export default Products