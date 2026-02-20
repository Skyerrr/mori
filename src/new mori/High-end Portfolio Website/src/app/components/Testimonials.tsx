import { motion } from "motion/react";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at Luma Health",
      text: "Tav has an extraordinary ability to translate complex healthcare workflows into intuitive experiences. Their work on our AI matching system didn't just solve a problem—it redefined how we think about user-centered automation.",
      avatar: "SC",
      brandColor: "#FF6B35"
    },
    {
      name: "Marcus Silva",
      role: "Design Lead at Vivo",
      text: "Working with Tav on the acquisition flow was transformative. They brought strategic thinking and empathy in equal measure, turning a fragmented experience into something seamless and elegant.",
      avatar: "MS",
      brandColor: "#660099"
    },
    {
      name: "Elena Rodriguez",
      role: "UX Researcher at Nubank",
      text: "Tav's design work is grounded in research but elevated by storytelling. They don't just design interfaces—they craft narratives that guide users naturally through complex systems.",
      avatar: "ER",
      brandColor: "#820ad1"
    },
    {
      name: "David Park",
      role: "Engineering Manager at Santander",
      text: "Rare to find a designer who balances accessibility, consistency, and innovation so well. Tav's attention to detail and collaborative spirit made our partnership incredibly productive.",
      avatar: "DP",
      brandColor: "#dc121a"
    }
  ];

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
                color: '#777'
              }}
            >
              REVIEWS
            </div>
          </div>
          <div className="md:col-span-11">
            <h2
              className="mb-4 md:mb-8"
              style={{
                fontFamily: 'Playfair Display, serif',
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
                color: '#999'
              }}
            >
              Reflections from those I've designed, built, and learned with.
            </p>
          </div>
        </motion.div>

        {/* Scrollable testimonials - Editorial cards */}
        <div className="grid md:grid-cols-12 gap-8 mb-6 md:mb-8 testimonials-cards-wrapper">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-11 flex flex-col testimonials-cards-container">
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-6 snap-x snap-mandatory scrollbar-hide testimonials-scroll"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`testimonial-card-${index} p-6 border border-gray-900 bg-transparent backdrop-blur-sm snap-start hover:border-gray-700 transition-colors duration-500 flex flex-col md:h-full group`}
                  style={{
                    minWidth: 'calc(100vw - 6.5rem)',
                    maxWidth: 'calc(100vw - 6.5rem)',
                    padding: '1.5rem'
                  }}
                >
                  <style>
                    {`
                      @media (min-width: 768px) {
                        .testimonial-card-${index} {
                          min-width: clamp(280px, 28vw, 520px) !important;
                          max-width: clamp(280px, 28vw, 520px) !important;
                          padding: clamp(1.5rem, 2.5vw, 3rem) !important;
                          min-height: 0 !important;
                        }
                      }
                      .testimonial-card-${index}:hover .testimonial-role-${index} {
                        color: ${testimonial.brandColor} !important;
                      }
                    `}
                  </style>
                  {/* Quote mark */}
                  <div 
                    className="text-gray-800 flex-shrink-0"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                      lineHeight: 1,
                      marginBottom: 'clamp(0.75rem, 1.5vw, 2rem)'
                    }}
                  >
                    "
                  </div>

                  <p
                    className="text-gray-400 leading-relaxed flex-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
                      lineHeight: 1.7,
                      letterSpacing: '0.01em',
                      marginBottom: 'clamp(1rem, 1.8vw, 2rem)'
                    }}
                  >
                    {testimonial.text}
                  </p>

                  <div className="border-t border-gray-900 flex-shrink-0" style={{ paddingTop: 'clamp(0.75rem, 1.5vw, 2rem)' }}>
                    <div
                      className="text-white mb-1"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '0.9rem'
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`testimonial-role-${index} text-gray-600 uppercase tracking-wider transition-colors duration-500`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
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
              className="inline-flex items-center gap-3 px-6 py-3 border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white transition-all duration-300 group"
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