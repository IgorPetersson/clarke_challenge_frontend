import styled from "styled-components";

export const Container = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 800px){
        width: 800px;
    }

    svg{
        width: 40px;
        height: 21px;
    }
`



