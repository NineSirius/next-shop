import Link from 'next/link'
import styles from './Navbar.module.sass'
import { Button } from '../UI/Button'
import { useRouter } from 'next/router'

export const Navbar = () => {
    const router = useRouter()

    return (
        <nav className={`${styles.navbar}`}>
            <h2 className={styles.logo}>Logo</h2>
            <div className={styles['nav-links-wrap']}>
                <ul className={styles['nav-links']}>
                    <li className={styles['nav-link-wrap']}>
                        <Link href="/" className={styles['nav-link']}>
                            Главная
                        </Link>
                    </li>
                    <li className={styles['nav-link-wrap']}>
                        <Link href="/" className={styles['nav-link']}>
                            Посты
                        </Link>
                    </li>
                </ul>

                <div className={styles.user}>
                    <Button onClick={() => router.push('auth')}>Вход</Button>
                </div>
            </div>
        </nav>
    )
}
