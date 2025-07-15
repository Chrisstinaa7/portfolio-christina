import Navbar from '/components/navbar.js'

export default function About() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black text-white px-6 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6 text-blue-400">About Me</h1>

                    <p className="text-lg mb-8">
                        I'm Christina Peace, a Computer Science graduate from Government College University, Lahore. I’m passionate about building interactive, user-focused applications and currently working on my final year project, an indoor augmented reality navigation app. My technical strengths span full-stack development, mobile app development, and database systems.             </p>



                    <p className="text-lg mb-8">
                        Beyond development, I love mentoring and leading teams. As a Microsoft Learn Student Ambassador and Graphics Lead at GCU-MLSA, I’ve hosted AI webinars and managed creative campaigns. I'm also Senior Vice President of the Peace Society, where I promote interfaith harmony and cultural understanding.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Technologies I Use</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Flutter & Dart</li>
                        <li>Node.js</li>
                        <li>Microsoft SQL Server</li>
                        <li>HTML, CSS, JavaScript</li>
                        <li>Selenium</li>
                        <li>Python, C++, Java</li>
                        <li>Unity & AR Foundation</li>
                    </ul>
                </div>
            </main>
        </>
    )
}
