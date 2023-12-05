import styles from './ProfileInfo.module.scss'
import Image from 'next/image'
import ProfileList from '../profile-list/ProfileList'
import UpdateProduct from '../update-profile/UpdateProfile'
import { IProfile } from '@/models/profile.interface'
import { FC } from 'react'
import { IUserState } from '@/store/user/user.intereface'
import ImageController from '../image-controller/ImageController'

interface IProfileInfo{
    profile: IProfile,
    updateProfile: (data: FormData) => void,
    user: IUserState | null
}

const ProfileInfo: FC<IProfileInfo> = ({profile, updateProfile, user}) => {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                <ImageController customAlt={profile.name} customImage={profile.image} defImage='unknown-profile.jpg' defAlt='unknown'/>
            </div>
            <ProfileList name={profile.name} city={profile.city}
             address={profile.address} phone={profile.phone} email={user?.email}/>
            <UpdateProduct profile={profile} updateProfile={updateProfile}/>
        </div>
    )
}

export default ProfileInfo