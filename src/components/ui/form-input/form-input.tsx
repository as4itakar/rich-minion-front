import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './form-input.module.scss'

export interface IFormField extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string,
    error?: string,
    inputName: string
}

const FormInput = forwardRef<HTMLInputElement, IFormField>((
    {inputName = 'email', placeholder, error, type = 'text', ...rest},
    ref
    ) => {
    return (
        <>
            <input ref={ref} className={styles.input} name={inputName} type={type} placeholder={placeholder} {...rest}/>
            <p className={styles.error}>{error}</p>
        </>
    )
}) 

export default FormInput