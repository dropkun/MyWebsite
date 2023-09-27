import Link from 'next/link';

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
      href='/'
    >
      Drop
    </Link>
  );
}
