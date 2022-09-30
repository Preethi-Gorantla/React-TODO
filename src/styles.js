import styled from "styled-components"
import light from '../src/components/images/light.jpg';
import dark from '../src/components/images//dark.jpg';
import { createGlobalStyle } from "styled-components";
//import {JosefinSans} from 'https://fonts.google.com/specimen/Josefin+Sans';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'JosefinSans';
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    background-color: ${props => props.isTheme ? 'white' : 'hsl(235, 24%, 19%)'};
    min-height: 100vh !important;
    min-width: 100vw;
    margin: -8px;
`;
export const Card = styled.span`
    color: white;
    background-image: url(${props => props.isTheme ? light : dark});
    width: 100%;
    height: 50vh;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Heading = styled.h1`
   `






