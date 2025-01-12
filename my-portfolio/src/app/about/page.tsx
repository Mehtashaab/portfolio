import { FaLinkedin, FaGithub } from "react-icons/fa"; // For LinkedIn and GitHub icons

export default function About() {
  return (
    <section className="py-20 bg-gray-100 text-center md:text-left">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Me</h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-8">
          I’m a dedicated software developer with a Master’s in Computer
          Applications from Chandigarh University, completed in 2024. With a
          specialization in backend development, I bring expertise in Python,
          JavaScript, and modern frameworks like Django and Express.js. My
          professional journey has been focused on building efficient, scalable,
          and user-friendly systems that solve real-world problems. Beyond
          coding, I have a strong interest in database management, API
          development, and cloud-based architectures, making me adept at
          designing robust and secure solutions. My experience as a MERN Stack
          Developer has honed my ability to work in dynamic, fast-paced
          environments, delivering high-quality results under tight deadlines. I
          am passionate about learning and staying updated with emerging
          technologies, continuously striving to improve my skills. Whether it’s
          exploring DevOps practices, diving into machine learning, or
          contributing to open-source projects, I am driven by the desire to
          grow and make a meaningful impact in the tech industry. Let’s
          collaborate to create innovative and scalable solutions that push the
          boundaries of what’s possible!
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhishek-mehta-0724ab256/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            <FaLinkedin className="mr-2" size={24} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mehtashaab/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            <FaGithub className="mr-2" size={24} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
