import { useState, useEffect } from "react"
import {Container, Form, LoginMessage} from "../wrappers/Login"
import {useSelector, useDispatch} from 'react-redux'
import {userLogin} from '../actions/authAction'
import { Link, useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading, error} = useSelector((state) => state.auth)
    function handleEmailChange(e) {
        e.preventDefault()
        setEmail((email) => e.target.value)
    }
    function handlePasswordChange(e) {
        e.preventDefault()
        setPassword((password) => e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        await dispatch(userLogin({
            password : password,
            email : email
        }))

        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            toast("logged in successfully")
            navigate('/home');
        } else {
            toast.warn("invalid credentials, try again")
        }
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
                Don't have an account? <Link to = "/" className = "signup">Signup</Link>
            </LoginMessage>
        </Container>
    )
}