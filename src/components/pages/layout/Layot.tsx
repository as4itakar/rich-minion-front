import Footer from "@/components/ui/footer/Footer"
import Header from "../../ui/header/Header"
import styles from './Layot.module.scss'
import { FC, PropsWithChildren } from "react"

const Layout: FC<PropsWithChildren> = ({children}) => {

    return (
        <>
            <Header/>
            <section className={styles.main}>
                <article className={styles.container}>
                    {children}
                </article>
            </section>
            <Footer/>
        </>
    )
}

export default Layout