import { imagesLink } from '@/utils/imagesLink'
import styles from './Logo.module.scss'
import Image from 'next/image'

const Logo = () => {
    return (
        <article className={styles.logoContainer}>
            <h1>RICH</h1>
            <Image src={ imagesLink.LOCAL + 'minion.png'} width={60} priority height={60} alt='minion'/>
            <h1>MINION</h1>
        </article>
    )
}

export default Logo