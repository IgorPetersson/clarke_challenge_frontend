import { Container, ContainerLogo, Content } from "./styles"
import logo from "../../assets/flask_energia_logo.png"

const ElectricitySupplier = ({provider}) => {
    return(
        <Container>
            <ContainerLogo>
                <img src={logo}/>
            </ContainerLogo>
            <Content>
            <div className="provider-name">{provider?.name}</div>
            <div>Estado: {provider?.state} </div>
            <div>Custo por kWh: R$ {provider?.price_kwh}</div>
            <div>Limite mínimo de kWh: {provider?.minimum_limit_khw} </div>
            <div>Clientes: {provider?.number_of_clients}</div>
            <div>Avaliação média: {provider?.average_rating} </div>
            </Content>
        </Container>
    )
}

export default ElectricitySupplier