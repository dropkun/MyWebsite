import Logo from "./logo"
import Container from "./container"
export default function Footer() {
    return (
    <footer>
        <div className="hover:flex flex justify-between">
            <Logo />
            [social media icons]
        </div>
    </footer>
    )
}