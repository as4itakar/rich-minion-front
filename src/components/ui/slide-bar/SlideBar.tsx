import styles from './SlideBar.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import { FC } from 'react';
import Slide from '../slide/Slide';

interface ISlider{
    id: number
    image: string
    name: string
    [key: string]: any
}

interface ISlideBar{
    height: number
    slider: ISlider[] | string[]
    isLink: boolean

}

const SlideBar: FC<ISlideBar> = ({height, slider, isLink}) => {

    return(
        <Carousel className={styles.carousel} showThumbs={false} showArrows={false} showStatus={false}>
            {
                isLink
                ?
                (slider as ISlider[]).map( slide => 
                    <Link key={slide.id} href={'/category/'+slide.id}>
                        <Slide height={height} image={slide.image} name={slide.name}>
                            <h1 className={styles.categoryName}>{slide.name}</h1>
                        </Slide>
                    </Link>
                )
                :
                (slider as string[]).map( slide => 
                    <Slide key={slide} height={height} image={slide} name={slide}/>
                )
            }
        </Carousel>
    )
}

export default SlideBar
