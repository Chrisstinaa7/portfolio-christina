import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Name */}
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        Christina Peace
                    </Link>

                    {/* Links */}
                    <div className="space-x-4">
                        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
                        <Link href="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
