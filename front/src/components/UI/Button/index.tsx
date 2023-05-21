import React from 'react'
import styles from './Button.module.sass'

interface props {
    children?: any
    style?: object
    onClick?: () => void
}

export const Button: React.FC<props> = ({ children, style, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    )
}
