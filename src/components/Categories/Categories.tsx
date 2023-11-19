import Product from '../Product/Product'
import styles from './Categories.module.scss'

function Categories(){
    return (
        <article className={ styles.categoriesContainer}>
            <div className={styles.container}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className={styles.line}/>
        </article>
    )
}

export default Categories