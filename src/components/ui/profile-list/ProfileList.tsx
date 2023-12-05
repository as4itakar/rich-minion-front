import { FC } from 'react'
import styles from './ProfileList.module.scss'

interface IProfileList{
    name: string
    phone: string
    city: string
    address: string
    email?: string
}

const ProfileList: FC<IProfileList> = ({name, phone, city, address, email}) => {

    return (
        <div className={styles.infoWrapper}>
                <div className={styles.nameContainer}>
                    <h1>{name}</h1>
                </div>
                <ul className={styles.infoList}>
                    <li>Телефон: {phone}</li>
                    <li>Город: {city}</li>
                    <li>Адрес: {address}</li>
                    <li>Почта: {email}</li>
                </ul>
        </div>
    )
}

export default ProfileList