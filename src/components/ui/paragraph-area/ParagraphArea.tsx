
import { FC } from 'react'
import styles from './ParagraphArea.module.scss'

interface IParagraphArea{
    text: string
}

const ParagraphArea: FC<IParagraphArea> = ({text}) => {
    return (
        <div className={styles.textArea}>
            <p>{text}</p>
        </div>
    )
}

export default ParagraphArea