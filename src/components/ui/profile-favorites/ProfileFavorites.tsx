import styles from './ProfileFavorites.module.scss'
import { FC } from 'react'
import MultiSlider from '../multi-slider/MultiSlider'
import { IFavorites } from '@/models/favorites.interface'

interface IProfileFavorites{
    favorites: IFavorites[]
}

const ProfileFavorites: FC<IProfileFavorites> = ({favorites}) => {
    return (
        <div className={styles.favoritesContainer}>
            <div className={styles.favoritesWrapper}>
                    <MultiSlider slides={favorites}/>    
            </div>
        </div>
    )
}

export default ProfileFavorites