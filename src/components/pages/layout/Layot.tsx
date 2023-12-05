import Footer from "@/components/ui/footer/Footer"
import Header from "../../ui/header/Header"
import styles from './Layot.module.scss'
import { FC, PropsWithChildren } from "react"
import Meta from "@/seo/Meta"

const Layout: FC<PropsWithChildren> = ({children}) => {

    return (
        <>
            <Meta title='Магазин одежды' description="Best internet shop ever"/>
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