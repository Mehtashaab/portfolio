import Link from 'next/link';

const projects = [
  {
    title: 'Trendy Toes',
    description: 'An eCommerce website for shoes built using Django.',
    technologies: ['Django', 'HTML', 'CSS'],
    link: 'https://github.com/Mehtashaab/TrendyToes',
  },
  {
    title: 'CRUD with Authentication',
    description: 'A fully functional CRUD app with authentication in Node.js/Express.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/Mehtashaab/CRUD-in-Express',
  },
  {
    title: 'React Blog App',
    description: 'A blog app using ReactJS with a backend powered by Appwrite (BaaS).',
    technologies: ['React', 'Appwrite', 'Tailwind CSS'],
    link: 'https://github.com/Mehtashaab/reactBlogApp',
  },
  {
    title: 'Subscription Model with Stripe',
    description: 'A subscription model integrated with Stripe, built using Express and React.',
    technologies: ['Stripe', 'React', 'Express'],
    link: 'https://github.com/Mehtashaab/PaymentGatwayIntegration',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <div className="flex justify-end">
                  <Link
                    href={project.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm font-semibold transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 