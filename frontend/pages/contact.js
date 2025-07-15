import Navbar from '/components/navbar.js'
import Footer from '/components/footer.js'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
    return (
        <>
            <Navbar />

            <main
                className="min-h-screen bg-black bg-[url('/last.jpg')] bg-cover bg-center text-white px-6 py-16"
            >

                <div className="mt-10 max-w-xl mx-auto text-center border border-gray-700 rounded-xl p-8 shadow-lg bg-gray-900 bg-opacity-90">

                    <h1 className="text-4xl font-bold mb-6 text-white-400">Let&apos;s Connect</h1>

                    <p className="text-lg text-gray-300 mb-8">
                        Whether you&apos;re interested in collaborating, have a question, or just want to say hi. I&apos;d love to hear from you!
                    </p>

                    <div className="space-y-6 text-left text-lg">
                        <div className="flex items-center gap-4">
                            <Mail className="text-white-400" size={20} />
                            <a
                                href="mailto:peacechristina32@gmail.com"
                                className="text-white-400 hover:underline break-all"
                            >
                                peacechristina32@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <Linkedin className="text-white-400" size={20} />
                            <a
                                href="https://www.linkedin.com/in/christina-peace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-400 hover:underline"
                            >
                                linkedin.com/in/christina-peace
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <Github className="text-white-400" size={20} />
                            <a
                                href="https://github.com/Chrisstinaa7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-400 hover:underline"
                            >
                                github.com/Chrisstinaa7
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
