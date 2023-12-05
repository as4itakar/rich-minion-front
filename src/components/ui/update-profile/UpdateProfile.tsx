import { useProfileForm } from '@/hooks/form/useProfileForm'
import Button from '../button/Button'
import FileInput from '../file-input/FileInput'
import FormInput from '../form-input/form-input'
import styles from './UpdateProfile.module.scss'
import { IProfile } from '@/models/profile.interface'
import { FC } from 'react'

interface IUpdateProfile{
    profile: IProfile,
    updateProfile: (data: FormData) => void
}

const UpdateProduct:FC<IUpdateProfile> = ({profile, updateProfile}) => {

    const {formRegister, handleSubmit, onSubmit, errors, isValid} = useProfileForm(profile, updateProfile)

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={styles.profileForm}>
            <FormInput placeholder='Введите имя...' inputName='name' {...formRegister('name')}/>    
            <FormInput placeholder='Введите номер телефона...' inputName='phone' type='phone' {...formRegister('phone')}/>
            <FormInput placeholder='Введите город...' inputName='city' type='text' {...formRegister('city')}/>   
            <FormInput placeholder='Введите адрес...' inputName='address' type='text' {...formRegister('address')}/>
            <FileInput errors={errors.image?.message} inputName='image' mult={false} {...formRegister('image', {
                required: 'Выберите изображения товара!',
                validate: (value) => {
                    const types = ["image/jpg", "image/jpeg"] 
                    for (let i = 0; i < value.length; i++){
                        if (!types.includes(value[i].type)) {
                            return 'Необходимые формат только jpg!'
                        }
                    }
                    return true
            }})} name='image'/>
            <Button type='submit' disabled={isValid} classVar='black' text='ИЗМЕНИТЬ'/>
        </form>
    )
}

export default UpdateProduct