import { Dispatch, FC, SetStateAction } from 'react'
import styles from './QuerySearch.module.scss'

interface ISearch{
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const QuerySearch: FC<ISearch> = ({search, setSearch}) => {

    return <input type="text" className={styles.input} value={search} onChange={ e => setSearch(e.target.value)} placeholder='Введите название продукта' />
}

export default QuerySearch