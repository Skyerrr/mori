import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Linkedin } from "lucide-react";
import avatarHalley from "figma:asset/3ed79af84658e1aed3ed916f7c13b28acb703c07.png";
import avatarGabby from "figma:asset/ecaacf1397f3c003f4b5b8a4771c8ae860314630.png";
import avatarRamon from "figma:asset/2a16798f1dc94d688cc0e32d4f3dd170063852d4.png";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Halley Rios",
      role: "Senior Frontend engineer",
      text: "I had the pleasure of working with Rodrigo on a complex feature that had to be delivered quickly under a tight deadline. He handled feedback from stakeholders, users, and engineers with ease, keeping everything on track without missing a beat. As a Software Engineer, I really appreciated how smooth our collaboration was — our exchanges were quick and efficient, and he guided me through complex workflows with clarity. Rodrigo made my job easier, and I felt confident in the quality of our work. I'd be glad to work with him again in the future.",
      avatar: avatarHalley,
      brandColor: "#FF6B35"
    },
    {
      name: "Gabrielle (Gabby) Dillon",
      role: "Product Manager at Luma Health",
      text: "I worked alongside Rodrigo for the last six months as a Product Manager at Luma Health. His designs made areas of our product easier to use, streamlining implementations and enabling customers and partners to be more self-sufficient. Rodrigo is an incredibly talented designer who is highly analytical, detail-oriented, and passionate about understanding every angle of the problem he's solving or the goal he's aiming to achieve through his designs. I really enjoyed working with Rodrigo and hope to have the opportunity to do so again.",
      avatar: avatarGabby,
      brandColor: "#FF6B35"
    },
    {
      name: "Ramon Rigoni",
      role: "Senior Frontend engineer",
      text: "I had the pleasure of working alongside Rodrigo for 6+ months, and I can confidently say he is an exceptional UI/UX and product designer. His ability to quickly grasp complex problems and ask the right questions made him an invaluable collaborator on our team.",
      avatar: avatarRamon,
      brandColor: "#FF6B35"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.3; // Pixels por frame - ajuste para mais devagar/rápido

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Quando chegar na metade (onde termina o primeiro set), volta ao início
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <section className="bg-black text-white px-8 md:px-16 flex flex-col testimonials-section">
      <div className="max-w-[1440px] mx-auto flex flex-col w-full testimonials-container">
        {/* Section Header - Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-12 flex-shrink-0"
        >
          <div className="md:col-span-1">
            <div
              className="text-gray-700 tracking-widest"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: '#aaaaaa'
              }}
            >
              REVIEWS
            </div>
          </div>
          <div className="md:col-span-11">
            <h2
              className="mb-4 md:mb-8"
              style={{
                fontFamily: 'Recoleta, serif',
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Peers & Clients reviews
            </h2>
            <p
              className="max-w-xs md:max-w-2xl border-l-2 border-gray-900 pl-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                letterSpacing: '0.01em',
                color: '#aaaaaa'
              }}
            >
              Reflections from those I've designed, built, and learned with.
            </p>
          </div>
        </motion.div>

        {/* Scrollable testimonials - Editorial cards */}
        <div className="grid md:grid-cols-12 gap-8 mb-6 md:mb-8 testimonials-cards-wrapper" style={{ marginTop: '1.5rem' }}>
          
          <div className="md:col-span-11 flex flex-col testimonials-cards-container">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="flex gap-4 md:gap-6 pb-4 md:pb-6 scrollbar-hide testimonials-scroll"
              style={{
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-x'
              }}
            >
              {/* Primeiro set de testimonials */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`testimonial-card-${index} rounded-[48px] flex flex-col group relative flex-shrink-0 transition-all duration-300`}
                  style={{
                    width: 'calc(100vw - 6.5rem)',
                    minHeight: 'auto',
                    padding: '2rem',
                    backgroundColor: 'transparent',
                    border: '2px solid #464646',
                    overflow: 'hidden'
                  }}
                >
                  <style>
                    {`
                      @media (min-width: 768px) {
                        .testimonial-card-${index} {
                          width: clamp(400px, 35vw, 600px) !important;
                          min-height: auto !important;
                          padding: clamp(2rem, 2.5vw, 3rem) !important;
                        }
                        .testimonial-card-${index}:hover {
                          border-color: #666666 !important;
                        }
                      }
                      @media (max-width: 767px) {
                        .testimonial-card-${index} {
                          min-height: auto !important;
                          padding: 1.5rem !important;
                        }
                      }
                    `}
                  </style>
                  
                  {/* Header with avatar and name */}
                  <div className="flex items-start gap-3 mb-4 flex-shrink-0">
                    <div 
                      className="rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        width: '56px',
                        height: '56px',
                        border: '2px solid #464646'
                      }}
                    >
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`testimonial-name-${index}`}
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            lineHeight: 1.3,
                            color: '#fff'
                          }}
                        >
                          {testimonial.name}
                        </h3>
                        <Linkedin 
                          size={16} 
                          className={`testimonial-linkedin-${index}`}
                          style={{ color: '#71717a', flexShrink: 0 }} 
                          aria-hidden="true" 
                        />
                      </div>
                      <p
                        className="uppercase tracking-wider"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          lineHeight: 1.4,
                          color: '#71717a'
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div 
                    className={`testimonial-divider-${index}`}
                    style={{
                      height: '1px',
                      width: '100%',
                      backgroundColor: '#71717a',
                      marginBottom: '1.25rem'
                    }}
                  />

                  {/* Testimonial text */}
                  <p
                    className="leading-relaxed flex-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(0.875rem, 1.1vw, 1.05rem)',
                      lineHeight: 1.45,
                      letterSpacing: '0.01em',
                      color: '#aaa'
                    }}
                  >
                    {testimonial.text}
                  </p>
                </motion.div>
              ))}
              
              {/* Segundo set de testimonials (duplicado para loop infinito) */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`testimonial-card-duplicate-${index} rounded-[48px] flex flex-col group relative flex-shrink-0 transition-all duration-300`}
                  style={{
                    width: 'calc(100vw - 6.5rem)',
                    minHeight: 'auto',
                    padding: '2rem',
                    backgroundColor: 'transparent',
                    border: '2px solid #464646',
                    overflow: 'hidden'
                  }}
                >
                  <style>
                    {`
                      @media (min-width: 768px) {
                        .testimonial-card-duplicate-${index} {
                          width: clamp(400px, 35vw, 600px) !important;
                          min-height: auto !important;
                          padding: clamp(2rem, 2.5vw, 3rem) !important;
                        }
                        .testimonial-card-duplicate-${index}:hover {
                          border-color: #666666 !important;
                        }
                      }
                      @media (max-width: 767px) {
                        .testimonial-card-duplicate-${index} {
                          min-height: auto !important;
                          padding: 1.5rem !important;
                        }
                      }
                    `}
                  </style>
                  
                  {/* Header with avatar and name */}
                  <div className="flex items-start gap-3 mb-4 flex-shrink-0">
                    <div 
                      className="rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        width: '56px',
                        height: '56px',
                        border: '2px solid #464646'
                      }}
                    >
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`testimonial-name-duplicate-${index}`}
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            lineHeight: 1.3,
                            color: '#fff'
                          }}
                        >
                          {testimonial.name}
                        </h3>
                        <Linkedin 
                          size={16} 
                          className={`testimonial-linkedin-duplicate-${index}`}
                          style={{ color: '#71717a', flexShrink: 0 }} 
                          aria-hidden="true" 
                        />
                      </div>
                      <p
                        className="uppercase tracking-wider"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          lineHeight: 1.4,
                          color: '#71717a'
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div 
                    className={`testimonial-divider-duplicate-${index}`}
                    style={{
                      height: '1px',
                      width: '100%',
                      backgroundColor: '#71717a',
                      marginBottom: '1.25rem'
                    }}
                  />

                  {/* Testimonial text */}
                  <p
                    className="leading-relaxed flex-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(0.875rem, 1.1vw, 1.05rem)',
                      lineHeight: 1.45,
                      letterSpacing: '0.01em',
                      color: '#aaa'
                    }}
                  >
                    {testimonial.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn Button - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-8 flex-shrink-0"
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-11">
            <a
              href="https://www.linkedin.com/in/rodrigo-tavares-ribeiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#464646] hover:border-gray-400 text-gray-400 hover:text-white transition-all duration-300 group rounded-[48px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.05em'
              }}
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span className="uppercase">View LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Telas pequenas: permite scroll vertical */
        @media (max-width: 767px) and (max-height: 767px) {
          .testimonials-section {
            min-height: 100vh;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
        
        /* Telas médias/grandes (768px+ de altura): cabe no viewport */
        @media (max-width: 767px) and (min-height: 768px) {
          .testimonials-section {
            height: calc(100vh - 60px);
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .testimonials-container {
            height: 100%;
          }
          .testimonials-cards-wrapper {
            flex: 1;
            overflow: hidden;
            min-height: 0;
          }
          .testimonials-cards-container {
            height: 100%;
            min-height: 0;
          }
          .testimonials-scroll {
            height: 100%;
          }
        }
        
        /* Desktop */
        @media (min-width: 768px) {
          .testimonials-section {
            height: calc(100vh - 80px);
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .testimonials-container {
            height: 100%;
          }
          .testimonials-cards-wrapper {
            flex: 1;
            overflow: hidden;
            min-height: 0;
          }
          .testimonials-cards-container {
            height: 100%;
            min-height: 0;
          }
          .testimonials-scroll {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
}