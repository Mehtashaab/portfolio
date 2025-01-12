import Link from 'next/link';

export default function Resume() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-5xl font-extrabold text-black-800 mb-4 text-center tracking-tight">
          My Resume
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Explore my professional journey, skills, and achievements. Download the full resume to dive deeper into my experience and capabilities.
        </p>

        {/* Content Section */}
        <div className="flex flex-col items-center space-y-8">
          {/* Animated Highlight Box */}
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              Highlights of My Career
            </h3>
            <ul className="space-y-4 text-gray-600 text-lg list-disc list-inside">
              <li>Proficient in backend and full-stack development.</li>
              <li>Hands-on experience with Python, Django, JavaScript, and Express.js.</li>
              <li>Skilled in creating scalable APIs and efficient database designs.</li>
              <li>Strong understanding of cloud-based architectures and DevOps practices.</li>
              <li>Proven ability to thrive in dynamic and collaborative environments.</li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="relative">
            <Link href="/Abhishek_resume.pdf" passHref legacyBehavior>
              <a
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105 transition duration-300 flex items-center gap-2"
                download
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4-4m0 0l4 4m-4-4v12M20 12l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </a>
            </Link>
            <p className="text-sm text-gray-500 mt-3 text-center">
              File format: PDF | Updated regularly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
