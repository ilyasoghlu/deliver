import Container from "../global/Container"
import { Separator } from "../ui/separator"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import SocialLinks from "./SocialLinks"


function NavBar() {
    return (
        <nav>
            <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center flex-wrap  ">
                    <Logo />
                    <SocialLinks />
                </div>
                <Separator />
                <div>
                    <NavSearch />
                </div>
            </Container>
        </nav>
    )
}

export default NavBar