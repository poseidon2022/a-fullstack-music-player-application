import { Container, Profile, Button, Options, StyledLink} from "../wrappers/SideStyles"
import hand from "../assets/hand.jpg"
import {FaCompass, FaHeart, FaBook,FaSignOutAlt} from "react-icons/fa"
export default function SideBar() {
    return (
        <Container>
            <Profile src={hand} alt = "profile" />
            <Options>
                <Button>
                    <FaCompass />
                </Button>
                <Button>
                    <FaHeart />
                </Button>
                <Button>
                    <StyledLink to = "/admin"><FaBook /></StyledLink>
                </Button>
            </Options>
            <Button>
                <FaSignOutAlt />
            </Button>
        </Container>
    )
}