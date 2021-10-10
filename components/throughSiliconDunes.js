import Container from '../components/container'

export default function ThroughSiliconDunes() {
    return (
        <Container className="">
            <div className="boxGlow" style={{ position: 'relative', 'padding-top': '100%' }}>
                <iframe style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }} src="https://bandcamp.com/EmbeddedPlayer/album=3874386035/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://huntingmirages.bandcamp.com/album/through-silicon-dunes">Through Silicon Dunes by HuntingMirages</a></iframe>
            </div>
            <img className="boxGlow mt-1vw" src="assets/TSD Back Cover 1Kpx.png" />
        </Container>
    )
}
