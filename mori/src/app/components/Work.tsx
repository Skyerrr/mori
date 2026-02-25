import { motion } from "motion/react";
import { CaseCard } from "./CaseCard";
import { VivoCaseCard } from "./VivoCaseCard";
import { AICaseCard } from "./AICaseCard";
import { EditorialMargins } from "./EditorialMargins";

export function Work() {
  const vivoCase = {
    title: "Unifying Product Acquisition Flow",
    tags: ["Telecom", "B2C SaaS", "Enterprise", "iOS", "Product Design", "End-to-End"],
    metrics: [
      { label: "Flows unified", value: "x7" },
      { label: "Designers project", value: "15" },
      { label: "Usability score", value: "87" }
    ],
    accentColor: 'purple' as const,
    caseNumber: "01",
    metadata: "VIVO—ACQ, 2022",
    period: "Q4 2022"
  };

  const lumaCase = {
    title: "AI Eligibility Payer Matching",
    tags: ["Health Tech", "Enterprise SaaS", "Startup", "Desktop", "Product Design", "AI automation"],
    metrics: [
      { label: "Faster", value: "x5" },
      { label: "Accuracy", value: "95%" },
      { label: "Training needed", value: "0" }
    ],
    accentColor: 'orange' as const,
    caseNumber: "02",
    metadata: "LUMA—AI, 2025",
    period: "Q1 2025"
  };

  return (
    <section id="work" className="min-h-screen bg-black text-white px-8 md:px-16 py-32 relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header - Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-12 gap-12 mb-16 md:mb-20"
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
              WORK
            </div>
          </div>
          <div className="md:col-span-7">
            <h2
              className="mb-6 whitespace-normal md:whitespace-nowrap"
              style={{
                fontFamily: 'Recoleta, serif',
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Some memorable cases that I love
            </h2>
            <p
              className="text-gray-500 border-l-2 border-gray-900 pl-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                letterSpacing: '0.01em',
                maxWidth: '600px',
                color: '#aaaaaa'
              }}
            >Grounded in research, guided by storytelling, built to feel natural.</p>
          </div>
          <div className="hidden md:flex md:col-span-4 flex-col items-end justify-between">
            
          </div>
        </motion.div>

        {/* Cases */}
        <div className="space-y-12 md:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <VivoCaseCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AICaseCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}