import { useFavorites } from '@/hooks/fetch/useFavorites'
import styles from './FavoriteController.module.scss'
import { FC } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface IFavoriteController{
    id: number
}

const FavoriteController: FC<IFavoriteController> = ({id}) => {

    const {toggle, checkFav} = useFavorites(id)

    const Icon = checkFav ? FaHeart : FaRegHeart

    return <Icon onClick={toggle} size={25} className={styles.icon}/>
}

export default FavoriteController