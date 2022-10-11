import styled from "styled-components";


export const TodoItem = styled.li`
    width: 45vw;
    border-radius: 5px;
    border-style: none;
    padding: 20px 20px 20px 20px;
    margin-top: 1px;
    margin-left: -35px;
    font-size: 18px;
    font-weight: 400;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    background-color: ${props => props.isTheme ? 'white' :'hsl(235, 24%, 19%)'};
    color: ${props => props.isTheme ? 'hsl(235, 19%, 35%)' :'hsl(234, 39%, 85%)'};
    display: ${props => props.isLength && 'none'};
    @media (min-width: 768px) {
        width: 50vw;
    }
`;
export const Label = styled.label`
     text-decoration: ${props => props.isClicked ?'line-through' : ''};
`;
export const TodoItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
`;

export const Checkbox = styled.input`
   cursor: pointer;
   position: relative;
   border-radius: 50%;
   width: 20px;
   height: 20px;
   margin-right: 18px;
   background-color: ${props => props.setTheme ? 'white' :'hsl(220, 98%, 61%)'};
`;

export const Footer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 88vw;
    //margin-right: 8px;
    margin-left: -35px;
    @media (min-width: 768px) {
        width: 50vw;
    }
    //margin: 0px;
    height: 10vh;
    flex-wrap: wrap;
    background-color: ${props => props.isTheme ? 'white' :'hsl(235, 24%, 19%)'};
    color: ${props => props.isTheme ? 'hsl(235, 19%, 35%)' :'hsl(234, 39%, 85%)'};
    border-radius: 10px;
`

export const Image =styled.img`
    width: 12px;
    height: 10px;
    margin-top: 13px;
    cursor: pointer;
    @media (min-width : 768px){
        width: 15px;
        height: 15px;
        margin-top: 10px;
    }
`
export const Hr=styled.hr`
    width: 177%;
    margin-left: -90px;
    color: ${props => props.isTheme ? 'hsl(235, 19%, 35%)' :'hsl(234, 39%, 85%)'};
    margin-top: -5px;
    @media (min-width: 768px){
        width:108% ;
        margin-left: -35px;
    }
`
export const Button = styled.button`
    border: 0px;
    background-color: white;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    background-color: ${props => props.isTheme ? 'white' :'hsl(235, 24%, 19%)'};
    color: ${props => props.isTheme ? 'hsl(235, 19%, 35%)' :'hsl(234, 39%, 85%)'};
    color: ${props => props.isActive ? 'hsl(220, 98%, 61%)' : ''};
    color: ${props => props.isAll ? 'hsl(220, 98%, 61%)' : ''};
    color: ${props => props.isCmplt ? 'hsl(220, 98%, 61%)' : ''};
    &:hover,
    &:focus{
        font-weight: 700 bold;
    }
    margin: 0px;
`
export const Count = styled.span`
    color: ${props => props.isTheme ? 'hsl(235, 19%, 35%)' :'hsl(234, 39%, 85%)'};
    font-size: 16px;
    font-weight: 400;
`