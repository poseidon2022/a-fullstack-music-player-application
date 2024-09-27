import hand from "../assets/hand.jpg";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { playNextSong, playSong, playPreviousSong, pauseSong, resumeSong } from "../features/songSlice";
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
        FaVolumeUp, 
        FaPause
    } from "react-icons/fa"

export default function Playing() {
    const [volume, setVolume] = useState(50);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null)

    const { currentSong, isPlaying, data } = useSelector(state => state.song);
    const dispatch = useDispatch()
    useEffect(()=> {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume])

    useEffect(() => {
        if (currentSong) {
            console.log("Playing:", currentSong.song_name)
            audioRef.current.src = currentSong.audio_url;
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentSong]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    }

    const handleNext = () => {
        dispatch(playNextSong())
    }

    const handlePrevious = () => {
        dispatch(playPreviousSong());
    }

    const handlePlayPause = () => {
        if (isPlaying) {
            dispatch(pauseSong());
        } else {
            dispatch(resumeSong());
        }
    };

    const handleProgressChange = (e) => {
        const newProgress = e.target.value;
        setProgress(newProgress);
        if (audioRef.current) {
            audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
        }
    };
    
    const handleRedo = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
        }
    }
    return (
        <Container>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleNext}
            />

            <NowPlaying>
                Now Playing
            </NowPlaying>
            <ThumbNail src={currentSong ? currentSong.image_url : hand} alt="Hand" />
            <MusicDetail>
                <button>
                    <FaPlus />
                </button>
                <MusicName>
                    <div className = "music_name">{currentSong ? currentSong.song_name : "Company Money"}</div>
                    <div className = "artist_name">{currentSong ? currentSong.artist_name : "1000 Gecks"}</div>
                </MusicName>
                <button>
                    <FaHeart />
                </button>
            </MusicDetail>
            <Control>
                <TimeControl>
                    <span>{audioRef.current ? Math.floor(audioRef.current.currentTime / 60) + ":" + ("0" + Math.floor(audioRef.current.currentTime % 60)).slice(-2) : "00:00"}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleProgressChange}
                    />
                    <span>{audioRef.current && audioRef.current.duration ? Math.floor(audioRef.current.duration / 60) + ":" + ("0" + Math.floor(audioRef.current.duration % 60)).slice(-2) : "--:--"}</span>
                </TimeControl>
                <PropertyControl>
                    <button className = "random_and_loop">
                        <FaRandom />
                    </button>
                    <button onClick={handlePrevious}>
                        <FaBackward />
                    </button>
                    <div className = "play_container">
                        <button className = "play_button" onClick={handlePlayPause}>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                    </div>
                    <button onClick = {handleNext}>
                        <FaForward />
                    </button>
                    <button className = "random_and_loop" onClick={handleRedo}>
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