import { Container } from "./styles";
import logoEletric from "../../assets/eletricidade.png"

const Logo = () => {
    return(
        <Container>
            <figure>
                <img src={logoEletric}/>
            </figure>
            <div>Energia Livre</div>
        </Container>
    )
}

export default Logo;