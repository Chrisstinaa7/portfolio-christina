import Navbar from '/components/navbar.js'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Christina – a Frontend Developer
        </h1>

        <p className="text-lg md:text-xl mb-8">
          I build responsive, user-friendly web interfaces using React and Next.js.
        </p>

        <Link href="/projects">
          <span className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-200 transition">
            View My Projects
          </span>
        </Link>

      </main>
    </>
  )
}
