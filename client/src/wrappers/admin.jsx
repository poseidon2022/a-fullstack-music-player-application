import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    @media screen and (max-width:900px) {
        flex-direction: column;
    }
`;

export const Upload = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:900px) {
        width: 100%;
        justify-content: start;
        margin-top: 40px;
    }

    div {
        width: 100%; // Ensure divs take full width
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items: center; // Center the label and input horizontally
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        width: 50%; // Set input width for better layout control
        padding: 10px;
        border: 1px solid #27AE60;
        font-size: 1em;
        border-radius: 5px;
    }

    .submit {
        color: white;
        background: none;
        background-color: #27AE60;
        cursor: pointer;
    }
    
    .title {
        font-size: 2em;
        font-weight: 600; 
    }

    @media screen and (max-width:900px) {
        input {
            width: 70%;
        }
    }
`;

export const MusicList = styled.div`
    max-height: 100vh;
    width: 25%;
    padding-top: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 900px) {
        width: 70%; // Increase width for smaller screens
        margin: 0 auto; // Center align for mobile
        padding-top: 20px;
    }
`;

export const Track = styled.div`
    font-size: 2vw;
    font-weight: 900;
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