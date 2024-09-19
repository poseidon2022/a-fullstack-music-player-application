import { Container, Name, Form, SignupMessage } from "../wrappers/Signup"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import {toast} from 'react-toastify'
export default function Signup() {

    const API_URL = import.meta.env.BASE_URL;
    const navigate = useNavigate()
    const [info, setInfo] = useState(
        {
            first_name : "",
            last_name : "",
            email : "",
            password : ""
        }
    )

    function handleChange(e) {
        e.preventDefault()
        console.log(info)
        setInfo((prevState) => ({... prevState, [e.target.id] : e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/api/user/generate-otp`, {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(info)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast.success("otp sent to email")
                    navigate("/otp")
                }
                localStorage.setItem('email', info.email)
            })
            .catch(error => {
                toast.warn("otp not sent, please try again")
            })
    }
    return (
        <Container>
            <Form onSubmit = {handleSubmit}>
                <Name>
                    <div className="names">
                        <input
                            id = "first_name"
                            type = "first name"
                            placeholder="First Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className = "names">
                        <input
                            id = "last_name"
                            type = "text"
                            placeholder="Last Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </Name>
                <label>Email</label>
                <input
                    id = "email"
                    className = "email_and_password"
                    type = "email"
                    placeholder="kidus@gmail.com"
                    onChange={handleChange}
                    required
                />
                <label>Password</label>
                <input
                    id = "password"
                    className = "email_and_password"
                    type = "password"
                    minLength={8}
                    onChange={handleChange}
                    required
                />
                <input
                    className = "submit"
                    type = "submit"
                    value = "Signup"
                />
            </Form>
            <SignupMessage>
                Already have an account? <Link to = "/" className = "signup">Login</Link>
            </SignupMessage>
        </Container>
    )
}