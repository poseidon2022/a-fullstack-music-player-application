import {Container,
        Track,
        MusicControl,
        PlayingNext,
        TrackContainer,
        Song} from '../wrappers/TrackStyles'
import { FaRandom, FaRedo } from 'react-icons/fa'
import {useSelector, useDispatch } from "react-redux";
import { pauseSong, playSong, resumeSong } from '../features/songSlice';
import { useState } from 'react';

export default function TrackList() {
    const { data, isLoading, error, currentSong, isPlaying, activeSongId} = useSelector((state) => state.song);
  
    const fetchedSongs = data ? data : [];
    const dispatch = useDispatch()

    const handlePlay = (song, index) => {
        
        if (currentSong && currentSong._id === song._id && isPlaying) {
          dispatch(pauseSong()); 
        } else if (currentSong && currentSong._id === song._id && !isPlaying) {
          dispatch(resumeSong()); 
        } else {
          dispatch(playSong({song, index}));
        }
      };
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
                {isLoading ? (
                <p>Loading songs...</p>
                ) : error ? (
                    <p>Error loading songs</p>
                ) : fetchedSongs.length > 0 ? (
                    fetchedSongs.map((song, index) => (
                    <Song isActive={song._id === activeSongId} key={song._id} onClick = {() => handlePlay(song, index)}>
                        <img src={song.image_url} className="song_image" alt="Song cover" />
                        <div className="song_name_artist">
                        <div className="song_name">{song.song_name}</div>
                        <div className="artist">{song.artist_name}</div>
                        </div>
                        <div className="year_minute">
                        <div className="song_name">3:00</div>
                        <div className="artist">{song.date.split("-")[0]}</div>
                        </div>
                    </Song>
                    ))
                ) : (
                    <p>No Songs Available</p>
                )}
            </TrackContainer>
        </Container>   
    )
}