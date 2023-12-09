import { FC } from 'react'
import styles from './ErrorContainer.module.scss'

interface IErrorContainer{
    text: string
}

const ErrorContainer: FC<IErrorContainer> = ({text}) => {
    return (
        <div className={styles.errorContainer}>
            <h1>{text}</h1>
        </div>
    )
}

export default ErrorContainer