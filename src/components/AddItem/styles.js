import styled from "styled-components";

export const AddTask = styled.input`
    margin-top: 20px;
    border-radius: 5px;
    border-style: none;
    padding: 20px;
    font-size: 16px;
    margin-bottom: 20px;
    width: 80vw;
    @media (min-width: 768px) {
        width: 50vw;
    }
    background-color: ${props => props.isTheme ? 'white' :'hsl(235, 24%, 19%)'};
    color: ${props => props.isTheme ? 'hsl(235, 19%, 35%)' :'hsl(234, 39%, 85%)'};
`
export const FormEle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    @media (min-width: 768px) {
        width: 50vw;
    }
    margin-top: -150px;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
