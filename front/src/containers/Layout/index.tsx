import { Navbar } from '@/components/Navbar'
import React from 'react'

interface props {
    children: any
}

export const Layout: React.FC<props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}
