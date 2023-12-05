import useAuthForm from '@/hooks/form/useAuthForm'
import styles from './Authentication.module.scss'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import Link from 'next/link'
import Button from '@/components/ui/button/Button'
import FormInput from '@/components/ui/form-input/form-input'

function Registration(){

    const {formRegister, errors, handleSubmit, onSubmit, validEmail, isValid, isLoading} = useAuthForm('register')

    useAuthRedirect()

    return(
        <div className={styles.authContaner}>
            <h1>РЕГИСТРАЦИЯ</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput inputName={'email'} type='email' error={errors.email?.message} placeholder='Ведите почту...' 
                    {...formRegister('email', {required: 'Заполните почту!', 
                    pattern: {value: validEmail, message: 'Ведите корркутную почту...'}})}/>
                    <FormInput inputName='password' type='password' error={errors.password?.message} 
                    placeholder='Ведите пароль...' 
                    {...formRegister('password', {required: 'Заполните пароль!', minLength: 
                    {value: 6, message: 'Пароль должен содержать не менее 6 символов...'}})}/>
                    <FormInput inputName='name' type='text' error={errors.name?.message} 
                    placeholder='Ведите имя...' 
                    {...formRegister('name', {required: 'Введите имя...'})}/>
                    <Link href='/login'>
                        <p className={styles.link}>Авторизациия</p>
                    </Link>
                    <Button classVar={'black'} type='submit' text='ЗАРЕГИСТРИРОВАТЬСЯ' disabled={isValid}/>
                </form>
        </div>
    )
}

export default Registration