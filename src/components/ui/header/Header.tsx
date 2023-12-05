import styles from './Header.module.scss'
import { useActions } from '@/hooks/redux/useActions'
import { useAuth } from '@/hooks/redux/useAuth'
import { useCart } from '@/hooks/redux/useCart'
import { useRouter } from 'next/router'
import Navbar from '@/components/ui/navbar/Navbar'
import Logo from '@/components/ui/logo/Logo'
import BasketPanel from '@/components/ui/basket-panel/BasketPanel'

function Header(){

    const {logout} = useActions()

    const {user} = useAuth()

    const {items} = useCart()

    const {push} = useRouter()

    const out = () => {
        logout()
        push('/')
    }

    return (
        <header className={styles.header}>
            <section className={styles.headerContainer}>
                <Navbar user={user} out={out}/>
                <Logo/>
                <BasketPanel user={user} itemsLength={items.length}/>
            </section>
        </header>
    )
}

export default Header