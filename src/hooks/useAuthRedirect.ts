import { useEffect } from "react"
import { useAuth } from "./redux/useAuth"
import { useRouter } from "next/router"

export const useAuthRedirect = () => {
    const {user} = useAuth()

    const {replace} = useRouter()

    useEffect( () => {
      
    }, [user])
}