import useCompanyForm from '@/hooks/form/useCompanyForm'
import styles from './CreateCompany.module.scss'
import FormInput from '@/components/ui/form-input/form-input'
import FileInput from '@/components/ui/file-input/FileInput'
import Button from '@/components/ui/button/Button'

const CreateCompany = () => {

    const {formRegister, handleSubmit, onSubmit, errors, isValid} = useCompanyForm()

    return (
        <div className={styles.authContaner}>
            <h1>СОЗДАНИЕ КОМПАНИИ</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput error={errors.name?.message} {...formRegister('name', {required: 'Введите название компании!'})} inputName='name' 
                    placeholder='Введите название компании...' type='text'/>
                    <FormInput {...formRegister('description')} inputName='description' 
                    placeholder='Введите описание компании...' type='text'/>
                    <FileInput {...formRegister('image', {
                        required: 'Выберите изображения товара!',
                        validate: (value) => {
                           const types = ["image/jpg", "image/jpeg"] 
                           for (let i = 0; i < value.length; i++){
                            if (!types.includes(value[i].type)) {
                                return 'Необходимые формат только jpg!'
                            }
                           }
                           return true;
                    }})} errors={errors.image?.message} mult={false} inputName='image'/>
                    <Button classVar='black' disabled={isValid} type='submit' text='СОЗДАТЬ'/>
                </form>
        </div>
    )
}

export default CreateCompany