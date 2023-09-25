import Logo from "./logo"
import Container from "./container"
import SocialButton from "./SocialButton"
import githubicon from "@/public/github.png"
import xicon from "@/public/x.png"

export default function Footer() {
    return (
        <footer>
            <p className="
                flex justify-end
            text-black
            mr-20">
                My SNS
            </p>
            <div className="
            flex
            justify-end
            mr-10
            mb-10
            ">
                <SocialButton
                    url="https://github.com/dropkun"
                    icon={githubicon}
                />
                <SocialButton
                    url="https://twitter.com/pg_jng"
                    icon={xicon}
                />
            </div>
        </footer>
    )
}