export default function Footer() {
    return (
        <footer className="bg-black text-gray-500 text-xs py-3 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Christina Peace. All rights reserved.</p>

                <div className="space-x-4 mt-2 sm:mt-0">
                    <a
                        href="https://github.com/Chrisstinaa7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/christina-peace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    )
}
