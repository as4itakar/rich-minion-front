import styles from './Authentication.module.scss'

function Authentication(){
    return(
        <article className={styles.authContaner}>
            <h1>АВТОРИЗАЦИЯ</h1>
                <form className={styles.formWrapper}>
                    <input className={styles.input} name="email" type="email" placeholder='Введите почту...' />
                    <input className={styles.input} name="password" type="password" placeholder='Введите пароль...' />
                    <button className={styles.button} type='submit'>ВОЙТИ</button>
                </form>
        </article>
    )
}

export default Authentication