import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-black-800 mb-4 tracking-tight">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you want to discuss a project, have a collaboration idea, or just say hi,
            I’d love to hear from you. Drop me a message below!
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Info Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-6">
              Feel free to email me or connect with me on my social platforms.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong> mehtaabhishek.dev@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +91 8580615737
              </li>
              <li>
                <strong>Location:</strong> Chandigarh, India
              </li>
            </ul>
            {/* LinkedIn Icon */}
            <div className="mt-6">
              <a
                href="https://linkedin.com/in/abhishek-mehta-0724ab256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition text-lg font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.28c-.966 0-1.75-.79-1.75-1.72 0-.93.784-1.72 1.75-1.72s1.75.79 1.75 1.72c0 .93-.784 1.72-1.75 1.72zm13.5 12.28h-3v-5.56c0-1.33-.472-2.23-1.652-2.23-.9 0-1.432.61-1.67 1.2-.086.21-.108.5-.108.79v5.8h-3v-11h3v1.56c.4-.6 1.115-1.46 2.7-1.46 1.97 0 3.45 1.27 3.45 4v6.9z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-radial-gradient w-[300px] h-[300px] bg-blue-400 bg-opacity-20 rounded-full blur-3xl absolute top-10 left-10"></div>
        <div className="bg-radial-gradient w-[400px] h-[400px] bg-pink-400 bg-opacity-20 rounded-full blur-3xl absolute bottom-20 right-10"></div>
      </div>
    </section>
  );
}
