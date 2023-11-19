import styles from './Authentication.module.scss'

function Registration(){

    return(
        <article className={styles.authContaner}>
            <h1>Регистрация</h1>
                <form className={styles.formWrapper}>
                    <input className={styles.input} name='name' type="text" placeholder='Введите имя...' />
                    <input className={styles.input} name='surname' type="text" placeholder='Введите фамилию...' />
                    <input className={styles.input} name='email' type="email" placeholder='Введите почту...' />
                    <input className={styles.input} name='password' type="password" placeholder='Введите пароль...' />
                    <button className={styles.button} type='submit'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </form>
        </article>
    )
}

export default Registration