import Card from '@/components/Card/Card'
import Categories from '@/components/Categories/Categories'
import ParagraphArea from '@/components/ParagraphArea/ParagraphArea'
import Products from '@/components/Products/Products'
import SlideBar from '@/components/SlideBar/SlideBar'
import TitleArea from '@/components/TitleArea/TitleArea'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          <TitleArea text='Co-Ed Autunno/Inverno 2023'/>
          <SlideBar/>
          <ParagraphArea text="Tramite la piramide creativa della Maison, i concept
           affermati nella Collezione Artisanal confluiscono nella linea di prêt-à-porter
            genderless nota come Co-Ed. John Galliano trasforma le tecniche sartoriali
             dell'alta moda in interpretazioni che trasmettono il processo creativo che le ha concepite."/>
          <Categories/>
          <Card/>
          <Products/>
    </>
  )
}
