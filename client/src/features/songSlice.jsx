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
    }, 
    reducers: {
        playSong: (state, action) => {
            const {song, index} = action.payload;
            state.currentSongIndex = index;
            state.currentSong = action.payload;
            state.isPlaying = true;
        },
        pauseSong: (state) => {
            state.isPlaying = false;
        },
        resumeSong: (state) => {
            state.isPlaying = true;
        },
        playNextSong: (state) => {
            const nextIndex = (state.currentSongIndex + 1) % state.data.length;
            state.currentSong = state.data[nextIndex];
            state.currentSongIndex = nextIndex;
            state.isPlaying = true;
        },
        playPreviousSong: (state) => {
            const prevIndex = (state.currentIndex - 1 + state.songList.length) % state.songList.length;
            state.currentIndex = prevIndex;
            state.currentSong = state.data[prevIndex];
            state.isPlaying = true;
        },
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

export const {playSong, pauseSong, resumeSong, playNextSong, playPreviousSong} = songSlice.actions

export default songSlice.reducer