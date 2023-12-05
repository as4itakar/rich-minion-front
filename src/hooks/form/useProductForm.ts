import { IProduct } from "@/models/product.interface"
import { IProductData } from "@/services/products/product-data.interface"
import { ProductsService } from "@/services/products/products.service"
import { formDataUpload } from "@/utils/formDataUpload"
import { SubmitHandler, useForm } from "react-hook-form"

export const useProductForm = (product?: IProduct) => {

    const {
        register: formRegister,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<IProductData>({
        mode: 'onChange',
        defaultValues: product ?  {
            name: product?.name,
            description: product?.description,
            price: String(product?.price),
            categoryId: String(product?.categoryId)
        } : {}
    })

    const onSubmit: SubmitHandler<IProductData> = async (data) => {
        const fd = formDataUpload(data)
            
        if (!product)
            await ProductsService.create(fd)
        else 
            await ProductsService.update(product.id, fd)
        
    }

    return {onSubmit, formRegister, handleSubmit, errors, isValid}
}
