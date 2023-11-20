import useAuthForm from '@/hooks/useAuthForm'
import styles from './Authentication.module.scss'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

function Authentication(){

    const {formRegister, errors, handleSubmit, onSubmit, validEmail, isValid, isLoading} = useAuthForm('login')

    useAuthRedirect()

    return(
        <article className={styles.authContaner}>
            <h1>АВТОРИЗАЦИЯ</h1>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <input {...formRegister('email', {required: 'Заполните почту!', pattern: {value: validEmail, message: 'Ведите корркутную почту...'}})}
                     className={styles.input} name="email" type="email" placeholder='Введите почту...' />
                    <p>{errors.email?.message}</p>
                    <input {...formRegister('password', {required: 'Заполните пароль!', minLength: {value: 6, message: 'Пароль должен содержать не менее 6 символов...'}})}
                     className={styles.input} name="password" type="password" placeholder='Введите пароль...' />
                    <p>{errors.password?.message}</p>
                    <button disabled={!isValid} className={styles.button}>ВОЙТИ</button>
                </form>
        </article>
    )
}

export default Authentication