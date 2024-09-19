import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const backendURL = 'http://localhost:3000'
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {

            const config = {
                headers: {
                  'Content-Type': 'application/json',
                },
            }

            const data = await axios.post(
                `${backendURL}/api/user/login`, 
                {email, password},
                config
            )

            const accessToken = data.data.user.accessToken
            const user_id = data.data.user._id

            localStorage.setItem('userToken', accessToken)
            localStorage.setItem('user_id', user_id)
            return data

        } catch(error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)