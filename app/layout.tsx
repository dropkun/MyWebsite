import Header from '../components/header'
import Footer from '../components/footer'
import Container from '@/components/container'
import { ReactNode } from 'react'
import "./globals.css"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Container><Header /></Container>
            <main>
                <Container>{children}</Container>
            </main>
            <Container><Footer /></Container>
        </>
    )
}