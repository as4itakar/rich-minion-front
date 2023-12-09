import { ICategory } from '@/models/category.interface'
import styles from './CategoryContainer.module.scss'
import { RxCross2 } from 'react-icons/rx'
import { FC } from 'react'

interface ICategoryContainer{
    category: ICategory
    deleteCategory: (id: string | number) => void
}

const CategoryContainer: FC<ICategoryContainer> = ({category,deleteCategory}) => {
    return (
        <div className={styles.container}>
            <div className={styles.nameContainer}>
                <h3>{category.name}</h3>
            </div>
            <div className={styles.controlContainer}>
                <RxCross2 onClick={() => deleteCategory(category.id)} className={styles.icon} size={25}/>
            </div>
        </div>
    )
}

export default CategoryContainer