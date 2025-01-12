import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Abhishek Mehta | Portfolio',
  description: 'Software Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Import Devicon CSS for tech stack icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
