import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { type } from 'os';
import React from 'react';
type TechButtonProps = {
    name: string,
    url: string,
    icon: StaticImageData,
}

export default function TechButton(props : TechButtonProps) {
    return (
        <Link 
            className={`
                bg-gradient-to-br from-subprimary to-subsecondary
                p-3 transition duration-1000
                text-black
                w-48 h-48
                text-center
                rounded-xl
                shadow-2xl
                flex flex-col justify-center items-center
            `}
            href={props.url}
            target="_blank">
            <Image src={props.icon} alt={props.name} width={100} height={100}/>
            <p className={`m-4`}>
                {props.name}
            </p>
        </Link>
    )
}