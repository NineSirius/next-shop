import React from 'react'
import styles from './AuthPage.module.sass'
import { AuthInput } from '@/components/UI/AuthInput'
import Link from 'next/link'

interface LoginData {
    identifier: string
    password: string
}

export const LoginPage = () => {
    const [loginData, setLoginData] = React.useState<LoginData>({
        identifier: '',
        password: '',
    })

    const change = (e: any) => {
        setLoginData((prevData: any) => {
            return { ...prevData, [e.target.name]: e.target.value }
        })
    }
    return (
        <div className={styles.form}>
            <h2 className={styles['form-title']}>Авторизация</h2>
            <div className={styles['form-fields']}>
                <AuthInput
                    placeholder="Имя пользователя или email"
                    name="identifier"
                    required
                    onChange={change}
                />
                <AuthInput
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    required
                    onChange={change}
                />
            </div>
            <span>
                Нету аккаунта? Тогда <Link href="auth/register">зарегистрируйтесь</Link>
            </span>
        </div>
    )
}
