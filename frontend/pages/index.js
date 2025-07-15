import Navbar from '/components/navbar.js'
import Link from 'next/link'
import Footer from '/components/footer.js'

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-4"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >

        <div className="bg-black/60 p-8 rounded-lg backdrop-blur-sm shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m Christina – a Frontend Developer
          </h1>

          <p className="text-lg md:text-xl mb-8">
            I build responsive, user-friendly web interfaces using React, Next.js and Tailwind CSS.
          </p>

          <Link href="/projects">
            <span className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow hover:bg-gray-200 transition">
              View My Projects
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
