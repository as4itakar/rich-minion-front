import { IProfile } from "@/models/profile.interface"
import { IProfileData } from "@/services/profile/profile-data.interface"
import { formDataUpload } from "@/utils/formDataUpload"
import { SubmitHandler, useForm } from "react-hook-form"

export const useProfileForm = (product: IProfile, updateProfile: (data: FormData) => void ) => {
    const {
        register: formRegister,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IProfileData>({
        mode: 'onChange',
        defaultValues: {
            name: product.name,
            phone: product.phone,
            city: product.city,
            address: product.address
        }
    })

    
    const onSubmit: SubmitHandler<IProfileData> = data => {
        const fd = formDataUpload(data)
        updateProfile(fd)
    }

    return {formRegister, handleSubmit, onSubmit, errors, isValid}
}