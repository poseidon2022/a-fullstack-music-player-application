import styled from "styled-components";
export const Container = styled.div`
    width: 50%;
    max-height : 100vh;
    margin:0px 30px 0px 30px;
    background-color: #fafafa;
    padding: 20px;
    display: flex; /* Enable flexbox */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children horizontally */
    justify-content: center; 
    @media screen and (max-width: 900px) {
        width: 85%;
    }
`;

export const NowPlaying = styled.div`
    font-weight: 800;
    font-size: 1.5em;
    text-align: center;
    max-width: 100%;
`;

export const ThumbNail = styled.img`
    max-width: 80%;
    max-height : 40vh;
    margin: 10px 0; /* Adjust vertical margin if needed */
    border-radius: 10px; 
`;

export const MusicDetail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width : 70%;
    button {
        color: #9BD8B5;
        font-size: 1.5em;
        outline : none;
        border : none;
        background : none;
        cursor: pointer;
    }
    @media screen and (max-width: 900px) {
        width: 80%;
    }
`

export const MusicName = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .music_name {
        font-weight : 700;
    }
`

export const Control = styled.div`
    display: flex;
    flex-direction: column;
    align-items-center;
    justify-content: center;
    text-align: center;
    width: 80%;
`

export const PropertyControl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    cursor: pointer;
    button {
        outline : none;
        border : none;
        background : none;
        color: #27AE60;
        font-size : 1.75em;
        cursor: pointer;
    }
    .play_container {
        width : 6rem;
        height : 6rem;
        background-color : #27AE60;
        border-radius : 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .play_button {
        color: white;
        font-size: 2em;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center; 
        justify-content: center;
        margin: 0; 
    }

    .random_and_loop {
        color: gray;
    }
`

export const Volume = styled.div`
    margin-top : 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input[type='range'] {
        -webkit-appearance: none; /* Remove default WebKit styles */
        width: 80%; /* Slider width */
        height: 5px; /* Track height */
        border-radius: 5px; /* Rounded track */
        outline: none; /* Remove outline */
        cursor: pointer; /* Cursor style */
    }

    input[type='range']::-webkit-slider-runnable-track {
        background: #ddd;
        height: 5px;
        border-radius: 5px;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none; 
        width: 20px; 
        height: 20px; 
        border-radius: 50%; 
        background: #27AE60;
        cursor: pointer; 
        margin-top: -8px; 
    }

    .volume {
        font-size : 1.5rem;
        color: gray;
        cursor: pointer;
    }
`
export const TimeControl = styled.div`
    margin-top : 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span  {
        margin : 3px;
        color: gray;
    }
    input[type='range'] {
        -webkit-appearance: none; /* Remove default WebKit styles */
        width: 72%; /* Slider width */
        height: 5px; /* Track height */
        border-radius: 5px; /* Rounded track */
        outline: none; /* Remove outline */
        cursor: pointer; /* Cursor style */
    }

    input[type='range']::-webkit-slider-runnable-track {
        background: #ddd;
        height: 5px;
        border-radius: 5px;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none; 
        width: 20px; 
        height: 20px; 
        border-radius: 50%; 
        background: #27AE60;
        cursor: pointer; 
        margin-top: -8px; 
    }
`