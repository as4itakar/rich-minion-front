import Button from '../button/Button'
import styles from './ProfileCreateCompany.module.scss'
import Link from 'next/link'

const ProfileCreateCompany = () => {
    return (
        <div className={styles.companyStartContainer}>
            <Link href={'/profile/create-company'}>
                <Button text='СОЗДАТЬ КОМПАНИЮ' classVar='black'/>
            </Link>
        </div>
    )
}

export default ProfileCreateCompany