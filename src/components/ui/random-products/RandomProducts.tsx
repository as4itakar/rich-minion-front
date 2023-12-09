import { useRandomProducts } from '@/hooks/fetch/useRandomProducts'
import styles from './RandomProducts.module.scss'
import Products from '../products/Products'
import Button from '../button/Button'
import Link from 'next/link'

const RandomProducts = () => {

    const {products, isLoading} = useRandomProducts()    

    
    return (
 
        <div className={styles.randomContainer}>
            <Products isLoading={isLoading} products={products}/>
            <div className={styles.buttonContainer}>
                <Link href='/products'>
                    <Button text="ЕЩЕ" classVar='black'/>
                </Link>
            </div>
        </div>
    )

}

export default RandomProducts