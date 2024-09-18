import { useState } from "react"
import {Container, Form, LoginMessage} from "../wrappers/Login"
import { Link } from "react-router-dom"
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleEmailChange(e) {
        e.preventDefault()
        setEmail((email) => e.target.value)
    }
    function handlePasswordChange(e) {
        e.preventDefault()
        setPassword((password) => e.target.value)
    }
    function handleSubmit() {
        setEmail('')
        setPassword('')
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    className = "email_and_password"
                    type = "email"
                    placeholder="kidus@gmail.com"
                    value = {email} 
                    onChange = {handleEmailChange}
                    required
                />
                <label>Password</label>
                <input
                    className = "email_and_password"
                    type = "password"
                    value = {password} 
                    onChange = {handlePasswordChange}
                    required
                />
                <input
                    className = "submit"
                    type = "submit"
                    value = "Login"
                />
            </Form>
            <LoginMessage>
                Don't have an account? <Link to = "signup" className = "signup">Signup</Link>
            </LoginMessage>
        </Container>
    )
}