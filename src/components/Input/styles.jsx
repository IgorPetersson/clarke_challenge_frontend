import styled from "styled-components";

export const Container = styled.div`
  color: black;
  text-align: left;
  font-size: 1.1rem;
`;

export const InputContainer = styled.div`
  background-color: #e4e2e2;
  border-radius: 8px;
  color: black;
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  
  input {
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;
    background-color: #e4e2e2;
    align-items: center;
    color:black;
    &::placeholder {
      color: black;
    }
  }
  svg {
    color: black;
    margin-right: 16px;
  }
`;
