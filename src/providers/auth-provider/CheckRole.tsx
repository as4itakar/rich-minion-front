import { FC, PropsWithChildren } from "react";
import { TypeComponentAuthFields } from "./auth-page.types";
import { useAuth } from "@/hooks/redux/useAuth";
import { useRouter } from "next/router";

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = 
({Component: {
    isOnlyOwner,
    isOnlyUser
}, children}) => {
    const {user} = useAuth()

    const router = useRouter()

    if ((user && isOnlyUser) || (user?.roles.includes('OWNER') && isOnlyOwner)) 
        return <>{children}</>
    
    router.pathname !== '/' && router.replace('/')

    return null
}

export default CheckRole