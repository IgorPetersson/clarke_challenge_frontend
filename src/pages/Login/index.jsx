import { Container, ContainerForm, NotAcount } from "./styles"
import Input from "../../components/Input";
import {FiMail, FiLock} from "react-icons/fi";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/Auth";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router";

const Login = () => {

    const formSchema = yup.object().shape(
        {
            email: yup.string().required(""),
            password: yup.string().required()
        }
    );

    const {signIn, isLogged } = useAuth();

    const {
        register, handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data) => {
        signIn(data)
    }

    if(isLogged == true){
        return(<Navigate to="/"/>)
    }

    return(
        <Container>
            <Logo />
            <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                    name="email"
                    icon={FiMail}
                    placeholder="Digite seu email"
                    register={register}
                ></Input>
                <Input
                    name="password"
                    icon={FiLock}
                    placeholder="Digite sua senha"
                    register={register}
                    type="password"
                ></Input>
                <Button type="submit">
                    Entrar
                </Button>
            </ContainerForm>
            <NotAcount>
                <div>Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link></div>
            </NotAcount>
            <Toaster />
        </Container>
    )
}

export default Login