import Container from "../global/Container"
import { Separator } from "../ui/separator"
import DarkMode from "./DarkMode"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import SocialLinks from "./SocialLinks"


function NavBar() {
    return (
        <nav>
            <Container >
                <div className="flex flex-col sm:flex-row flex-wrap justify-between sm:items-center py-8">
                    <Logo />
                    <div className="flex flex-col sm:flex-row gap-4 ">
                        <DarkMode />
                        <SocialLinks />
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row flex-wrap justify-between sm:items-center py-8">
                    <NavSearch />
                </div>
            </Container>
        </nav>
    )
}

export default NavBar