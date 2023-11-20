import styles from './Header.module.scss'
import { FiShoppingBag } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import { useActions } from '@/hooks/useActions'

function Header(){

    const {logout} = useActions()

    return (
        <header className={styles.header}>
            <section className={styles.headerContainer}>
                <nav className={styles.linkContainer}>
                    <Link href='/'>
                        <p className={styles.link}>Home</p>
                    </Link>
                   <Link href='/products'>
                        <p className={styles.link}>Products</p>
                   </Link>
                    <p className={styles.link}>Profile</p>
                    <button onClick={() => logout()}>Выйти</button>
                </nav>
                <article className={styles.logoContainer}>
                        <h1>RICH</h1>
                        <Image src='http://localhost:3000/images/minion.png' width={60} height={60} alt=''/>
                        <h1>MINION</h1>
                </article>
                <article className={styles.basketContainer}>
                    <Link href='/basket'>
                        <FiShoppingBag size={25}/>
                        <p className={styles.budget}>10</p>
                    </Link>
                </article>
            </section>
        </header>
    )
}

export default Header