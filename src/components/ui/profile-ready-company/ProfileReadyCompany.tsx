import styles from './ProfileReadyCompany.module.scss'
import Link from 'next/link'
import Button from '../button/Button'
import { useCompany } from '@/hooks/fetch/useCompany'
import ImageController from '../image-controller/ImageController'
import ErrorContainer from '../error-container/ErrorContainer'

const ProfileReadyCompany = () => {

    const {company, isLoading} = useCompany()

    return (
        <>
            {
                isLoading 
                ?
                <ErrorContainer text='Загрузка...'/>
                :
                <div className={styles.companyContainer}>
                    <div className={styles.imageContainer}>
                        <ImageController customAlt={company?.name} customImage={company?.image}
                        defImage='unknown-profile.jpg' defAlt='unknown'/>
                    </div>
                    <div className={styles.titleContainer}>
                        <h5>{company?.name}</h5>
                        <Link href={'/profile/company'}>
                            <Button classVar='black' text='ПЕРЕЙТИ'/>
                        </Link>
                    </div>
                </div>
            }
        </> 
    )
}

export default ProfileReadyCompany