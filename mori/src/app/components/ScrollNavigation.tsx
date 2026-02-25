import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { scrollDirection, isAtTop };
}

export function ScrollNavigation() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const showNav = isAtTop || scrollDirection === 'up';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [scrollDirection]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start px-8 md:px-16 pt-6 md:pt-8 pb-4 md:pb-6 bg-black"
      >
        <div 
          className="tracking-wider text-white" 
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '0.2em'
          }}
        >
          TAV
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-12 items-start" style={{ fontFamily: 'Inter, sans-serif' }}>
          <a href="#work" className="hover:text-white transition-colors duration-300 text-sm tracking-wide" style={{ color: '#aaaaaa' }}>
            <span className="sr-only">Navigate to </span>01 — Work
          </a>
          <a href="#about" className="hover:text-white transition-colors duration-300 text-sm tracking-wide" style={{ color: '#aaaaaa' }}>
            <span className="sr-only">Navigate to </span>02 — About
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300 text-sm tracking-wide" style={{ color: '#aaaaaa' }}>
            <span className="sr-only">Navigate to </span>03 — Contact
          </a>
          <a href="#resume" className="hover:text-white transition-colors duration-300 text-sm tracking-wide" style={{ color: '#aaaaaa' }}>
            <span className="sr-only">Download </span>Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden hover:text-white transition-colors duration-300"
          style={{ color: '#aaaaaa' }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            style={{ paddingTop: '80px' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              <motion.a
                href="#work"
                onClick={handleLinkClick}
                className="text-gray-500 hover:text-white transition-colors duration-300 tracking-wide"
                style={{ fontSize: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                01 — Work
              </motion.a>
              <motion.a
                href="#about"
                onClick={handleLinkClick}
                className="text-gray-500 hover:text-white transition-colors duration-300 tracking-wide"
                style={{ fontSize: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                02 — About
              </motion.a>
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                className="text-gray-500 hover:text-white transition-colors duration-300 tracking-wide"
                style={{ fontSize: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                03 — Contact
              </motion.a>
              <motion.a
                href="#resume"
                onClick={handleLinkClick}
                className="text-gray-500 hover:text-white transition-colors duration-300 tracking-wide"
                style={{ fontSize: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}