import Link from 'next/link'

export default function Header() {
  return (
    <section className="flex-col flex items-center md:justify-between mb-16 md:mb-12">
      <h1 className="font-mechsuit fontSubBanner textGlow leading-tight">
        <Link as={`/`} href="/"><a>Hunting Mirages</a></Link>
      </h1>
    </section>
)
}
