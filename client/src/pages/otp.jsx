import { useState } from "react";
import { Container, OtpContainer } from "../wrappers/otp";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
export default function Otp() {

    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    function handleChange(e) {
        e.preventDefault()
        setOtp((prev) => e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(localStorage.getItem('email'))
        fetch(`http://localhost:3000/api/user/signup`, {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({email: localStorage.getItem('email'), otp : otp})
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast("verification success, please login to proceed")
                    localStorage.removeItem('email')
                    navigate("/")
                } else {
                    toast.warn(data.message) 
                }
            })
            .catch(error => {
               toast.warn(error.message) 
            })
    }

    return (
        <Container>
            <OtpContainer onChange = {handleChange} onSubmit = {handleSubmit}>
                <div className = "title">
                    A verification email with an otp was sent.
                </div>
                <div>
                    <label for="otp">Otp</label>
                    <input type="text" name="otp" id = "otp" required />
                </div>
                <div>
                    <input type = "submit" className = "submit"></input>
                </div>
            </OtpContainer>
        </Container>
    )
}