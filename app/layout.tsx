import Header from '../components/header'
import Footer from '../components/footer'
import { ReactNode } from 'react'

export type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}