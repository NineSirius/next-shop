import React from 'react'
import styles from './AuthPage.module.sass'
import { AuthInput } from '@/components/UI/AuthInput'
import Link from 'next/link'
import { Button } from '@/components/UI/Button'
import { RegData } from './auth-model'
import { createUser } from '@/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

interface errorsState {
    PassDoNotMatch: boolean
    emailAlreadyUsed: boolean
}

export const Register = () => {
    const [regData, setRegData] = React.useState<RegData>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = React.useState<object>({
        PassDoNotMatch: false,
    })

    const [registerStatus, setRegisterStatus] = React.useState<string>('pending')

    const [confirmPass, setConfirmPass] = React.useState<string>('')

    const router = useRouter()

    const change = (e: any) => {
        setRegData((prevData: any) => {
            return { ...prevData, [e.target.name]: e.target.value }
        })
    }

    const submit = (e: any) => {
        e.preventDefault()
        setRegisterStatus('loading')
        createUser(regData).then((resp) => {
            router.push('/auth')
        })
    }

    return (
        <form onSubmit={submit}>
            <div className={styles.form}>
                <h2 className={styles['form-title']}>Регистрация</h2>

                {errors.PassDoNotMatch && (
                    <div className={`${styles.message} ${styles.error}`}>Пароли не совпадают</div>
                )}
                <div className={styles['form-fields']}>
                    <div className={styles['form-row']}>
                        <AuthInput
                            placeholder="Имя"
                            name="firstname"
                            required
                            onChange={change}
                            autocomplete="off"
                            disabled={registerStatus === 'loading'}
                        />
                        <AuthInput
                            placeholder="Фамилия"
                            name="lastname"
                            required
                            onChange={change}
                            autocomplete="off"
                            disabled={registerStatus === 'loading'}
                        />
                    </div>
                    <AuthInput
                        name="username"
                        placeholder="Имя пользователя"
                        onChange={change}
                        autocomplete="off"
                        required
                        disabled={registerStatus === 'loading'}
                    />
                    <AuthInput
                        name="email"
                        placeholder="Email"
                        autocomplete="off"
                        required
                        onChange={change}
                        disabled={registerStatus === 'loading'}
                    />
                    <div className={styles['password-wrap']}>
                        {regData.password !== confirmPass && <span>Пароли не совпадают</span>}
                        <AuthInput
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            required
                            onChange={change}
                            autocomplete="off"
                            disabled={registerStatus === 'loading'}
                        />
                        <AuthInput
                            type="password"
                            placeholder="Потдверждение пароля"
                            name="password"
                            required
                            onChange={(e: any) => setConfirmPass(e.target.value)}
                            autocomplete="off"
                            error={regData.password !== confirmPass}
                            disabled={registerStatus === 'loading'}
                        />
                    </div>

                    <Button>Зарегистрироваться</Button>
                </div>
                <span>
                    Уже есть аккаунт? Тогда <Link href="/auth">авторизуйтесь</Link>
                </span>
            </div>
        </form>
    )
}
