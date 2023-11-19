import ITextArea from '@/models/UI/ITextArea'
import styles from './ParagraphArea.module.scss'

function ParagraphArea({text}: ITextArea){
    return (
        <article className={styles.textArea}>
            <p>{text}</p>
        </article>
    )
}

export default ParagraphArea