import { Container, ContainerForm, Acount } from "./styles"
import Input from "../../components/Input"
import {FiMail, FiLock, FiUser} from "react-icons/fi"
import Button from "../../components/Button"
import Logo from "../../components/Logo";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import {useUser} from "../../providers/User"
import { Toaster } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

const Register = () => {

    const {isLogged} = useAuth()

    const formSchema = yup.object().shape(
        {
            email: yup.string()
            .required("Email obrigatório")
            .email("Email inválido"),
            name: yup.string()
            .required("Nome obrigatório"),
            password: yup.string()
            .required("Senha obrigatória"),
            repeatPassword: yup.string()
            .required("Senha obrigatória")
            .oneOf([yup.ref("password")], "As senhas não coincidem")
        }
    )

    const {
        register, handleSubmit,
        formState: {errors},
    } = useForm(
        {resolver: yupResolver(formSchema)}
    )

    const {createAccount} = useUser()

    const onSubmitFunction = (data) => {
        createAccount(data)
    }

    if(isLogged == true){
        return(<Navigate to="/"/>)
    }

    return(
        <Container>
            <Toaster />
            <Logo/>
            <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                    name="name"
                    icon={FiUser}
                    placeholder="Digite seu nome"
                    register={register}
                    error={errors.name?.message}
                ></Input>
                <Input
                    name="email"
                    icon={FiMail}
                    placeholder="Digite seu email"
                    register={register}
                    error={errors.email?.message}
                ></Input>
                <Input
                    name="password"
                    icon={FiLock}
                    placeholder="Digite sua senha"
                    register={register}
                    error={errors.password?.message}
                    type="password"
                ></Input>
                <Input
                    name="repeatPassword"
                    icon={FiLock}
                    placeholder="Digite sua senha"
                    register={register}
                    error={errors.repeatPassword?.message}
                    type="password"
                ></Input>
                <Button type="submit">
                    Cadastrar
                </Button>
            </ContainerForm>
            <Acount>
                <div>Já tem uma conta? Faça seu login <Link to="/login">aqui</Link>.</div>
            </Acount>
        </Container>
    )
}

export default Register