import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import tailwindicon from "../public/tailwind.png"
import star from "../public/Star.png"
import React from 'react';
type TechButtonProps = {
    name?: string,
    url?: string,
    icon?: StaticImageData,
    favorite?: boolean,
    status?: string,
}

export const TechButton = ({
    name = "Tech",
    url = "",
    icon = tailwindicon,
    favorite = false,
    status = "default",
    ...props
}: TechButtonProps) => {
    return (
        <Button
            className="
                bg-subprimary
                w-48 h-48
                my-3
                rounded-xl
                shadow-lg
                hover:-translate-y-3 duration-300
                flex flex-col
                text-black
            "
            href={url}
            target="_blank">
            <div className="flex flex-row m-4">
                {favorite && (
                    <Image className="flex justify-start"
                        src={star} alt="favorite" width={24} />
                )}
                <p className="flex justify-end">{status}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={icon} alt={name} height={80} />
                <p className="m-4 text-center">
                    {name}
                </p>
            </div>
        </Button>
    )
}
