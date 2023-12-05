import { FiShoppingBag } from 'react-icons/fi'
import styles from './BasketPanel.module.scss'
import Link from 'next/link'
import { IUserState } from '@/store/user/user.intereface'
import { FC } from 'react'

interface IBasketPanel{
    user: IUserState | null
    itemsLength: number 
}

const BasketPanel:FC<IBasketPanel> = ({user, itemsLength}) => {
    return (
        <article className={styles.basketContainer}>
            <p>{user?.email}</p>
            {
                user &&
                <Link href='/cart'>
                    <FiShoppingBag size={25}/>
                    {
                        itemsLength > 0 
                            ? 
                            <span className={styles.budget}>{itemsLength}</span>
                            :
                            null
                    }
                </Link>
            }
        </article>
    )
}

export default BasketPanel