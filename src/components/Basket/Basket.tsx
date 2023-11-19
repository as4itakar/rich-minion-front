import BasketGoods from '../BasketGoods/BasketGoods'
import BasketResult from '../BasketResult/BasketResult'
import styles from './Basket.module.scss'

function Basket(){
    return (
        <article className={styles.basketContainer}>
            <BasketGoods/>
            <BasketResult/>
        </article>
    )
}

export default Basket