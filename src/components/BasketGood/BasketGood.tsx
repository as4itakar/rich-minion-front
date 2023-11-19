import Image from 'next/image'
import styles from './BasketGood.module.scss'

function BasketGood(){
    return (
        <article className={styles.goodContainer}>
            <Image src='http://localhost:3000/images/minion.png' alt='' width={100} height={100}/>
            <div className={styles.infoContainer}>
                <p className={styles.productInfo}>aklsjgfgksgfklgggfkl</p>
                <p className={styles.brandInfo}>pLhad</p>
            </div>
            <div className={styles.costContainer}>
                <h1>1553р</h1>
                <div className={styles.counter}>
                    <button className={styles.decrement} type='button'>-</button>
                    <input className={styles.countField} type="text" value={1}/>
                    <button className={styles.increment} type='button'>+</button>
                </div>
            </div>
        </article>
    )
}

export default BasketGood