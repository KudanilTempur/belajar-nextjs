import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link
        href="/pokemon"
      >
        pokemon</Link> <br />
      <Link
        href="/about"
      >
        about</Link><br />
      <Link href="/book">book</Link>
    </main>
  )
}