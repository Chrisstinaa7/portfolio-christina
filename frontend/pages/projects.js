import Navbar from '/components/navbar.js'
import ProjectCard from '/components/projectcard.js'
import Footer from '/components/footer.js'

export default function Projects() {
    const projects = [
        {
            title: 'Amusement Park Ride Management System',
            description: 'A database-driven system designed to efficiently manage ride operations, queue handling, and ticketing in amusement parks.',
            tools: 'SQL Server, ERD Modeling, Stored Procedures',
            github: 'https://github.com/Chrisstinaa7/Amusement-Park',
            image: '/park.png',
        },
        {
            title: 'FitFusion',
            description: 'A modern, fully responsive landing page for a fictional gym brand showcasing classes, testimonials, and CTA sections.',
            tools: 'React.js, CSS',
            github: 'https://github.com/Chrisstinaa7/FitFusion',
            image: '/gym.png',
        },
        {
            title: 'AdventureHub',
            description: 'A mobile application designed to help users explore, plan, and book trips across Northern Pakistan with travel guides and curated routes.',
            tools: 'Flutter, Dart, UI/UX Design',
            github: 'https://github.com/Chrisstinaa7/AdventureHub',
            image: '/dog.png',
        },
    ]


    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-black text-white px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-10 text-center text-white-400">My Projects</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((proj, idx) => (
                            <ProjectCard
                                key={idx}
                                title={proj.title}
                                description={proj.description}
                                tools={proj.tools}
                                github={proj.github}
                                image={proj.image}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
