import {createSlice} from "@reduxjs/toolkit"
import {userLogin} from "../actions/authAction"

const initialState = {
    loading: false,
    userInfo : {},
    userToken : null,
    error : null,
    success : false,
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {},
    extraReducers : (builder) =>  {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
        
        builder
            .addCase(userLogin.fulfilled, (state, {payload}) => {
                state.loading = false,
                state.userInfo = payload.data.user,
                state.userToken = payload.data.user.accessToken
            })
        
        builder
            .addCase(userLogin.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
    }
})

export default authSlice.reducer