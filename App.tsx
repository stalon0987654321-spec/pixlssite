
import React, { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';
import Button from './components/Button';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import WorkPage from './pages/CasesPage';
import FAQPage from './pages/FAQPage';
import GlitchText from './components/GlitchText';
import { PageName } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: PageName) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    navigate('home');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage navigate={navigate} />;
      case 'contact': return <ContactPage />;
      case 'work': return <WorkPage navigate={navigate} />;
      case 'faq': return <FAQPage />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="font-sans text-black selection:bg-black selection:text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-black">
        {/* Logo - Clicks to Home and Closes Menu */}
        <div
          onClick={handleLogoClick}
          className="text-3xl md:text-4xl font-black tracking-tighter uppercase cursor-pointer z-50 relative leading-none mix-blend-difference text-white"
        >
          Pixls
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="z-50 relative flex items-center gap-2 group focus:outline-none mix-blend-difference text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
             <X className="w-8 h-8 transition-transform rotate-90 duration-300" /> 
          ) : (
             <Menu className="w-8 h-8 hover:scale-110 transition-transform" />
          )}
        </button>
      </header>

      {/* Menu Overlay - Full Screen Black */}
      <div className={`fixed inset-0 bg-black text-white z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center items-center`}>
        <nav className="flex flex-col gap-2 text-center w-full max-w-xl px-6">
          {/* Group 1: Bold & Large (WORK, BLOG) - Removed HOME as per snippet */}
          {[
            { label: 'WORK', id: 'work' },
            { label: 'BLOG', id: 'blog' }
          ].map((item) => (
             <GlitchText 
                key={item.label} 
                text={item.label}
                onClick={() => navigate(item.id as PageName)}
                className={`
                  uppercase tracking-tighter mb-2
                  text-6xl md:text-8xl font-black 
                `}
              />
          ))}

          {/* Spacer */}
          <div className="h-8"></div>

          {/* Group 2: About, FAQ, Contact (Smaller Font Size) */}
          {[
            { label: 'ABOUT', id: 'about' },
            { label: 'FAQ', id: 'faq' },
            { label: 'CONTACT', id: 'contact' }
          ].map((item) => (
             <GlitchText 
                key={item.label} 
                text={item.label}
                onClick={() => navigate(item.id as PageName)}
                className={`
                  uppercase tracking-tighter mb-2
                  text-2xl md:text-4xl font-black
                `}
              />
          ))}
        </nav>
        
        {/* Menu Footer Info */}
        <div className="absolute bottom-12 w-full px-12 flex justify-between text-xs font-bold text-gray-600 uppercase tracking-widest hidden md:flex">
             <span>Pixls Web Solution</span>
             <span>Based in Mumbai,Borivali</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Let's create<br/>something great.</h2>
              {currentPage !== 'contact' && (
                <Button variant="white" onClick={() => navigate('contact')}>Start a Project</Button>
              )}
            </div>
            <div className="flex flex-col gap-4 text-right">
              <span className="text-gray-400 text-sm">Follow Us</span>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/pixlswebsolution?igsh=cDc2Ym11ZDk0MHlp" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/vinitsingh3105" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* Replaced Twitter with Portfolio (User) and Company Site (Globe). */}
                <a href="https://vinit-singh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" title="Personal Portfolio">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <title>Personal Portfolio</title>
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </a>
                <a href="https://www.pixlswebsolution.store/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" title="Company Website">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <title>Company Website</title>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/people/Pixls-Web-Soln/61567271905269/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500 font-medium">
            <div className="mb-4 md:mb-0">
              © 2024 Pixls Web Solution. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Glitch Text Styles --- */
        .glitch-wrapper {
          position: relative;
          display: inline-block;
          color: #6b7280; 
          font-weight: 900;
          transition: color 0.2s ease;
        }
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        .glitch-wrapper:hover {
          color: #ef4444; 
        }
        .glitch-wrapper:hover::before {
          left: 2px;
          clip-path: inset(44% 0 61% 0); 
          animation: glitch-anim-1 0.8s infinite linear alternate-reverse;
          opacity: 1;
        }
        .glitch-wrapper:hover::after {
          left: -2px;
          clip-path: inset(50% 0 30% 0);
          animation: glitch-anim-2 0.8s infinite linear alternate-reverse;
          opacity: 1;
        }
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          40% { clip-path: inset(40% 0 50% 0); }
          60% { clip-path: inset(80% 0 5% 0); }
          80% { clip-path: inset(10% 0 70% 0); }
          100% { clip-path: inset(30% 0 50% 0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); }
          20% { clip-path: inset(30% 0 20% 0); }
          40% { clip-path: inset(70% 0 10% 0); }
          60% { clip-path: inset(50% 0 80% 0); }
          80% { clip-path: inset(90% 0 5% 0); }
          100% { clip-path: inset(15% 0 45% 0); }
        }
      `}</style>
    </div>
  );
}
