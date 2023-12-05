import { errorToast } from "@/utils/toasterActions"
import { useEffect } from "react"

export const useError = (isError: boolean, error: string = 'Произошла ошибка...') => {

    useEffect( () => {
        if (isError) 
            errorToast(error)
    }, [isError, error])
}