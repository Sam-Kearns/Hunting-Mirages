import { CMS_NAME } from '../lib/constants'
import ThroughSiliconDunes from '../components/throughSiliconDunes'
import Container from '../components/container'

export default function Intro() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex-col flex items-center md:justify-between mb-16 md:mb-12 banner">
        <h1 className="font-banner leading-tight">Hunting</h1>
        <h1 className="font-banner leading-tight">Mirages</h1>
        <h2 className="fontSubBanner mt-1vw">Debut Album</h2>
        <img className="w-80pc mt--1vw mb--2vw" src="/assets/TSD Title Only 1920px.png"/>
      </section>
      <section className="flex flex-row">
        <section className="w-25pc">
          <ThroughSiliconDunes />
        </section>
        <section className="w-50pc flex-col flex items-center">
          <img className="mt--2vw w-100pc" src="/assets/Axeman cutout.png" />
        </section>
        <section className="w-25pc">
          <Container className="flex flex-col items-center">
            <p className="font-2vw textGlow">Streaming now</p>
            <img src="assets/bandcamp-logotype-light-512.png" />
            <img className="" src="/assets/Spotify_Logo_RGB_Green.png" />
            <img className="mt-1vw" src="/assets/US-UK_Apple_Music_Listen_on_Badge_RGB_072720.svg" />
            <img className="mt-1vw" src="/assets/Nightride.FM 500px.png" />
          </Container>
        </section>
       </section>
       
    </div>
  )
}
