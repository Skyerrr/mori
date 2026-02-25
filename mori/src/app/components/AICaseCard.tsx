import { useState } from "react";
import svgPaths from "../../imports/svg-rmuj8bwcag";
import caseImage from "figma:asset/03c234ba09d8f07fc5e921f0f812139a026db569.png";
import mobileImage from "figma:asset/3b61df55a81435aaf198a6ff6284641f03bb59ab.png";

function MaterialSymbolsArrowInsertRounded() {
  return (
    <div className="relative size-[20px]" data-name="material-symbols:arrow-insert-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:arrow-insert-rounded">
          <path d={svgPaths.p3f226880} fill="var(--fill-0, #000000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function AICaseCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.01)' : 'scale(1)'
      }}
    >
      {/* Mobile Layout */}
      <div className="md:hidden rounded-[24px] overflow-hidden relative">
        {/* Top Section - Image/Decorative Area */}
        <div className="bg-[#f6f1e8] relative h-[284px]">
          <img 
            src={mobileImage}
            alt="AI Eligibility Case Study Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Section - Black Content */}
        <div className="bg-black px-4 py-6">
          <div className="flex flex-col gap-6">
            {/* Metadata */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '16px',
                color: '#aaa'
              }}
            >
              LUMA HEALTH, 2025
            </p>

            {/* Title */}
            <p 
              className="transition-colors duration-300"
              style={{
                fontFamily: 'Recoleta, serif',
                fontSize: '32px',
                fontWeight: 500,
                lineHeight: '40px',
                color: isHovered ? '#ff8c00' : 'white'
              }}
            >
              AI Eligibility Payer Mapping
            </p>

            {/* Tags */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13.6px',
                fontWeight: 400,
                lineHeight: '22.1px',
                letterSpacing: '0.272px',
                color: '#aaa'
              }}
            >
              Healthcare / B2B SaaS / Enterprise / Web / AI/ML / Product Design
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#71717A]" />

            {/* Metrics */}
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-1 items-center">
                <p 
                  style={{
                    fontFamily: 'Recoleta, serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    lineHeight: '32px',
                    color: 'white'
                  }}
                >
                  x5
                </p>
                <p 
                  className="text-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '16px',
                    color: '#a3a3a3'
                  }}
                >
                  Faster
                </p>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <p 
                  style={{
                    fontFamily: 'Recoleta, serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    lineHeight: '32px',
                    color: 'white'
                  }}
                >
                  95%
                </p>
                <p 
                  className="text-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '16px',
                    color: '#a3a3a3'
                  }}
                >
                  Accuracy
                </p>
              </div>

              <div className="flex flex-col gap-1 items-center">
                <p 
                  style={{
                    fontFamily: 'Recoleta, serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    lineHeight: '32px',
                    color: 'white'
                  }}
                >
                  0
                </p>
                <p 
                  className="text-center"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '16px',
                    color: '#a3a3a3'
                  }}
                >
                  Training needed
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className="w-full rounded-full px-6 py-4 flex items-center justify-center gap-2 border transition-all duration-300"
              style={{
                backgroundColor: isHovered ? '#ff8c00' : 'black',
                borderColor: isHovered ? '#ff8c00' : '#464646'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: isHovered ? 'black' : 'white'
                }}
              >
                View Case Study
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Outline Border */}
        <div 
          aria-hidden="true" 
          className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[24px] transition-colors duration-300"
          style={{
            borderColor: isHovered ? '#ff8c00' : '#464646'
          }}
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block bg-black relative rounded-[48px] w-full">
        <div className="content-stretch flex flex-row items-center overflow-clip relative rounded-[inherit] w-full">
          {/* Content */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-20 py-16 relative w-full cursor-pointer">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start justify-center min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    {/* Header */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
                      <p 
                        className="relative shrink-0 w-full"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: '32px',
                          color: '#aaa'
                        }}
                      >
                        LUMA HEALTH, 2025
                      </p>
                      <p 
                        className="relative shrink-0 w-full transition-colors duration-300"
                        style={{
                          fontFamily: 'Recoleta, serif',
                          fontSize: '48px',
                          fontWeight: 500,
                          lineHeight: '62.8px',
                          color: isHovered ? '#ff8c00' : 'white'
                        }}
                      >
                        AI Eligibility Payer Mapping
                      </p>
                    </div>

                    {/* Tags */}
                    <p 
                      className="not-italic relative shrink-0"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13.6px',
                        fontWeight: 400,
                        lineHeight: '22.1px',
                        letterSpacing: '0.272px',
                        color: '#aaa'
                      }}
                    >
                      Healthcare / B2B SaaS / Enterprise / Web / AI/ML / Product Design
                    </p>

                    {/* Divider */}
                    <div className="flex h-[1.272px] items-center justify-center relative shrink-0 w-full">
                      <div className="flex-none w-full">
                        <div className="h-0 relative w-full">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 1">
                              <line stroke="#71717A" x2="496" y1="0.5" y2="0.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="content-stretch flex flex-row items-start justify-between relative shrink-0 w-full gap-4">
                      {/* Metric 1 */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[18px] relative shrink-0">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-l-2 border-solid inset-0 pointer-events-none transition-colors duration-300"
                          style={{
                            borderColor: isHovered ? '#ff8c00' : '#71717a'
                          }}
                        />
                        <div className="relative shrink-0">
                          <p 
                            className="text-white"
                            style={{
                              fontFamily: 'Recoleta, serif',
                              fontSize: '40px',
                              fontWeight: 500,
                              lineHeight: '40px'
                            }}
                          >
                            x5
                          </p>
                        </div>
                        <div className="relative shrink-0">
                          <p 
                            className="not-italic uppercase"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '10.4px',
                              fontWeight: 400,
                              lineHeight: '15.6px',
                              letterSpacing: '1.04px',
                              color: '#aaa'
                            }}
                          >
                            Faster
                          </p>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[18px] relative shrink-0">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-l-2 border-solid inset-0 pointer-events-none transition-colors duration-300"
                          style={{
                            borderColor: isHovered ? '#ff8c00' : '#71717a'
                          }}
                        />
                        <div className="relative shrink-0">
                          <p 
                            className="text-white"
                            style={{
                              fontFamily: 'Recoleta, serif',
                              fontSize: '40px',
                              fontWeight: 500,
                              lineHeight: '40px'
                            }}
                          >
                            95%
                          </p>
                        </div>
                        <div className="relative shrink-0">
                          <p 
                            className="not-italic uppercase"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '10.4px',
                              fontWeight: 400,
                              lineHeight: '15.6px',
                              letterSpacing: '1.04px',
                              color: '#aaa'
                            }}
                          >
                            Accuracy
                          </p>
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[18px] relative shrink-0">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-l-2 border-solid inset-0 pointer-events-none transition-colors duration-300"
                          style={{
                            borderColor: isHovered ? '#ff8c00' : '#71717a'
                          }}
                        />
                        <div className="relative shrink-0">
                          <p 
                            className="text-white"
                            style={{
                              fontFamily: 'Recoleta, serif',
                              fontSize: '40px',
                              fontWeight: 500,
                              lineHeight: '40px'
                            }}
                          >
                            0
                          </p>
                        </div>
                        <div className="relative shrink-0">
                          <p 
                            className="not-italic uppercase"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '10.4px',
                              fontWeight: 400,
                              lineHeight: '15.6px',
                              letterSpacing: '1.04px',
                              color: '#aaa'
                            }}
                          >
                            Training needed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div 
                    className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[48px] shrink-0 cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? '#ff8c00' : 'transparent'
                    }}
                  >
                    <div 
                      aria-hidden="true" 
                      className="absolute border border-solid inset-0 pointer-events-none rounded-[48px] transition-colors duration-300"
                      style={{
                        borderColor: isHovered ? '#ff8c00' : '#b9b9b9'
                      }}
                    />
                    <p 
                      className="not-italic relative shrink-0 text-center transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '20px',
                        color: isHovered ? 'black' : '#aaa'
                      }}
                    >
                      View Case Study
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image - Right Side */}
          <div className="flex-[1_0_0] flex-row items-center self-stretch">
            <div className="bg-[#f6f1e8] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-br-[48px] rounded-tr-[48px] overflow-hidden">
              <img 
                src={caseImage}
                alt="AI Eligibility Case Study Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Outline Border */}
        <div 
          aria-hidden="true" 
          className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[48px] transition-colors duration-300"
          style={{
            borderColor: isHovered ? '#ff8c00' : '#464646'
          }}
        />
      </div>
    </div>
  );
}