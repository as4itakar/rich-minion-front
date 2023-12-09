import { IProduct } from '@/models/product.interface'
import styles from './UpdateProduct.module.scss'
import { useProductForm } from '@/hooks/form/useProductForm'
import { FC } from 'react'
import FormInput from '@/components/ui/form-input/form-input'
import FileInput from '@/components/ui/file-input/FileInput'
import Button from '@/components/ui/button/Button'
import { fileValidate } from '@/utils/fileValidate'

const UpdateProduct: FC<{product: IProduct}> = ({product}) => {

    const {onSubmit, formRegister, handleSubmit, errors, isValid} = useProductForm(product)

    return(
        <article className={styles.authContaner}>
            <h1>ОБНОВЛЕНИЕ ПРОДУКТА</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput error={errors.name?.message} inputName={'name'} type='text' placeholder='Введите название продукта...' 
                    {...formRegister('name', {required: 'Ввеедите название продукта!'})}/>
                    <FormInput inputName={'price'} type='number' placeholder='Введите цену продукта...' 
                    {...formRegister('price')}/>
                    <FormInput inputName={'description'} type='text' placeholder='Введите описание продукта...' 
                    {...formRegister('description')}/>
                    <FileInput errors={errors.images?.message} mult={true} inputName='images' {...formRegister('images', {
                        required: 'Выберите изображения товара!',
                        validate: (value) => fileValidate(value)
                    })}/>
                    <Button classVar={'black'} disabled={isValid} type='submit' text='ОБНОВИТЬ'/>
                </form>
        </article>
    )
}

export default UpdateProduct