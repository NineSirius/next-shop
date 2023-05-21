import React from 'react'
import styles from './AuthInput.module.sass'

interface props {
    placeholder?: string
    type?: string
    required?: boolean
    name?: string
    autocomplete?: string
    onChange?: (e: any) => void
    error?: boolean
    disabled?: boolean
}

export const AuthInput: React.FC<props> = ({
    type,
    placeholder,
    required,
    onChange,
    name,
    autocomplete,
    error,
    disabled,
}) => {
    return (
        <div className={styles['input-wrap']}>
            <input
                type={type || 'text'}
                className={`${styles.input} ${error}`}
                name={name}
                required={required}
                onChange={onChange}
                autoComplete={autocomplete}
                disabled={disabled}
            />
            <span className={styles.placeholder}>
                {placeholder}
                {required && '*'}
            </span>
        </div>
    )
}
