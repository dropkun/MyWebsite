import Container from "./container";
import Image from "next/image";
import drop from  "@/public/drop.png"

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

export default function Hero({title, subtitle, imageOn = false}: HeroProps) {
  return (
    <div className={`lg:flex`}>
      <div className={`lg:w-1/2`}>
        <h1 className={`
          my-4
          font-bold text-7xl tracking-tight
          bg-gradient-to-r from-primary to-secondary
          bg-clip-text text-transparent
          `}>{title}</h1>
        <p className="text-black">{subtitle}</p>
      </div>
      {imageOn &&(
          <figure className={`-rotate-12 max-w-xs my-16 mx-16 flex items-center`}>
            <Image src={drop} alt="" layout="responsive" className=""/>
         </figure>
          )}
    </div>
  )
}