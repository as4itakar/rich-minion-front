import { ICompanyData } from "@/services/company/company-data.interface"
import { CompanyService } from "@/services/company/company.service"
import { formDataUpload } from "@/utils/formDataUpload"
import { SubmitHandler, useForm } from "react-hook-form"

const useCompanyForm = () => {
     
    const {
        register: formRegister,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<ICompanyData>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<ICompanyData> = async data => {
        const fd = formDataUpload(data)
        await CompanyService.create(fd)
    }

    return {formRegister, handleSubmit, onSubmit, errors, isValid}
}

export default useCompanyForm