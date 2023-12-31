import Image, { StaticImageData } from 'next/image';
import React from 'react';
type SocialButtonProps = {
  url: string
  icon: StaticImageData
}

export default function SocialButton(props: SocialButtonProps) {
  return (
    <a
      className={`
                flex flex-col items-center
                mx-2
            `}
      href={props.url}
      target='_blank'
    >
      <Image src={props.icon} alt={''} width={24} height={24} />
    </a>
  );
}
