import styles from './Product.module.scss'
import Image from 'next/image'

function Product(){
    return (
        <article className={styles.productContainer}>
            <Image src='http://localhost:3000/images/sumka.jpg' fill alt=''/>
            <div className={styles.descriptionContainer}>
                <h5 className={styles.description}>ZXC</h5>
                <div className={styles.line}/>
                <p>Ajkgkjlgkjlgkjlgg hjg jhgjkfh kljb lb kbjhvj kljnlkbjlhvljh.</p>
            </div>
        </article>
    )
}

export default Product