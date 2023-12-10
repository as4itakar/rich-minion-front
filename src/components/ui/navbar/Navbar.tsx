import { IUserState } from '@/store/user/user.intereface'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import { FC } from 'react'

interface INavbar{
    user: IUserState | null
    out: () => void
}

const Navbar:FC<INavbar> = ({user, out}) => {
    return(
        <nav className={styles.linkContainer}>
            <Link href='/'>
                <p className={styles.link}>Начальная страница</p>
            </Link>
            <Link href='/products'>
                <p className={styles.link}>Продукты</p>
            </Link>
            <Link href='/profile'>
                <p className={styles.link}>Профиль</p>
            </Link>
            {
                user?
                    <>
                        <Link href='/orders'>
                            <p className={styles.link}>Заказы</p>
                        </Link>
                        <p onClick={out} className={styles.link}>Выйти</p>
                    </>
                    :
                    <Link href='/login'>
                        <p className={styles.link}>Войти</p>
                    </Link>
            }
        </nav>
    )
}

export default Navbar