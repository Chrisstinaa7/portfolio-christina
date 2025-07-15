import Navbar from '/components/navbar.js'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Hi, I’m Christina – a Frontend Developer
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-8">
          I build responsive, user-friendly web interfaces using React and Next.js.
        </p>

        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </main>
    </>
  )
}
