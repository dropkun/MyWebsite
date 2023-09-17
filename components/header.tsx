import Logo from "./logo"
import Nav from "./nav"
import Container from "./container"

export default function Headers() {
    return(
    <header className="
    sticky top-0
    bg-subprimary
    shadow-md
    h-30
    ">
        <div className={`hover:flex flex justify-between`}>
            <Logo />
            <Nav />
        </div>
    </header>
    )
}