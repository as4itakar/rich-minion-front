import { ICategoryData } from "@/services/category/category-data.interface"
import { CategoryService } from "@/services/category/category.service"
import { formDataUpload } from "@/utils/formDataUpload"
import { SubmitHandler, useForm } from "react-hook-form"

export const useCategoryForm = () => {
    const {
        register: formRegister,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<ICategoryData>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<ICategoryData> = async data => {
        const fd = formDataUpload(data)
        await CategoryService.create(fd)
    }

    return {formRegister, handleSubmit, onSubmit, errors, isValid}
}