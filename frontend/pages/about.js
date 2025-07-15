import Navbar from '/components/navbar.js'

export default function About() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black text-white px-6 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6 text-white-400">About Me</h1>

                    <p className="text-lg mb-8">
                        I'm Christina, a frontend developer passionate about building clean, responsive, and accessible user interfaces.
                        I'm currently learning advanced React and Next.js, and I love exploring UI/UX design, accessibility, and frontend performance optimization.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Technologies I Use</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
            </main>
        </>
    )
}
