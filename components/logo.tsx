import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link 
            className={`
            bg-secondary hover:bg-primary
            p-3 font-bold transition duration-300
            text-white inline-block w-24 text-center
        `}
        href="/">
            DROP
        </Link>
    )
}