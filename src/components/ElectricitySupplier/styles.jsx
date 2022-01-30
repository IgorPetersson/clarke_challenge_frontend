import styled from "styled-components";

export const Container = styled.li`
    width: 300px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
`
export const ContainerLogo = styled.div`
    height: 100px;
    width: 100px;
    font-size: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 50px;
        width: 80px;
    }
`
export const Content = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .provider-name{
        font-weight: bold;
    }

    `