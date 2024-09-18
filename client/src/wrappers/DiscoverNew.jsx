import styled from "styled-components";
export const Container = styled.div`
    width: 20%;             
    height: 90vh;           
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; 
    @media screen and (max-width: 900px) {
        display: none;
    }
`;


export const DiscoverNew = styled.div`
    font-size: 2em;
    font-weight: 800;
`
export const MusicContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
    }
`

export const Music = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    width: 50%;
    padding: 5px;
    box-sizing: border-box;
    @media screen and (max-width: 1100px) {
        width: 100%;
    }
    .song {
        font-weight: 600;
    }
    .year {
        color: gray;
    }
`

export const MusicImage = styled.img`
    max-width: 100%;
    border-radius: 10px;
`