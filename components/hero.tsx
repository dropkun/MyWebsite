import Container from "./container";
import Image from "next/image";
import drop from  "@/Image/drop.png"

interface HeroProps {
  title: string;
  subtitle: string;
  imageOn?: boolean;
}

export default function Hero({title, subtitle, imageOn = false}: HeroProps) {
  return (
    <div className={`lg:flex`}>
      <div className={`lg:w-2/3`}>
        <h1 className={`
          my-4
          font-bold text-7xl tracking-tight
          bg-gradient-to-r from-primary to-secondary
          bg-clip-text text-transparent
          `}>{title}</h1>
        <p className="text-black">{subtitle}</p>
      </div>
      {imageOn &&(
          <figure className={`w-max-xl -rotate-12`}>
            <Image src={drop} alt="" layout="responsive" />
         </figure>
          )}
    </div>
  )
}