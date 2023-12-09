import useCompanyForm from '@/hooks/form/useCompanyForm'
import styles from './CreateCompany.module.scss'
import FormInput from '@/components/ui/form-input/form-input'
import FileInput from '@/components/ui/file-input/FileInput'
import Button from '@/components/ui/button/Button'
import { fileValidate } from '@/utils/fileValidate'

const CreateCompany = () => {

    const {formRegister, handleSubmit, onSubmit, errors, isValid} = useCompanyForm()

    return (
        <div className={styles.companyContaner}>
            <h1>СОЗДАНИЕ КОМПАНИИ</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput error={errors.name?.message} {...formRegister('name', {required: 'Введите название компании!'})} inputName='name' 
                    placeholder='Введите название компании...' type='text'/>
                    <FormInput {...formRegister('description')} inputName='description' 
                    placeholder='Введите описание компании...' type='text'/>
                    <FileInput {...formRegister('image', {
                        required: 'Выберите изображения товара!',
                        validate: (value) => fileValidate(value)
                        })} errors={errors.image?.message} mult={false} inputName='image'/>
                    <Button classVar='black' disabled={isValid} type='submit' text='СОЗДАТЬ'/>
                </form>
        </div>
    )
}

export default CreateCompany