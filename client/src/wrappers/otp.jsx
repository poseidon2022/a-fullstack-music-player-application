import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OtpContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:900px) {
        width: 100%;
        justify-content: start;
        margin-top: 40px;
    }

    div {
        width: 100%; // Ensure divs take full width
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items: center; // Center the label and input horizontally
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        width: 50%; // Set input width for better layout control
        padding: 10px;
        border: 1px solid #27AE60;
        font-size: 1em;
        border-radius: 5px;
    }

    .submit {
        color: white;
        background: none;
        background-color: #27AE60;
        cursor: pointer;
    }
    
    .title {
        font-size: 3vw;
        font-weight: 600; 
    }

    @media screen and (max-width:900px) {
        input {
            width: 70%;
        }
    }
    
    @media screen and (min-width:900px) {
        .title {
            font-size: 2em;
        }
    }
`