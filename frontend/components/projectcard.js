// components/ProjectCard.js
export default function ProjectCard({ title, description, tools, github }) {
    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>

            <p className="text-sm mb-3">
                <span className="font-medium text-white">Tools:</span> {tools}
            </p>

            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                >
                    View on GitHub →
                </a>
            )}
        </div>
    )
}
