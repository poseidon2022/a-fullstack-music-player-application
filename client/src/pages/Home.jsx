import styled from "styled-components"
import SideBar from "../components/SideBar"
import TrackList from "../components/TarckList"
import DiscoverNew from "../components/DiscoverNew"
import Playing from "../components/Playing"
export default function Home() {
    return (
        <Container>
            <SideBar/>
            <DiscoverNew/>
            <Playing/>
            <TrackList/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: 900px) {
        flex-direction: column; 
        align-items: center;
    }
`