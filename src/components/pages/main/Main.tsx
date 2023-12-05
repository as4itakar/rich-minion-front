import styles from './Main.module.scss'
import SlideBar from "@/components/ui/slide-bar/SlideBar"
import TitleArea from "../../ui/title-area/TitleArea"
import ParagraphArea from "../../ui/paragraph-area/ParagraphArea"
import { useCategory } from '@/hooks/fetch/useCategory'
import RandomProducts from '@/components/ui/random-products/RandomProducts'

const Main = () => {

    const {categories} = useCategory()
    
    return (
        <>
            <TitleArea text='Co-Ed Autunno/Inverno 2023'/>
            {
                categories && categories.length > 0 &&
                <div className={styles.slideBarContainer}>
                    <SlideBar isLink={true} height={700} slider={categories}/>
                </div>
                
            }
            <ParagraphArea text="Tramite la piramide creativa della Maison, i concept
            affermati nella Collezione Artisanal confluiscono nella linea di prêt-à-porter
            genderless nota come Co-Ed. John Galliano trasforma le tecniche sartoriali
            dell'alta moda in interpretazioni che trasmettono il processo creativo che le ha concepite."/>
            <RandomProducts/>
        </>
    )
}

export default Main