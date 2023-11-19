import Image from 'next/image'
import styles from './SlideBar.module.scss'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

function SlideBar(){
    return(
        <section className={styles.slideBarContainer}>
            <Image src='http://localhost:3000/images/minions.jpg' fill alt=''/>
            <article className={styles.substrate}>
                <div className={styles.left}>
                    <IoIosArrowBack className={styles.leftArrow}/>
                </div>
                <div className={styles.right}>
                    <IoIosArrowForward className={styles.rightArrow}/>
                </div>
            </article>
        </section>
    )
}

export default SlideBar