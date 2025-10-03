import Container from "../global/Container"
import { Separator } from "../ui/separator"
import DarkMode from "./DarkMode"
import Links from "./Links"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import SocialLinks from "./SocialLinks"


function NavBar() {
    return (
        <nav>
            <Container >
                <div className="flex flex-col sm:flex-row flex-wrap justify-between sm:items-center py-8">
                    <Logo />
                    <div className="flex gap-4 items-center">
                        <DarkMode />
                        <SocialLinks />
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row flex-wrap justify-between sm:items-center py-8">
                    <div className="flex flex-col flex-wrap sm:flex-row items-center justify-between gap-12 py-4">
                    <Links />
                    </div>
                    <NavSearch />
                </div>
            </Container>
        </nav>
    )
}

export default NavBar