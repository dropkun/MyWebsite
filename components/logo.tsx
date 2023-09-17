import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link
            className={`
            bg-primary
            p-3 font-bold transition duration-300
            w-28
            text-center
            text-black
            rounded-xl
            flex justify-center items-center
        `}
            href="/">
            {/* <Image src={drop} alt="drop" layout="fixed" /> */}
            <p >
                Drop
            </p>
        </Link>
    )
}