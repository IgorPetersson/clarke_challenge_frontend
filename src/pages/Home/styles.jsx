import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.kwh === false ? "" : "center" };
    min-height: 90vh;
    width: 100%;
    button{
        margin-top: 10px;
        height: 35px;
        width: 150px;
        margin-bottom: 10px;
    }
    `

export const ContainerProviders = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-bottom: 8px;
        font-size: 23px;
    }

    @media screen and (min-width: 800px){
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
        min-width: 800px;
        h1{
            width: 100%;
        }
    }

`

export const Question = styled.div`
    font-size: 22px;
    padding: 10px;
    text-align: center;
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;   
`

export const ContainerDemand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    height: 30px;
    input {
        font-weight: 600;
        font-size: 1.1rem;
        width: 100%;
        background-color: #e4e2e2;
        align-items: center;
        color:black;
        border-radius: 5px;
        height: 30px;
        text-align: center;
        &::placeholder {
        color: black;
        }
        width: 70px;
    }

    div{
        font-size: 20px;
        margin-right: 10px;
    }
    `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    `

export const FullContainer = styled.div`
    width: 100%;
    max-width: 1200px ;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivButton = styled.div`
    width: 100%;
    text-align: center;
`
