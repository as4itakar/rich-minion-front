import { IEmailPassword } from "@/store/user/user.intereface"
import { useActions } from "./useActions"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "./useAuth"

const useAuthForm = (type: string) => {
    const {login, register} = useActions()

    const validEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")

    const { isLoading } = useAuth()
    
    const {
        register: formRegister,
        handleSubmit,
        formState: {errors, isValid},
        reset
    } = useForm<IEmailPassword>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IEmailPassword> = data => {
        if (type === 'login') login(data)
        else register(data)

        reset()
    }

    return {formRegister, errors, handleSubmit, onSubmit, validEmail, isValid, isLoading}
}

export default useAuthForm