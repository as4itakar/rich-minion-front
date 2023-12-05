import { useRandomProducts } from '@/hooks/fetch/useRandomProducts'
import styles from './RandomProducts.module.scss'
import Products from '../products/Products'
import Button from '../button/Button'
import Link from 'next/link'

const RandomProducts = () => {

    const {products} = useRandomProducts()    

    return (
        <div className={styles.randomContainer}>
            {
                products && products.length > 0 &&
                <Products products={products}/>
            }
            <div className={styles.buttonContainer}>
                <Link href='/products'>
                    <Button text="ЕЩЕ" classVar='black'/>
                </Link>
            </div>
        </div>
    )
}

export default RandomProducts