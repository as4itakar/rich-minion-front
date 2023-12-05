import Profile from "@/components/pages/profile/Profile"
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types"

const ProfilePage: NextPageAuth = () => {
    return <Profile/>
}

ProfilePage.isOnlyUser = true

export default ProfilePage