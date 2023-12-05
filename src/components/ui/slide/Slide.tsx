import { FC, PropsWithChildren } from 'react'
import styles from './Slide.module.scss'
import Image from 'next/image'
import ImageController from '../image-controller/ImageController'

interface ISlide{
    height: number
    image: string
    name: string
}

const Slide: FC<PropsWithChildren<ISlide>> = ({height, image, name, children}) => {
    return (
        <div style={{height: height + 'px'}} className={styles.img}>
            <ImageController customAlt={name} customImage={image}
             defImage='unknown-profile.jpg' defAlt='unknown'/>
            {children}
        </div>
    )
}

export default Slide