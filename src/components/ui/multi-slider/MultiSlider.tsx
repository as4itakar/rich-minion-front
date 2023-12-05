import styles from './MultiSlider.module.scss'
import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import MultiSlide from '../multi-slide/MultiSlide'
import { IFavorites } from '@/models/favorites.interface'

interface IMultiSlider{
    slides: IFavorites[]
}

const MultiSlider: FC<IMultiSlider> = ({slides}) => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Carousel className={styles.carousel} responsive={responsive} autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            infinite={true}
                            partialVisible={false}>
                        {
                            slides.map( slide =>
                                <MultiSlide key={slide.id} slide={slide.product}/>
                            )
                        }
        </Carousel>
    )
}

export default MultiSlider