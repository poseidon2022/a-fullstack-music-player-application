import { Container, Name, Form, SignupMessage } from "../wrappers/Signup"
import { useState } from "react"
import {Link} from "react-router-dom"
export default function Signup() {
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
    return (
        <Container>
            <Form>
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