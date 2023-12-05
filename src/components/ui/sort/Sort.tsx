import { FC } from 'react'
import QueryPagination from '../query-pagination/QueryPagination'
import QuerySearch from '../query-search/QuerySearch'
import QuerySelect from '../query-select/QuerySelect'
import styles from './Sort.module.scss'
import { useSort } from '@/hooks/useSort'

interface ISort{
    pages: number,
}

const Sort: FC<ISort> = ({pages}) => {

    const {sort, setSort, search, setSearch, page, changePage} = useSort()

    return (
        <div className={styles.sortContainer}>
            <QuerySearch search={search} setSearch={setSearch}/>
            <QuerySelect sort={sort} setSort={setSort}/>
            <QueryPagination pages={pages} page={page} changePage={changePage}/>
        </div>
    )
}

export default Sort