import styles from './Profile.module.scss'
import { useProfile } from '@/hooks/fetch/useProfile'
import { useAuth } from '@/hooks/redux/useAuth'
import "react-multi-carousel/lib/styles.css";
import ProfileInfo from '@/components/ui/profile-info/ProfileInfo'
import ProfileFavorites from '@/components/ui/profile-favorites/ProfileFavorites'
import ProfileReadyCompany from '@/components/ui/profile-ready-company/ProfileReadyCompany';
import ProfileCreateCompany from '@/components/ui/profile-create-company/ProfileCreateCompany';
import ErrorContainer from '@/components/ui/error-container/ErrorContainer';

const Profile = () => {

    const {profile, updateProfile, isLoading} = useProfile()

    const {user} = useAuth()

    const checkOwner = user?.roles.includes('OWNER')

    if (profile){
        return (
            <div className={styles.profileContainer}>
                <ProfileInfo profile={profile} updateProfile={updateProfile} user={user}/>
                {
                    checkOwner 
                    ?
                    <ProfileReadyCompany/>
                    :
                    <ProfileCreateCompany/>

                }
                {
                    profile.favorites && profile.favorites.length > 0 &&
                    <ProfileFavorites favorites={profile.favorites}/>
                }
            </div>
        )
    }

    return (
            isLoading 
            ?
            <ErrorContainer text='Загрузка'/>
            :
            <ErrorContainer text='Профиля не существует'/>
    )
}

export default Profile