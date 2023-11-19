import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { getAccessToken, getRefreshToken } from "@/services/auth/auth.helper";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";


const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const {user} = useAuth()
    const {checkAuth, logout} = useActions()

    const {pathname} = useRouter()

    useEffect( () => {
        const accessToken = getAccessToken()
        if (accessToken) checkAuth()
    }, [])

    useEffect( () => {
        const refreshToken = getRefreshToken()
        if(!refreshToken && user) logout()
    }, [pathname])

    return <>{children}</>
}

export default AuthProvider