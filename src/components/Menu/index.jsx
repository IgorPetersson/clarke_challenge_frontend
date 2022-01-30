import { Container } from "./styles"
import Logo from "../Logo"
import {FiLogOut} from "react-icons/fi"
import {useAuth } from "../../providers/Auth"

const Menu = () => {

    const {signOut} = useAuth()

    return(
        <Container>
            <Logo />
            <FiLogOut onClick={signOut}/>
        </Container>
    )
}

export default Menu