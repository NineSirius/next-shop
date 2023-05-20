import { Layout } from '@/containers/Layout'
import '@/styles/global.sass'
import type { AppProps } from 'next/app'

import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={montserrat.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}
