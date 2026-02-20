import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CaseCardProps {
  title: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: 'purple' | 'orange';
  side?: 'left' | 'right';
  caseNumber: string;
  metadata?: string;
  period?: string;
}

export function CaseCard({ title, tags, metrics, accentColor, side = 'left', caseNumber, metadata, period }: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const accentColorMap = {
    purple: '#660099',
    orange: '#FF6B35'
  };

  const currentAccentColor = accentColorMap[accentColor];

  // Handle keyboard interaction
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Future: navigate to case study detail page
      console.log(`Navigate to ${title} case study`);
    }
  };

  return (
    <motion.article
      role="article"
      tabIndex={0}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onKeyPress={handleKeyPress}
      className="relative overflow-hidden border-t border-b border-gray-900 transition-all duration-700 group cursor-pointer min-h-screen md:min-h-0"
      style={{
        backgroundColor: 'transparent'
      }}
      aria-label={`${title} case study. ${metadata}. Press Enter to view details.`}
    >
      <div className="grid md:grid-cols-12 gap-0 py-8 md:py-24 h-screen md:h-auto">
        {/* Case Number - Editorial Style - Always at col 1 */}
        <div className="hidden md:flex md:col-span-1 mb-4 md:mb-0 flex-col md:order-1">
          <div
            className="text-gray-700 transition-colors duration-500"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 400,
              lineHeight: 1,
              fontStyle: 'italic',
              color: isHovered ? currentAccentColor : '#777'
            }}
          >
            {caseNumber}
          </div>

          {/* Period Metadata - Desktop only */}
          {period && (
            <div
              className="text-gray-800"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#666'
              }}
            >
              {period}
            </div>
          )}
        </div>

        {/* Visual Side - Position based on side */}
        <div
          className={`md:col-span-4 px-0 md:px-8 flex items-center justify-center min-h-[180px] md:min-h-[300px] mt-0 md:mt-0 mb-8 md:mb-0 relative ${
            side === 'right' ? 'md:order-2 md:col-start-2' : 'md:order-3 md:col-start-8'
          }`}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Mobile CTA Indicator - appears on hover/touch */}
            <motion.div
              className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10
              }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                style={{
                  backgroundColor: `${currentAccentColor}15`,
                  borderColor: currentAccentColor,
                  color: currentAccentColor,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                <span>View Case</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>

            {/* Vivo Case - Purple organic shapes + Mobile */}
            {accentColor === 'purple' && (
              <>
                {/* Simple radial background glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${currentAccentColor}20, transparent 70%)`,
                  }}
                  animate={{
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.7 }}
                />

                {/* Central frame - editorial window */}
                <motion.div
                  className="relative w-32 h-44 md:w-48 md:h-64 border flex items-center justify-center"
                  style={{
                    borderColor: isHovered ? currentAccentColor : '#1a1a1a',
                    borderWidth: '1px',
                    backgroundColor: isHovered ? `${currentAccentColor}08` : 'transparent'
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Mobile device representation */}
                  <motion.div
                    className="relative"
                    animate={{
                      y: isHovered ? -5 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Phone frame */}
                    <div
                      className="w-16 h-32 md:w-24 md:h-48 border-2 rounded-2xl md:rounded-3xl relative"
                      style={{
                        borderColor: isHovered ? currentAccentColor : '#333'
                      }}
                    >
                      {/* Notch */}
                      <div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-12 h-3 md:h-4 rounded-b-lg md:rounded-b-xl"
                        style={{ backgroundColor: '#000', border: '1px solid #333' }}
                      />
                      
                      {/* Screen content - elegant onboarding UI */}
                      <div className="absolute inset-2 md:inset-3 top-4 md:top-6 flex flex-col items-center">
                        {/* Hero icon/illustration - top - simplified */}
                        <motion.div 
                          className="relative w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-5"
                          animate={{
                            scale: isHovered ? [1, 1.15, 1] : 1,
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {/* Simple logo/icon representation */}
                          <motion.div 
                            className="w-full h-full rounded-md md:rounded-lg border"
                            style={{ 
                              borderColor: isHovered ? currentAccentColor : '#444',
                            }}
                            animate={{
                              backgroundColor: isHovered ? [`${currentAccentColor}00`, `${currentAccentColor}15`, `${currentAccentColor}00`] : `${currentAccentColor}00`
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {/* Inner mark */}
                            <div 
                              className="absolute inset-1.5 md:inset-2.5 rounded-sm"
                              style={{ 
                                backgroundColor: currentAccentColor,
                                opacity: isHovered ? 0.6 : 0.3
                              }}
                            />
                          </motion.div>
                        </motion.div>
                        
                        {/* Heading - abstracted */}
                        <motion.div 
                          className="w-10 md:w-14 h-1 md:h-1.5 rounded-full mb-1.5 md:mb-2"
                          style={{ backgroundColor: '#666' }}
                          animate={{
                            width: isHovered ? ['40px', '44px', '40px'] : '40px',
                            backgroundColor: isHovered ? ['#666', '#999', '#666'] : '#666'
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                        />
                        
                        {/* Subheading - lighter */}
                        <motion.div 
                          className="w-7 md:w-10 h-0.5 md:h-1 rounded-full mb-3 md:mb-5"
                          style={{ backgroundColor: '#444' }}
                          animate={{
                            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        />

                        {/* Input field representation */}
                        <motion.div 
                          className="w-full h-3.5 md:h-5 border rounded-md md:rounded-lg mb-1.5 md:mb-2 relative overflow-hidden"
                          style={{ 
                            borderColor: isHovered ? currentAccentColor : '#333',
                            backgroundColor: '#0a0a0a'
                          }}
                          transition={{ borderColor: { duration: 0.5 } }}
                        >
                          {/* Typing animation effect */}
                          <motion.div 
                            className="absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-4 md:w-6 h-0.5 rounded"
                            style={{ backgroundColor: '#555' }}
                            animate={{
                              width: isHovered ? ['16px', '24px', '16px'] : '16px',
                              backgroundColor: isHovered ? ['#555', '#888', '#555'] : '#555'
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                          />
                        </motion.div>

                        {/* Another input */}
                        <motion.div 
                          className="w-full h-3.5 md:h-5 border rounded-md md:rounded-lg mb-3 md:mb-4 relative"
                          style={{ 
                            borderColor: '#333',
                            backgroundColor: '#0a0a0a'
                          }}
                          animate={{
                            borderColor: isHovered ? ['#333', `${currentAccentColor}60`, '#333'] : '#333'
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        >
                          <motion.div 
                            className="absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-3.5 md:w-5 h-0.5 rounded"
                            style={{ backgroundColor: '#555' }}
                            animate={{
                              opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                          />
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div 
                          className="w-full h-3.5 md:h-5 rounded-md md:rounded-lg relative overflow-hidden"
                          style={{ 
                            backgroundColor: currentAccentColor,
                          }}
                          animate={{
                            opacity: isHovered ? [0.4, 0.8, 0.6, 0.8, 0.4] : 0.4,
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 w-8"
                            style={{
                              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`
                            }}
                            animate={{
                              x: isHovered ? ['-32px', '96px'] : '-32px'
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: 1,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>

                        {/* Step indicators at bottom */}
                        <motion.div 
                          className="flex gap-0.5 md:gap-1 mt-auto pt-2 md:pt-3"
                          animate={{
                            opacity: isHovered ? 1 : 0.4
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div 
                            className="w-3 md:w-4 h-0.5 rounded-full"
                            style={{ backgroundColor: currentAccentColor }}
                            animate={{ 
                              opacity: isHovered ? [1, 0.5, 1] : 1,
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-1 h-0.5 rounded-full"
                            style={{ backgroundColor: '#444' }}
                            animate={{
                              width: isHovered ? ['4px', '12px', '4px'] : '4px',
                              backgroundColor: isHovered ? ['#444', currentAccentColor, '#444'] : '#444'
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                          />
                          <motion.div 
                            className="w-1 h-0.5 rounded-full"
                            style={{ backgroundColor: '#444' }}
                            animate={{
                              backgroundColor: isHovered ? ['#444', `${currentAccentColor}60`, '#444'] : '#444'
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}

            {/* Luma Case - Orange/cream editorial composition */}
            {accentColor === 'orange' && (
              <>
                {/* Simple radial background glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${currentAccentColor}20, transparent 70%)`,
                  }}
                  animate={{
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.7 }}
                />

                {/* Central frame - editorial window */}
                <motion.div
                  className="relative w-32 h-44 md:w-48 md:h-64 border flex items-center justify-center"
                  style={{
                    borderColor: isHovered ? currentAccentColor : '#1a1a1a',
                    borderWidth: '1px',
                    backgroundColor: isHovered ? `${currentAccentColor}08` : 'transparent'
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* AI Neural Network visualization */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: isHovered ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Neural nodes - 3 layers */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      {/* Input layer - left */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-3 md:space-y-4">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={`input-${i}`}
                            className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2"
                            style={{
                              borderColor: isHovered ? currentAccentColor : '#333',
                              backgroundColor: isHovered ? `${currentAccentColor}20` : 'transparent'
                            }}
                            animate={{
                              scale: isHovered ? [1, 1.2, 1] : 1
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </div>

                      {/* Hidden layer - center */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 space-y-2 md:space-y-3">
                        {[0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={`hidden-${i}`}
                            className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                            style={{
                              backgroundColor: isHovered ? currentAccentColor : '#333',
                              opacity: isHovered ? 0.6 : 0.3
                            }}
                            animate={{
                              scale: isHovered ? [1, 1.3, 1] : 1,
                              opacity: isHovered ? [0.6, 1, 0.6] : 0.3
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.15
                            }}
                          />
                        ))}
                      </div>

                      {/* Output layer - right */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3 md:space-y-4">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={`output-${i}`}
                            className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2"
                            style={{
                              borderColor: isHovered ? currentAccentColor : '#333',
                              backgroundColor: isHovered ? `${currentAccentColor}40` : 'transparent'
                            }}
                            animate={{
                              scale: isHovered ? [1, 1.2, 1] : 1
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0.6 + i * 0.2
                            }}
                          />
                        ))}
                      </div>

                      {/* Connection lines - subtle */}
                      <svg className="absolute inset-0 w-full h-full" style={{ opacity: isHovered ? 0.2 : 0.1 }}>
                        {/* Mobile - adjusted coordinates */}
                        <line className="md:hidden" x1="8" y1="24" x2="48" y2="30" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="md:hidden" x1="8" y1="48" x2="48" y2="42" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="md:hidden" x1="8" y1="72" x2="48" y2="54" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="md:hidden" x1="52" y1="30" x2="92" y2="24" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="md:hidden" x1="52" y1="42" x2="92" y2="48" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="md:hidden" x1="52" y1="54" x2="92" y2="72" stroke={currentAccentColor} strokeWidth="0.5" />
                        
                        {/* Desktop - original coordinates */}
                        <line className="hidden md:block" x1="12" y1="32" x2="64" y2="40" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="hidden md:block" x1="12" y1="64" x2="64" y2="56" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="hidden md:block" x1="12" y1="96" x2="64" y2="72" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="hidden md:block" x1="68" y1="40" x2="120" y2="32" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="hidden md:block" x1="68" y1="56" x2="120" y2="64" stroke={currentAccentColor} strokeWidth="0.5" />
                        <line className="hidden md:block" x1="68" y1="72" x2="120" y2="96" stroke={currentAccentColor} strokeWidth="0.5" />
                      </svg>

                      {/* AI Chip icon at bottom */}
                      <motion.div
                        className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2"
                        animate={{
                          y: isHovered ? [0, -2, 0] : 0
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div 
                          className="w-6 h-6 md:w-8 md:h-8 border rounded relative"
                          style={{ borderColor: isHovered ? currentAccentColor : '#333' }}
                        >
                          {/* Chip pins */}
                          <div className="absolute -left-0.5 md:-left-1 top-1 w-0.5 md:w-1 h-1 md:h-1.5" style={{ backgroundColor: '#333' }} />
                          <div className="absolute -left-0.5 md:-left-1 bottom-1 w-0.5 md:w-1 h-1 md:h-1.5" style={{ backgroundColor: '#333' }} />
                          <div className="absolute -right-0.5 md:-right-1 top-1 w-0.5 md:w-1 h-1 md:h-1.5" style={{ backgroundColor: '#333' }} />
                          <div className="absolute -right-0.5 md:-right-1 bottom-1 w-0.5 md:w-1 h-1 md:h-1.5" style={{ backgroundColor: '#333' }} />
                          {/* Center detail */}
                          <div 
                            className="absolute inset-1.5 md:inset-2 rounded-sm"
                            style={{ backgroundColor: currentAccentColor, opacity: 0.3 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* Content Side - Position based on side */}
        <div className={`md:col-span-6 px-0 md:px-8 flex flex-col justify-start md:justify-between ${
          side === 'right' ? 'md:order-3 md:col-start-6' : 'md:order-2 md:col-start-2'
        }`}>
          {/* Metadata Header */}
          {metadata && (
            <div
              className="text-gray-700 mb-6 md:mb-4 uppercase tracking-widest"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#777'
              }}
            >
              {metadata}
            </div>
          )}
          
          <h3
            className="text-white mb-6 md:mb-8 transition-colors duration-500"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: isHovered ? currentAccentColor : undefined
            }}
          >
            {title}
          </h3>

          {/* Tags as running text */}
          <div className="mb-6 md:mb-12 pb-0 md:pb-8 border-b-0 md:border-b md:border-gray-900">
            <p
              className="leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                color: '#999'
              }}
            >
              {tags.join(' / ')}
            </p>
          </div>

          {/* Metrics - Editorial Grid */}
          <div className="grid grid-cols-3 gap-8 mb-0 md:mb-1 lg:mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="border-l-2 border-gray-900 pl-4 transition-colors duration-500" style={{
                borderColor: isHovered ? currentAccentColor : undefined
              }}>
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 500,
                    lineHeight: 1
                  }}
                >
                  {metric.value}
                </div>
                <div
                  className="uppercase tracking-wider"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    color: '#888'
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hidden Easter Egg Quote on Hover - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mb-6 hidden md:block"
          >
            <div
              className="text-gray-700 italic border-l-2 pl-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.01em',
                borderColor: currentAccentColor,
                color: '#888'
              }}
            >
              "{caseNumber === '01' ? 'Simplicity is about subtracting the obvious, and adding the meaningful.' : 'Good design is invisible until it\'s needed.'}"
            </div>
          </motion.div>

          {/* CTA - Minimal Editorial Link - Desktop Only */}
          <motion.button
            className="hidden md:inline-flex items-center gap-3 text-left transition-all duration-500 group/btn mt-auto"
            style={{
              color: isHovered ? currentAccentColor : '#666',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            View Case Study
            <ArrowRight 
              size={16} 
              className="transition-transform duration-500 group-hover/btn:translate-x-1"
            />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}