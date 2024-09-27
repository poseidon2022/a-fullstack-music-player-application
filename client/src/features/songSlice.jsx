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
        error : false,
        currentSong: null,
        isPlaying : false,
        currentSongIndex : 0,
        activeSongId : null
    }, 
    reducers: {
        playSong: (state, action) => {
            const {song, index} = action.payload;
            state.currentSongIndex = index;
            state.currentSong = song;
            state.isPlaying = true;
            state.activeSongId = song._id
        },
        pauseSong: (state) => {
            console.log(state)
            state.isPlaying = false;
        },
        resumeSong: (state) => {
            state.isPlaying = true;
        },
        playNextSong: (state, action) => {

            const nextIndex = (action.payload + 1) % state.data.length;
            state.currentSong = state.data[nextIndex];
            state.currentSongIndex = nextIndex;
            state.isPlaying = true;
            state.activeSongId = state.currentSong._id
        },
        playPreviousSong: (state, action) => {

            const prevIndex = (action.payload - 1 + state.data.length) % state.data.length;
            state.currentSongIndex = prevIndex;
            state.currentSong = state.data[prevIndex];
            state.isPlaying = true;
            state.activeSongId = state.currentSong._id
        },
      },
    extraReducers: (builder) => {
        builder.addCase(fetchSong.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchSong.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.songs;
        })

        builder.addCase(fetchSong.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const {playSong, pauseSong, resumeSong, playNextSong, playPreviousSong} = songSlice.actions

export default songSlice.reducer