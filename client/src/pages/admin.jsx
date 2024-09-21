import { useState } from "react"
import axios from 'axios'
import {MusicList, Upload, Container, TrackContainer, Song, Track} from "../wrappers/admin"
import hand from "../assets/hand.jpg";
import {toast} from 'react-toastify'

export default function Admin() {
    const [formData, setFormData] = useState({
        music: null,
        image: null,
        artist: "",
        song_name: "",
        date: ""
    })

    function handleChange(e) {
        console.log(formData)
        e.preventDefault()
        setFormData((prev) => ({...prev, [e.target.id] : e.target.value}))
    }

    async function handleSubmit() {
        e.preventDefault()
        const musicData = new FormData()
        musicData.append("audio_url", formData.music)
        musicData.append("song_name", formData.song_name)
        musicData.append("image_url", formData.image)
        musicData.append("artist_name", formData.artist)
        musicData.append("date", formData.date)
        musicData.append("user_id", localStorage.getItem("user_id"))

        try {
            const res = await axios.post('http://localhost:3000/api/song/upload', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })

            if (res.data.success) { 
                toast("song uploaded successfully. refresh your page")
            } else {
                toast.warn("error while uploading song")
            }
        } catch(error) {
            console.error(err)
        }
    }
    return (
        <Container>
            <Upload onChange = {handleChange} onSubmit = {handleSubmit}>
                <div className = "title">
                    Upload a Music
                </div>
                <div>
                    <label for="music">Audio</label>
                    <input type="file" name="music" accept="audio/*" id = "music" required />
                </div>
                <div>
                    <label for="music">Cover Image</label>
                    <input type="file" name="music" accept="image/*" id = "image" required />
                </div>
                <div>
                    <label for="music">Artist Name</label>
                    <input type="text" name="music"  id = "artist" required />
                </div>
                <div>
                    <label for="music">Song Name</label>
                    <input type="text" name="music" id = "song_name" required />
                </div>
                <div>
                    <label for="music">Release Date</label>
                    <input type="date" name="music" id = "date" required />
                </div>
                <div>
                    <input type = "submit" className = "submit"></input>
                </div>
            </Upload>
            <MusicList>
                <Track>
                    Your Track list
                </Track>
                <TrackContainer>
                    <Song>
                        <img src = {hand} className = "song_image"></img>
                        <div className = "song_name_artist">
                            <div className = "song_name">
                                Money Machine
                            </div>
                            <div className = "artist">
                                1000 gecks
                            </div>
                        </div>
                        <div className = "year_minute">
                            <div className = "song_name">
                                3:00
                            </div>
                            <div className = "artist">
                                2019
                            </div>
                        </div>
                    </Song>
                    <Song>
                        <img src = {hand} className = "song_image"></img>
                        <div className = "song_name_artist">
                            <div className = "song_name">
                                Money Machine
                            </div>
                            <div className = "artist">
                                1000 gecks
                            </div>
                        </div>
                        <div className = "year_minute">
                            <div className = "song_name">
                                3:00
                            </div>
                            <div className = "artist">
                                2019
                            </div>
                        </div>
                    </Song>
                    <Song>
                        <img src = {hand} className = "song_image"></img>
                        <div className = "song_name_artist">
                            <div className = "song_name">
                                Money Machine
                            </div>
                            <div className = "artist">
                                1000 gecks
                            </div>
                        </div>
                        <div className = "year_minute">
                            <div className = "song_name">
                                3:00
                            </div>
                            <div className = "artist">
                                2019
                            </div>
                        </div>
                    </Song>
                    <Song>
                        <img src = {hand} className = "song_image"></img>
                        <div className = "song_name_artist">
                            <div className = "song_name">
                                Money Machine
                            </div>
                            <div className = "artist">
                                1000 gecks
                            </div>
                        </div>
                        <div className = "year_minute">
                            <div className = "song_name">
                                3:00
                            </div>
                            <div className = "artist">
                                2019
                            </div>
                        </div>
                    </Song>
                </TrackContainer>
            </MusicList>
        </Container>
    )
}