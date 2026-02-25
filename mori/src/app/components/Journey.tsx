import { motion } from "motion/react";
import { Download } from "lucide-react";

export function Journey() {
  const metrics = [
    { value: "14", label: "Launched products" },
    { value: "7", label: "Brand collaborations" },
    { value: "40+", label: "Users interviewed" },
    { value: "5+", label: "Years of experience" }
  ];

  const timeline = [
    { 
      year: "2025", 
      title: "Led UX for Enterprise Platform", 
      company: "Luma Health",
      description: "Designed internal tools and AI automation that reduced customer go-live time by 20%-30%, turning weeks-long setup steps into hours. Built payer mapping, form testing, self-serve integration flows, dashboards, and led a full overhaul of complex settings.",
      color: "#FF6B35"
    },
    { 
      year: "2024", 
      title: "Enhanced Accessibility and Design Consistency", 
      company: "Santander (Accenture Client)",
      description: "Collaborated with cross-functional squads to implement the Global Design System in Brazil. Improved information architecture and user experience for the Santander app, and led the creation of a white-label accessibility guide recognized internally as a best-practice reference.",
      color: "#dc121a"
    },
    { 
      year: "2023", 
      title: "Designed key website sections and conducted usability tests", 
      company: "Nubank (Accenture Client)",
      description: "Designed multiple core pages and conducted usability tests that guided the work of 15+ designers. Delivered a cohesive navigation structure and improved content alignment, shaping a stronger foundation for the product's next phase.",
      color: "#820ad1"
    },
    { 
      year: "2022", 
      title: "Redesigned the whole acquisition experience for Vivo", 
      company: "Vivo (Accenture Client)",
      description: "Partnered with Vivo's design lead to merge 7 fragmented checkout flows into a single, scalable experience. The new journey streamlined the purchase process for digital services and improved business efficiency with automation and consistency.",
      color: "#660099"
    },
    { 
      year: "2021", 
      title: "Joined Accenture and Launched a B2B SaaS Portal", 
      company: "Vivo (Accenture Client)",
      description: "Joined Accenture's design team and delivered a new B2B SaaS portal for Vivo, enabling clients to explore and manage enterprise service solutions with improved usability and scalability.",
      color: "#660099"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-black text-white px-8 md:px-16 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header - Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32"
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
              JOURNEY
            </div>
          </div>
          <div className="md:col-span-11">
            <h2
              className="mb-8"
              style={{
                fontFamily: 'Recoleta, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Career moments that shaped me
            </h2>
            <p
              className="max-w-2xl border-l-2 border-gray-900 pl-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                letterSpacing: '0.01em',
                color: '#aaaaaa'
              }}
            >
              The kind of work that changed how I think, not just what I make.
            </p>
          </div>
        </motion.div>

        {/* Metrics - Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20 pb-6 md:pb-20 border-b border-gray-900"
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-11 grid grid-cols-2 md:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    fontWeight: 500,
                    lineHeight: 1
                  }}
                >
                  {metric.value}
                </div>
                <div
                  className="uppercase tracking-wider text-[#aaaaaa]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em'
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline - Magazine Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-12 md:space-y-16 mb-12 md:mb-24"
        >
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item-${index} grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-gray-900 last:border-0 group`}
            >
              <style>
                {`
                  .timeline-item-${index}:hover .timeline-year-${index},
                  .timeline-item-${index}:hover .timeline-company-${index} {
                    color: ${item.color} !important;
                  }
                `}
              </style>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-2">
                <div
                  className={`timeline-year-${index} transition-colors duration-500`}
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: 'rgb(107, 114, 128)'
                  }}
                >
                  {item.year}
                </div>
              </div>
              <div className="md:col-span-9">
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.title}
                </h3>
                {item.company && (
                  <p
                    className={`timeline-company-${index} mb-4 uppercase tracking-wider transition-colors duration-500`}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      color: 'rgb(75, 85, 99)'
                    }}
                  >
                    {item.company}
                  </p>
                )}
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    lineHeight: 1.7
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Download Resume Button - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-1"></div>
          <div className="md:col-span-11">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-[#464646] hover:border-gray-400 text-gray-400 hover:text-white transition-all duration-300 group rounded-[48px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.05em'
              }}
            >
              <Download size={18} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span className="uppercase">Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}