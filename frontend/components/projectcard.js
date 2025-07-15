import Image from 'next/image'

export default function ProjectCard({ title, description, tools, github, image }) {
    return (
        <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

            {image && (
                <div className="w-full h-[160px] relative">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
                    />
                </div>
            )}

            <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                <p className="text-sm text-gray-700 mb-2">{description}</p>
                <p className="text-sm text-gray-600 italic mb-4">{tools}</p>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View on GitHub →
                </a>
            </div>
        </div>
    )
}
