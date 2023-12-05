import { FC } from 'react'
import styles from './Counter.module.scss'

interface ICounter{
    change: (type: 'minus' | 'plus') => void,
    counter: number
}

const Counter:FC<ICounter> = ({change, counter}) => {
    return (
        <div className={styles.counter}>
            <button className={styles.decrement} type='button' onClick={ () => change('minus')}>-</button>
            <div className={styles.countField}>{counter}</div>
            <button className={styles.increment} type='button' onClick={ () => change('plus')}>+</button>
        </div>
    )
}

export default Counter