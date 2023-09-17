import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { type } from 'os';
import React, { ReactNode } from 'react';

type TechContainerProps = {
    children: ReactNode,
    title : string,
}

export default function TechContainer(props : TechContainerProps) {
    return (
        <div>
            <h1 className={`text-black`}
            >{props.title}</h1>
            <div className={`
            flex flex-wrap
            gap-4
      `     }>
                {props.children}
            </div>
        </div>
    )
}