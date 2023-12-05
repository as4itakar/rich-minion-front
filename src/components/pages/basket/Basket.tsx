import BasketGoods from '../../ui/basket-goods/BasketGoods'
import BasketResult from '../../ui/basket-result/BasketResult'
import styles from './Basket.module.scss'

function Basket(){
    return (
        <div className={styles.basketContainer}>
            <BasketGoods/>
            <BasketResult/>
        </div>
    )
}

export default Basket