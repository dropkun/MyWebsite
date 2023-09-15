import Logo from "./logo"
import Nav from "./nav"
import Container from "./container"

export default function Headers() {
    return(
    <header>
        <div className={`hover:flex flex justify-between`}>
            <Logo />
            <Nav />
        </div>
    </header>
    )
}