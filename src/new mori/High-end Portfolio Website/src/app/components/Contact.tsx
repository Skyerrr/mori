import { motion } from "motion/react";
import { MapPin, Download, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black text-white px-8 md:px-16 py-16 md:py-32 flex items-center border-t border-gray-900">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Label */}
          <div className="md:col-span-1">
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11.2px',
                letterSpacing: '1.68px',
                color: '#777'
              }}
            >
              CONTACT
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-11">
            {/* Title */}
            <h2
              className="mb-8 md:mb-12"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3.5rem, 10vw, 8.4375rem)',
                fontWeight: 500,
                lineHeight: 1.07,
                letterSpacing: '-3.36px'
              }}
            >
              Let's connect
            </h2>

            {/* Content Container - Relative positioning for absolute children */}
            <div className="relative">
              {/* Left Column - Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[740px]"
              >
                {/* Paragraph */}
                <p
                  className="mb-6 md:mb-12 md:border-l-2 md:border-[#101828] md:pl-6"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '0.176px',
                    color: '#aaa'
                  }}
                >
                  I like to think good design starts with curiosity. If you felt any of that here, I think we should talk.
                </p>

                {/* Email */}
                <motion.a
                  href="mailto:rodrigotavr@gmail.com"
                  whileHover={{ x: 4 }}
                  className="inline-block mb-6 md:mb-4 text-white hover:text-gray-400 transition-colors duration-300 border-b border-[#1e2939] hover:border-gray-600 pb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '28px',
                    fontWeight: 500,
                    lineHeight: '42px',
                    letterSpacing: '-0.28px'
                  }}
                >
                  rodrigotavr@gmail.com
                </motion.a>

                {/* Contact Label - Hidden on mobile */}
                <div
                  className="hidden md:block mb-10"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.6px',
                    letterSpacing: '0.768px',
                    color: '#666'
                  }}
                >
                  CONTACT—PRIMARY / VERIFIED
                </div>

                {/* Location - Hidden on mobile, shown on desktop */}
                <div className="hidden md:flex items-center gap-3 pt-[13px] border-t border-[#101828]">
                  <MapPin size={16} style={{ color: '#4A5565' }} aria-hidden="true" />
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13.6px',
                      letterSpacing: '0.68px',
                      textTransform: 'uppercase',
                      color: '#888'
                    }}
                  >
                    BRAZIL — COPACABANA
                  </span>
                  <span
                    className="hidden sm:inline"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9.6px',
                      letterSpacing: '0.768px',
                      color: '#666'
                    }}
                  >
                    22.9711°S / 43.1822°W
                  </span>
                </div>
              </motion.div>

              {/* Right Column - Footer Info (Absolute positioned) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-0 top-0 hidden md:block"
                style={{ width: '300px' }}
              >
                <div className="flex flex-col gap-6 h-full justify-end" style={{ minHeight: '294px' }}>
                  {/* Main Portfolio Label */}
                  <div className="pb-0">
                    <div
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '24px',
                        lineHeight: '24px',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        color: '#999'
                      }}
                    >
                      Tav
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-3 pt-6 border-t border-[#101828]">
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      DESIGNED & BUILT BY TAV
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      TYPEFACES: PLAYFAIR DISPLAY / INTER
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      BUILD: FEB.12.2026
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      VERSION: 1.2.0
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Resume and LinkedIn - Absolutely positioned 16px above location divider */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute hidden md:flex items-center"
                style={{
                  left: '583.67px',
                  bottom: '46px',
                  gap: '24px'
                }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="text-[#666] hover:text-white transition-colors duration-300 flex items-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.6px',
                    letterSpacing: '0.768px',
                    gap: '8px'
                  }}
                >
                  <Download size={12} style={{ strokeWidth: 1 }} aria-hidden="true" />
                  <span>RESUME</span>
                </a>

                <a
                  href="https://linkedin.com/in/tav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666] hover:text-white transition-colors duration-300 flex items-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.6px',
                    letterSpacing: '0.768px',
                    gap: '8px'
                  }}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={12} style={{ strokeWidth: 1 }} aria-hidden="true" />
                  <span>LINKEDIN</span>
                </a>
              </motion.div>

              {/* Mobile fallback for Colophon and Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:hidden mt-12"
              >
                {/* Colophon - Vem antes da location */}
                <div className="mb-6">
                  <div
                    className="mb-4"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '24px',
                      lineHeight: '24px',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: '#999'
                    }}
                  >
                    Tav
                  </div>
                  <div className="space-y-2 mb-5">
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      DESIGNED & BUILT BY TAV
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      TYPEFACES: PLAYFAIR DISPLAY / INTER
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      BUILD: FEB.12.2026
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px',
                        color: '#666'
                      }}
                    >
                      VERSION: 1.2.0
                    </div>
                  </div>
                  
                  {/* Links integrados após metadata */}
                  <div className="flex gap-6 items-center">
                    <a
                      href="/resume.pdf"
                      download
                      className="text-[#666] hover:text-white transition-colors duration-300 flex items-center gap-2"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px'
                      }}
                    >
                      <Download size={12} aria-hidden="true" />
                      <span>RESUME</span>
                    </a>

                    <a
                      href="https://linkedin.com/in/tav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#666] hover:text-white transition-colors duration-300 flex items-center gap-2"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9.6px',
                        letterSpacing: '0.768px'
                      }}
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin size={12} aria-hidden="true" />
                      <span>LINKEDIN</span>
                    </a>
                  </div>
                </div>

                {/* Location - Agora no final com border-top */}
                <div className="flex flex-col gap-3 pt-4 border-t border-[#101828]">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} style={{ color: '#4A5565' }} aria-hidden="true" />
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13.6px',
                        letterSpacing: '0.68px',
                        textTransform: 'uppercase',
                        color: '#888'
                      }}
                    >
                      BRAZIL — COPACABANA
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9.6px',
                      letterSpacing: '0.768px',
                      color: '#666'
                    }}
                  >
                    22.9711°S / 43.1822°W
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}