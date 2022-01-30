import { Container, InputContainer } from "./styles"

const Input = ({
     icon: Icon, name, register, error="",...rest
}) => {
    return(
        <Container>
            <InputContainer>
                {Icon && <Icon size={23} />}
                <input
                    {...register(name)}
                    {...rest}
                ></input>
            </InputContainer>
            <div>{!!error && <span>{error}</span>}</div>
        </Container>
    )
}

export default Input