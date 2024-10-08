import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    label {
        margin-bottom:10px;
    }
    .email_and_password {
        margin-bottom: 10px;
        font-size: 1em;
        border: 1px solid #27AE60;
        border-radius: 10px;
        padding: 10px;
        width: 30vw;
    }
    .submit {
        background: none;
        border: none;
        background-color: #27AE60;
        padding: 10px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        font-size: 1em;
    }

    @media screen and (max-width:900px) {
        .email_and_password {
            width: 70vw;
        }
    }
`
export const LoginMessage = styled.div`
    font-size: 1em;
    margin: 10px;
    .signup {
        text-decoration: none;
        color: #27AE60;
    }
`