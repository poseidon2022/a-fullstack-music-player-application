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

            const {data} = axios.post(
                `${backendURL}/api/user/login`, 
                {email, password},
                config
            )

            localStorage.setItem('userToken', data.userInformation.accessToken)
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