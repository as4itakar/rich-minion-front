import { EnumProductSort } from '@/models/enums/ProductSort'
import styles from './QuerySelect.module.scss'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISelect{
    sort: EnumProductSort,
    setSort: Dispatch<SetStateAction<EnumProductSort>>
}

const QuerySelect:FC<ISelect> = ({sort, setSort}) => {

    return (
        <div className={styles.customSelect}>
            <select value={sort} onChange={e => setSort(e.target.value as any)} className={styles.select}>
                {
                    (Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>).map( key => <option key={EnumProductSort[key]} value={EnumProductSort[key]}>{EnumProductSort[key]}</option>)
                }
            </select>
        </div>
    )
}

export default QuerySelect