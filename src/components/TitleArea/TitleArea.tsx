import ITextArea from "@/models/UI/ITextArea"
import styles from "./TitleArea.module.scss"

function TitleArea({text}: ITextArea){
    return (
        <article className={styles.textArea}>
            <p>{text}</p>
        </article>
    )
}

export default TitleArea