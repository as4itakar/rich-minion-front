import { IProduct } from '@/models/product.interface'
import styles from './UpdateProduct.module.scss'
import { useProductForm } from '@/hooks/form/useProductForm'
import { FC } from 'react'
import FormInput from '@/components/ui/form-input/form-input'
import FileInput from '@/components/ui/file-input/FileInput'
import Button from '@/components/ui/button/Button'

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
                        validate: (value) => {
                           const types = ["image/jpg", "image/jpeg"] 
                           for (let i = 0; i < value.length; i++){
                            if (!types.includes(value[i].type)) {
                                return 'Необходимые формат только jpg!'
                            }
                           }
                           return true;
                        }
                    })}/>
                    <Button classVar={'black'} disabled={isValid} type='submit' text='ОБНОВИТЬ'/>
                </form>
        </article>
    )
}

export default UpdateProduct