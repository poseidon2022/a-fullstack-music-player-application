import hand from "../assets/hand.jpg";
import { useEffect, useRef, useState } from "react";
import {
    Container,
    NowPlaying,
    ThumbNail,
    MusicDetail,
    MusicName,
    Control,
    PropertyControl,
    Volume,
    TimeControl
} from "../wrappers/PlayingStyles"
import {FaPlus,
        FaHeart,
        FaRandom,
        FaPlay,
        FaForward,
        FaBackward,
        FaRedo,
        FaVolumeDown,
        FaVolumeUp
    } from "react-icons/fa"

export default function Playing() {
    const [volume, setVolume] = useState(50);
    const audioRef = useRef(null)

    useEffect(()=> {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume])

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    }
    return (
        <Container>
            <NowPlaying>
                Now Playing
            </NowPlaying>
            <ThumbNail src={hand} alt="Hand" />
            <MusicDetail>
                <button>
                    <FaPlus />
                </button>
                <MusicName>
                    <div className = "music_name">Money Machine</div>
                    <div className = "artist_name">1000 Gecks</div>
                </MusicName>
                <button>
                    <FaHeart />
                </button>
            </MusicDetail>
            <Control>
                <TimeControl>
                    <span>00:00</span>
                    <input
                        type="range"
                        min="0"
                        max="100" //max will be changable based on the music length {musicLength}, the same is true for the span component
                    />
                    <span >--:--</span>
                </TimeControl>
                <PropertyControl>
                    <button className = "random_and_loop">
                        <FaRandom />
                    </button>
                    <button>
                        <FaBackward />
                    </button>
                    <div className = "play_container">
                        <button className = "play_button">
                            <FaPlay />
                        </button>
                    </div>
                    <button>
                        <FaForward />
                    </button>
                    <button className = "random_and_loop">
                        <FaRedo />
                    </button>
                </PropertyControl>
                <Volume>
                    <FaVolumeDown className = "volume" onClick={() => setVolume(0)}/>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                    <FaVolumeUp className = "volume" onClick={() => setVolume(100)}/>
                </Volume>
            </Control>
        </Container>
    );
}