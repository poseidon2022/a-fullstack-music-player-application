import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchSong = createAsyncThunk("fetchSong", async () => {
    const songData = await fetch(`http://localhost:3000/api/song/allsongs/${localStorage.getItem('user_id')}`)
    return songData.json()
})

const songSlice = createSlice({
    name :'song',
    initialState: {
        isLoading : false,
        data: null,
        error : false
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchSong.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchSong.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })

        builder.addCase(fetchSong.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export default songSlice.reducer