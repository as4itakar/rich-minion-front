import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './FilenInput.module.scss'


interface IFileInput extends InputHTMLAttributes<HTMLInputElement>{
    inputName: string
    mult: boolean
    errors?: string
}

const  FileInput = forwardRef<HTMLInputElement, IFileInput>(({mult, inputName, errors, ...rest}, ref) => {
    return(
        <>
            <label className={styles.imageLabel} htmlFor="image">Выберите изображение</label>
            <input className={styles.unvis} multiple={mult} ref={ref} type="file" id='image' {...rest} name={inputName} />
            {
                errors && <p className={styles.error}>{errors}</p>
            }
        </>
    )
})

export default FileInput