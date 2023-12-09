import Link from 'next/link'
import { FaPencil } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import styles from './CompanyProduct.module.scss'
import { IProduct } from '@/models/product.interface'
import { FC } from 'react'
import ImageController from '../image-controller/ImageController'

interface ICompanyProduct{
    product: IProduct,
    deleteProduct: (id: string | number) => void
}

const CompanyProduct: FC<ICompanyProduct> = ({product, deleteProduct}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.imageContainer}>
                <ImageController customAlt={product.name} customImage={product.images[0]}
                 defImage='unknown-profile.jpg' defAlt='unknown'/>
            </div>
            <div className={styles.infoContainer}>
                <h2>{product.name}</h2>   
                <p>{product.price}</p>
            </div>
             <div className={styles.controlContainer}>
                <Link href={'/profile/company/update-product/'+product.id}>
                    <FaPencil className={styles.icon} size={25}/>
                </Link>
                <RxCross2 onClick={() => deleteProduct(product.id)} className={styles.icon} size={25}/>
            </div>
        </div>
    )
}

export default CompanyProduct