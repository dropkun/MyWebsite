import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul
        className={`
            hover:flex flex
            text-black
            mx-4 my-4`}
      >
        <li className={`inline-flex mx-2`}>
          <Link href='/'>Home</Link>
        </li>
        <li className={`inline-flex mx-2`}>
          <Link href='/tech'>Tech</Link>
        </li>
      </ul>
    </nav>
  );
}
