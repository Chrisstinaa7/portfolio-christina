import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-black shadow-md sticky  top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Name */}
                    <Link href="/" className="text-xl font-bold text-white">
                        Christina Peace
                    </Link>

                    {/* Links */}
                    <div className="space-x-4">
                        <Link href="/" className="text-white hover:text-purple-400">Home</Link>
                        <Link href="/about" className="text-white hover:text-purple-400">About</Link>
                        <Link href="/projects" className="text-white hover:text-purple-400">Projects</Link>
                        <Link href="/contact" className="text-white hover:text-purple-400">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
