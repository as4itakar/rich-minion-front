import useAuthForm from '@/hooks/form/useAuthForm'
import styles from './Authentication.module.scss'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import Link from 'next/link'
import Button from '@/components/ui/button/Button'
import FormInput from '@/components/ui/form-input/form-input'

function Authentication(){

    const {formRegister, errors, handleSubmit, onSubmit, validEmail, isValid, isLoading} = useAuthForm('login')

    useAuthRedirect()

    return(
        <div className={styles.authContaner}>
            <h1>АВТОРИЗАЦИЯ</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput inputName={'email'} type='email' error={errors.email?.message} placeholder='Ведите почту...' 
                    {...formRegister('email', {required: 'Заполните почту!', 
                    pattern: {value: validEmail, message: 'Ведите корркутную почту...'}})}/>
                    <FormInput inputName='password' type='password' error={errors.password?.message} 
                    placeholder='Ведите пароль...' 
                    {...formRegister('password', {required: 'Заполните пароль!', minLength: 
                    {value: 6, message: 'Пароль должен содержать не менее 6 символов...'}})}/>
                    <Link href='/register'>
                        <p className={styles.link}>Регистрация</p>
                    </Link>
                    <Button classVar={'black'} type='submit' text='ВОЙТИ' disabled={isValid}/>
                </form>
        </div>
    )
}

export default Authentication