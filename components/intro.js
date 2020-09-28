import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <div className="flex-col flex items-center">
      <section className="flex-col flex items-center md:justify-between mb-16 md:mb-12 banner">
        <h1 className="font-banner leading-tight">Hunting</h1>
        <h1 className="font-banner leading-tight">Mirages</h1>
      </section>
      <section>
        <img className="introHero" src="/assets/Axeman cutout.png" />
      </section>
    </div>
  )
}
