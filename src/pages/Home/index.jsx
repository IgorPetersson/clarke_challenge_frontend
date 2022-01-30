import { useState, useEffect } from "react"
import ElectricitySupplier from "../../components/ElectricitySupplier"
import { Container, ContainerForm, Content, Question, DivButton, ContainerDemand, ContainerProviders, FullContainer } from "./styles"
import Button from "../../components/Button"
import Menu from "../../components/Menu"
import { Toaster } from "react-hot-toast"
import { useElectric } from "../../providers/ElectricitySupplier"
import { useUser } from "../../providers/User"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "../../providers/Auth"
import {Navigate} from "react-router-dom"
 
const Home = () => {

    const {isLogged, setIsLogged} = useAuth()
    const {electric, get_providers, } = useElectric()
    const {get_user, user} = useUser()
    const [kwhButton, setKwhButton] = useState(true);

    useEffect(() =>{
        get_user()
    }, [])

    const formSchema = yup.object().shape(
        {
            demand: yup.number().required()
        }
    )
    
    const {
        register, handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data) => {
        setKwhButton(false)
        get_providers(data.demand)
    }

    if(isLogged == false){
        return(<Navigate to="/login"/>)
    }

    return(
        <Content>
        <FullContainer>
        <Menu/>
        <Container kwh={kwhButton}>
            <Toaster />
            {kwhButton ?
            <Question>
                <p>Olá {user?.name}, informe sua demanda mensal de energia em kwh !</p>
                <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
                    <ContainerDemand>
                        <div>Demanda mensal:</div>
                        <input type="number" {...register("demand")}></input>
                    </ContainerDemand>
                    <Button type="submit">Enviar</Button>
                </ContainerForm>
            </Question>
            :
            <ContainerProviders>
                <h1>Fornecedores: </h1>
                {electric?.map((provider, index) => <ElectricitySupplier key={index} provider={provider}/>)}
                <DivButton>
                    <Button onClick={() => setKwhButton(true)}>Voltar</Button>
                </DivButton>
            </ContainerProviders>
            }
        </Container>
        </FullContainer>
        </Content>
    )
}

export default Home