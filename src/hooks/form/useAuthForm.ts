import { IEmailPassword } from "@/store/user/user.intereface"
import { useActions } from "../redux/useActions"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "../redux/useAuth"
import { errorToast } from "@/utils/toasterActions"
import { useRouter } from "next/router"

const useAuthForm = (type: string) => {
    const {login, register} = useActions()

    const validEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

    const { isLoading, isError } = useAuth()

    const {push} = useRouter()
    
    const {
        register: formRegister,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<IEmailPassword>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IEmailPassword> = async data => {
        let response

        if (type === 'login') 
            response = login(data)
        else 
            response = register(data)

        if (isError)
            errorToast('Некорректные данные пользователя...')
        else
            push('/')
    }

    return {formRegister, errors, handleSubmit, onSubmit, validEmail, isValid, isLoading}
}

export default useAuthForm