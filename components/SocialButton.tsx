import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { type } from 'os';
import React from 'react';
type SocialButtonProps = {
    url: string,
    icon: StaticImageData,
}

export default function SocialButton(props : SocialButtonProps) {
    return (
        <Link 
            className={`
                flex flex-col items-center
                mx-2
            `}
            href={props.url}
            target="_blank">
            <Image src={props.icon} alt={""} width={24} height={24}/>
        </Link>
    )
}