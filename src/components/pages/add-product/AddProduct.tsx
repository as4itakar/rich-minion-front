import { useCategory } from '@/hooks/fetch/useCategory'
import styles from './AddProduct.module.scss'
import { useProductForm } from '@/hooks/form/useProductForm'
import FormInput from '@/components/ui/form-input/form-input'
import FileInput from '@/components/ui/file-input/FileInput'
import FormSelect from '@/components/ui/form-select/FormSelect'
import Button from '@/components/ui/button/Button'

const AddProduct = () => {

    const {onSubmit, formRegister, handleSubmit, errors, isValid} = useProductForm()

    const {categories} = useCategory()

    return (
        <div className={styles.authContaner}>
            <h1>СОЗДАНИЕ ПРОДУКТА</h1>
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
                    {
                        categories && categories.length > 0 &&
                        <FormSelect options={categories} inputName='categoryId'
                        {...formRegister('categoryId')}/>
                    }
                    <Button classVar={'black'} type='submit' disabled={isValid} text='СОЗДАТЬ'/>
                </form>
        </div>
    )
}

export default AddProduct