import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <ul className={`hover:flex flex`}>
                <li className={`inline-flex mx-2`}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={`inline-flex mx-2`}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className={`inline-flex mx-2`}>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}