import { FC } from 'react';
import styles from './QueryPagination.module.scss'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface IPage{
    page: number,
    changePage: (type: 'increase' | 'decrease') => void,
    pages: number
}

const QueryPagination: FC<IPage> = ({page, changePage, pages}) => {

    return (
        <div className={styles.paginationContainer}>
            {
                page > 1 && <FaArrowLeft size={25} onClick={() => changePage('decrease')} className={styles.icon}/>
            }
            <h5>{page}</h5>
            {
                page < pages && <FaArrowRight size={25} onClick={() => changePage('increase')} className={styles.icon}/>
            }
        </div>
    )
}

export default QueryPagination