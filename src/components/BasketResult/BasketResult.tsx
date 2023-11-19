import styles from './BasketResult.module.scss'

function BasketResult(){
    return (
        <div className={styles.resultContainer}>
            <p className={styles.resultInfo}>Всего: 2 товара</p>
            <p className={styles.resultInfo}>Суммарный вес: 0.3кг</p>
            <p className={styles.resultInfo}>Скидка: <span className={styles.sale}>-800р</span></p>
            <p className={styles.resultInfo}>К оплате: <span className={styles.cost}>1553р</span></p>
            <button className={styles.button} type='button'>Оплатить</button>
        </div>
    )
}

export default BasketResult