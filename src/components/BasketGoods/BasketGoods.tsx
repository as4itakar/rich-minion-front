import BasketGood from '../BasketGood/BasketGood'
import styles from './BasketGoods.module.scss'

function BasketGoods(){
    return (
        <div className={styles.goodsContainer}>
            <BasketGood/>
            <BasketGood/>
            <BasketGood/>
            <BasketGood/>
        </div>
    )
}

export default BasketGoods