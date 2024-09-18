import {Container,
        Track,
        MusicControl,
        PlayingNext,
        TrackContainer,
        Song} from '../wrappers/TrackStyles'
import { FaRandom, FaRedo } from 'react-icons/fa'
import hand from "../assets/hand.jpg";

export default function TrackList() {
    return (
        <Container>
            <Track>
                Track list
            </Track>
            <MusicControl>
                <span><FaRandom /></span>
                <span><FaRedo /></span>
            </MusicControl>
            <PlayingNext>
                Playing Next
            </PlayingNext>
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
        </Container>   
    )
}