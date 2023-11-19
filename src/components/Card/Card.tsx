import Image from 'next/image'
import styles from './Card.module.scss'

function Card(){
    return (
        <article className={styles.cardContainer}>
            <div className={styles.area}>
            <Image src='http://localhost:3000/images/yeat.jpg' fill alt=''/>
            </div>
            <div className={[styles.right, styles.area].join(' ')}>
                <h1>ICONS</h1>
                <p>Una linea genderless di capi essenziali e formali, 
                    basati sui codici storici della Maison, creata dal 
                    direttore creativo John Galliano.
                </p>
                <button className={styles.button} type='button'>SCORPI</button>
            </div>
        </article>
    )
}

export default Card