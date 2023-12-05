import { FC } from "react"
import Image from "next/image"
import { imagesLink } from "@/utils/imagesLink"

interface IImageController{
    defImage: string
    customImage?: string
    defAlt: string,
    customAlt?: string,
}

const ImageController: FC<IImageController> = ({defImage, customImage = '', defAlt, customAlt = ''}) => {    
    if (customImage !== '')
        return <Image src={imagesLink.SERVER + customImage} priority fill sizes="100%" alt={customAlt}/>
    
    return <Image src={imagesLink.LOCAL + defImage} priority fill sizes="100%" alt={defAlt}/>
}

export default ImageController