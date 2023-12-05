import Header from "@/components/ui/header/Header";
import { useActions } from "@/hooks/redux/useActions";
import { useAuth } from "@/hooks/redux/useAuth";
import { getAccessToken, getRefreshToken } from "@/services/auth/auth.helper";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-page.types";
import dynamic from "next/dynamic";

const DynamicCheckRole = dynamic( () => import('./CheckRole'), {ssr: false})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = 
({Component: {isOnlyOwner, isOnlyUser}, children}) => {
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

    return isOnlyOwner || isOnlyUser ?<DynamicCheckRole Component={{isOnlyOwner, isOnlyUser}}>
        {children}
    </DynamicCheckRole> : <>{children}</>
}

export default AuthProvider