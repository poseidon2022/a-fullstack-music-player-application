import styled from "styled-components";

export const Container = styled.div`
    max-height : 100vh;
    width: 25%;
    padding-top: 10px;
    display: flex; /* Enable flexbox */
    flex-direction: column; /* Stack children vertically */
    @media screen and (max-width: 900px) {
        width: 75%;
    }
`
export const Track = styled.div`
    font-size: 2vw;
    font-weight: 900;
`

export const MusicControl = styled.div`
    margin-top : 5px;
    span {
        color: gray;
        margin-right: 20px;
        font-size: 1.3rem;
    }
`
export const PlayingNext = styled.div`
    font-weight : 500;
    color: gray;
`

export const TrackContainer = styled.div`
    display : flex;
    flex-direction : column;
    overflow-y: auto;
    max-width: 100%;
    height: 100vh;
    @media screen and (max-width: 900px) {
        height: 20vh;
    }
`

export const Song = styled.div`
    display: flex;
    flex-direction : row;
    padding : 5px;
    .song_image {
        width: 2.5em;
        height: 2.5em;
        border-radius : 5px;
    }
    .song_name_artist {
        display : flex;
        flex-direction : column;
        padding-left: 7px;
        margin-right: auto;
    }
    .artist {
        color: gray;
        font-size : 0.8em;
    }
    .year_minute {
        display : flex;
        flex-direction : column;
        padding-right: 10px;
    }
`