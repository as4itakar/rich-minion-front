import { useCategoryForm } from '@/hooks/form/useCategoryForm'
import styles from './CreateCategory.module.scss'
import FormInput from '@/components/ui/form-input/form-input'
import FileInput from '@/components/ui/file-input/FileInput'
import Button from '@/components/ui/button/Button'
import { fileValidate } from '@/utils/fileValidate'

const CreateCategory = () => {

    const {formRegister, handleSubmit, onSubmit, errors, isValid} = useCategoryForm()

    return (
        <div className={styles.categoryContaner}>
            <h1>СОЗДАНИЕ КАТЕГОРИИ</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput error={errors.name?.message} {...formRegister('name', {required: 'Введите название компании!'})} inputName='name' 
                    placeholder='Введите название компании...' type='text'/>
                    <FileInput {...formRegister('image', {
                        required: 'Выберите изображения товара!',
                        validate: (value) => fileValidate(value)
                    })} errors={errors.image?.message} mult={false} inputName='image'/>
                    <Button classVar='black' disabled={isValid} type='submit' text='СОЗДАТЬ'/>
                </form>
        </div>
    )
}

export default CreateCategory