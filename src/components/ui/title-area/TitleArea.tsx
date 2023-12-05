import { FC } from "react"
import styles from "./TitleArea.module.scss"

interface ITitleArea{
    text: string
}

const TitleArea: FC<ITitleArea> = ({text}) => {
    return (
        <article className={styles.textArea}>
            <p>{text}</p>
        </article>
    )
}

export default TitleArea