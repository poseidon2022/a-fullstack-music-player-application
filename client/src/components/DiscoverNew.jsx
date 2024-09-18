import { Container, DiscoverNew, MusicContainer, Music, MusicImage} from "../wrappers/DiscoverNew"
import dua from "../assets/dua.jpeg"
import don from "../assets/don.jpeg"
import ed from "../assets/ed.jpg"

export default function SideBar() {
    return (
        <Container>
            <DiscoverNew>
                Discover New Songs
            </DiscoverNew>
            <MusicContainer>
                <Music>
                    <MusicImage src = {dua}></MusicImage>
                    <div className = "song">
                        Okay Computer
                    </div>
                    <div className = "artist">
                        Billie Eilish, <span className = "year">2001</span>
                    </div>
                </Music>
                <Music>
                    <MusicImage src = {dua}></MusicImage>
                    <div className = "song">
                        News
                    </div>
                    <div className = "artist">
                        Dua Lipa,  <span className = "year">2017</span>
                    </div>
                </Music>
                <Music>
                    <MusicImage src = {don}></MusicImage>
                    <div className = "song">
                        You Don Know
                    </div>
                    <div className = "artist">
                        Dona Parks,  <span className = "year">2019</span>
                    </div>
                </Music>
                <Music>
                    <MusicImage src = {ed}></MusicImage>
                    <div className = "song">
                        Shape of You
                    </div>
                    <div className = "artist">
                        Ed Sheeran,  <span className = "year">2016</span>
                    </div>
                </Music>
                <Music>
                    <MusicImage src = {ed}></MusicImage>
                    <div className = "song">
                        Shivers
                    </div>
                    <div className = "artist">
                        Ed Sheeran,  <span className = "year">2021</span>
                    </div>
                </Music>
            </MusicContainer>
        </Container>
    )
}