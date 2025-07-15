import Navbar from '/components/navbar.js'
import Footer from '/components/footer.js'
import Image from 'next/image'
import {
    Code,
    Database,
    MonitorSmartphone,
    Cloud,
    Cpu,
    Terminal,
} from 'lucide-react'

export default function About() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black text-white px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <h1 className="text-4xl font-bold mb-12 text-purple-400 pl-[250px]">
                        About Me
                    </h1>


                    {/* Flex Row: Bio + Image */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        {/* Left: Text */}
                        <div className="md:w-2/3 text-lg space-y-8">
                            <p>
                                I&apos;m <span className="font-semibold text-purple-300">Christina Peace</span>, a Computer Science graduate from Government College University, Lahore. I’m passionate about building interactive, user-focused applications and currently working on my final year project an indoor AR navigation app using augmented reality.
                            </p>

                            <p>I have a deep love for technology and enjoy exploring emerging tools and frameworks. Whether it's diving into a new JavaScript library, experimenting with mobile app development, or learning about the latest in AI, I’m always curious and eager to expand my skill set.</p>

                            <p>
                                My technical strengths span full-stack development, mobile app development, and database systems. I love mentoring and leading teams. As a <span className="text-purple-300 font-medium">Microsoft Learn Student Ambassador</span> and Graphics Lead at GCU-MLSA, I’ve hosted AI webinars and led creative campaigns.
                            </p>

                            <p>
                                Besides my passion for technology, I also served as the <span className="text-purple-300 font-medium">Senior Vice President</span> of the Peace Society, promoting interfaith harmony and cultural understanding. I believe that empathy, communication, and collaboration are just as important as technical skills in today’s world.
                            </p>
                        </div>


                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-90 h-90 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                                <Image
                                    src="/About.jpg"
                                    alt="Christina Peace"
                                    width={356}
                                    height={356}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="mt-24 pt-12 border-t border-gray-700">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-400">
                            Technologies I Use
                        </h2>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-lg max-w-2xl mx-auto text-center">
                            <li className="flex items-center justify-center gap-2">
                                <Code size={20} className="text-purple-400" /> React.js
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Code size={20} className="text-purple-400" /> Python, Selenium, C++, Java
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <MonitorSmartphone size={20} className="text-purple-400" /> Node.js
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Terminal size={20} className="text-purple-400" /> Flutter, Dart, Firebase
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Database size={20} className="text-purple-400" /> SQL Server
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Cloud size={20} className="text-purple-400" /> HTML, CSS, JavaScript
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Cpu size={20} className="text-purple-400" /> Next.js
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <MonitorSmartphone size={20} className="text-purple-400" /> Unity & AR Foundation
                            </li>
                        </ul>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    )
}
