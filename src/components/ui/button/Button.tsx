import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import { IconType } from 'react-icons'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    disabled?: boolean
    callBack?: () => void
    text?: string
    Icon?: IconType
    size?: number,
    classVar: 'green' | 'black'
}

const Button: FC<IButton> = ({disabled, callBack, text, Icon, size, classVar, type='button'}) => {
    return (
        <button type={type} disabled={disabled === undefined ? false : !disabled} onClick={callBack} 
        className={classVar === 'black' ? styles.blackButton : styles.greenButton}>
            {Icon ? <Icon size={size ? size : 25}/> : text}
        </button>
    )
}

export default Button