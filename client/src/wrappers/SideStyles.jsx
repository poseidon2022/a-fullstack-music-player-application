import styled from "styled-components";
import {Link} from "react-router-dom"
export const Container = styled.div`
    width: 5%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 60%;
    }
`
export const Profile = styled.img`
    height : 3em;
    width: 3em;
    margin: 5px;
    border-radius: 50%; 
`
export const Button = styled.button`
    display: flex; 
    justify-content: center; 
    align-items: center;
    color: #27AE60;
    font-size: 1.5em;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 15px;
    margin: 5px;
    text-align: center;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #27AE60;
        color: white;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center; 
    align-items: center;
    z-index: 1000;
`;
