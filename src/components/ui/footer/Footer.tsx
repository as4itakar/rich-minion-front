import styles from './Footer.module.scss'
import { MdMail } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <h1>RICH MINION</h1>
            <div className={styles.infoContainer}>
                <MdMail className={styles.icon} size={25}/>
                <p>sevaobuxov61@gmail.com</p>
                <FaGithubAlt className={styles.icon} size={25}/>
                <a target='_blank' href='https://github.com/as4itakar'>as4itakar</a>
            </div>
        </div>
    )
}

export default Footer