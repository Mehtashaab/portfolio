import Image from 'next/image';
import profilePic from '../../public/profile.jpg';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-white via-purple-100 to-pink-100 text-black-700 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="bg-radial-gradient absolute w-[500px] h-[500px] bg-opacity-30 rounded-full blur-3xl -top-20 -left-40"></div>
        <div className="bg-radial-gradient absolute w-[400px] h-[400px] bg-opacity-20 rounded-full blur-3xl top-40 right-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 text-center">
        {/* Profile Section */}
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white-700 mb-8">
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-blue-500">Abhishek Mehta</span>
        </h1>
        <p className="text-lg md:text-xl text-black-600 max-w-2xl mb-6">
        As a dedicated software developer with a strong foundation in backend and full-stack development, I bring expertise in building scalable and efficient web applications. Currently I have been working as a MERN Stack Developer, sharpening my skills in dynamic and challenging environments.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <Link
            href="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="bg-gray-100 hover:bg-gray-200 text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-black-700">My Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 text-center">
            {[{
              icon: 'devicon-javascript-plain',
              color: 'text-yellow-500',
              name: 'JavaScript',
              animation: 'group-hover:animate-popUp'
            }, {
              icon: 'devicon-react-original',
              color: 'text-blue-400',
              name: 'React',
              animation: 'group-hover:animate-slideIn'
            }, {
              icon: 'devicon-nodejs-plain-wordmark colored',
              color: 'text-green-600',
              name: 'Node.js',
              animation: 'group-hover:animate-bounce'
            }, {
              icon: 'devicon-django-plain',
              color: 'text-green-500',
              name: 'Django',
              animation: 'group-hover:animate-float'
            }, {
              icon: 'devicon-python-plain',
              color: 'text-blue-500',
              name: 'Python',
              animation: 'group-hover:animate-zoomIn'
            }, {
              icon: 'devicon-mongodb-plain',
              color: 'text-green-400',
              name: 'MongoDB',
              animation: 'group-hover:animate-shake'
            }, {
              icon: 'devicon-tailwindcss-plain',
              color: 'text-blue-300',
              name: 'Tailwind CSS',
              animation: 'group-hover:animate-rotate'
            }, {
              icon: 'devicon-nextjs-plain colored',
              color: 'text-black',
              name: 'Next.js',
              animation: 'group-hover:animate-popUp'
            }, {
              icon: 'devicon-docker-plain',
              color: 'text-blue-500',
              name: 'Docker',
              animation: 'group-hover:animate-slideIn'
            }, {
              icon: 'devicon-postgresql-plain',
              color: 'text-blue-400',
              name: 'PostgreSQL',
              animation: 'group-hover:animate-zoomIn'
            }, {
                icon: 'devicon-nginx-original',
                color: 'text-green-500',
                name: 'Nginx',
                animation: 'group-hover:animate-float'
              }, {
                icon: 'devicon-html5-plain',
                color: 'text-orange-500',
                name: 'HTML5',
                animation: 'group-hover:animate-bounce'
              }, {
                icon: 'devicon-git-plain',
                color: 'text-red-500',
                name: 'Git',
                animation: 'group-hover:animate-shake'
              }, {
                icon: 'devicon-postman-plain',
                color: 'text-orange-400',
                name: 'Postman',
                animation: 'group-hover:animate-rotate'
              }, {
                icon: 'devicon-typescript-plain',
                color: 'text-blue-500',
                name: 'TypeScript',
                animation: 'group-hover:animate-slideIn'
              
            }].map((tech, index) => (
              <div key={index} className="group">
                <i
                  className={`${tech.icon} ${tech.color} text-5xl ${tech.animation}`}
                ></i>
                <p className="mt-2 text-black-600 text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-10">
          <a
            href="https://linkedin.com/in/abhishek-mehta-0724ab256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mehtashaab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 hover:text-blue-800 text-2xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/AbhishekMeh_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
