import { FC, SelectHTMLAttributes, forwardRef } from 'react'
import styles from './FormSelect.module.scss'

interface ISelectOptions{
    id: number,
    name: string,
    [key: string]: any
}

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement>{
    options: Array<ISelectOptions>,
    inputName: string
}

const FormSelect = forwardRef<HTMLSelectElement, ISelect>(({options, inputName, ...rest}, ref) => {

    return (
        <div className={styles.customSelect}>
            <select ref={ref} defaultValue={options[0].id} name={inputName} {...rest} className={styles.select}>
                    {
                        options.map( option => <option key={option.id} value={option.id}>{option.name}</option>)
                    }
            </select>
        </div>

    )


})

export default FormSelect