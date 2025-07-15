import Navbar from '/components/navbar.js'

export default function Contact() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black text-white px-6 py-16">
                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-10 text-blue-400">Contact Me</h1>

                    <p className="text-lg mb-6">
                        I'd love to connect! Feel free to reach out to me via any of the platforms below.
                    </p>

                    <div className="space-y-4 text-lg">
                        <p>
                            <span className="font-semibold text-white">Email:</span>{' '}
                            <a
                                href="mailto:peacechristina32@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                peacechristina32@gmail.com
                            </a>
                        </p>

                        <p>
                            <span className="font-semibold text-white">LinkedIn:</span>{' '}
                            <a
                                href="https://www.linkedin.com/in/christina-peace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                linkedin.com/in/christina-peace
                            </a>
                        </p>

                        <p>
                            <span className="font-semibold text-white">GitHub:</span>{' '}
                            <a
                                href="https://github.com/Chrisstinaa7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                github.com/Chrisstinaa7
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
