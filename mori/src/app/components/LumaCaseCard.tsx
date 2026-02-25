import { useState } from "react";
import imgFrame2609267 from "figma:asset/0e3b69ac9ac760ad514c8541449685ecf23421b2.png";
import imgFrame2609268 from "figma:asset/33041312206a08752000f2f6e0398df803c7a4ff.png";
import imgFrame2609269 from "figma:asset/c460a2614dacfa8cd48c5b774da95629b4a10ffb.png";
import imgFrame2609270 from "figma:asset/0ac232c38cdc737b0a0a08a59672c248c5905577.png";
import caseImage from "figma:asset/03c234ba09d8f07fc5e921f0f812139a026db569.png";
import mobileImage from "figma:asset/e383c82d23d95e8cffee86e946372ce4e634a790.png";

export function LumaCaseCard() {
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
      <div className="md:hidden content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] size-full">
        {/* Outline Border */}
        <div 
          aria-hidden="true" 
          className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[24px] transition-colors duration-300 z-10"
          style={{
            borderColor: isHovered ? '#ff6b35' : '#464646'
          }}
        />
        
        <div className="bg-[#fff3db] h-[284px] relative shrink-0 w-full">
          <img 
            src={mobileImage}
            alt="AI Eligibility Payer Mapping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-black relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pb-[24px] pt-[16px] px-[16px] relative w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[332px]">
                <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
                  <p 
                    className="font-normal leading-[16px] relative shrink-0 text-[12px] w-full"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#aaa'
                    }}
                  >
                    Luma Health, 2025
                  </p>
                  <p 
                    className="leading-[40px] relative shrink-0 text-[32px] w-full transition-colors duration-300"
                    style={{
                      fontFamily: 'Recoleta, serif',
                      fontWeight: 500,
                      color: isHovered ? '#ff6b35' : 'white'
                    }}
                  >
                    AI Eligibility Payer Mapping
                  </p>
                </div>
                <p 
                  className="font-normal leading-[22.1px] not-italic relative shrink-0 text-[13.6px] tracking-[0.272px] w-full whitespace-pre-wrap"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#aaa'
                  }}
                >
                  Health Tech / Enterprise SaaS / Startup / Desktop / Product Design / AI automation
                </p>
                <div className="flex h-[0.851px] items-center justify-center relative shrink-0 w-full">
                  <div className="flex-none rotate-[-0.15deg] w-full">
                    <div className="h-0 relative w-full">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
                          <line id="Line 1" stroke="#71717A" x2="332" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                      <p className="leading-[32px] relative shrink-0 text-[24px] text-white">x7</p>
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Flows unified</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                      <p className="leading-[32px] relative shrink-0 text-[24px] text-white">15</p>
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Designers project</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                      <p className="leading-[32px] relative shrink-0 text-[24px] text-white">87</p>
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#a3a3a3] text-[12px] text-center whitespace-nowrap">
                        <p className="leading-[16px]">Usability score</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div 
                  className="relative rounded-[999px] shrink-0 w-full transition-all duration-300"
                  data-name="Frame"
                  style={{
                    backgroundColor: isHovered ? '#ff6b35' : 'black'
                  }}
                >
                  <div 
                    aria-hidden="true" 
                    className="absolute border border-solid inset-0 pointer-events-none rounded-[999px] transition-colors duration-300"
                    style={{
                      borderColor: isHovered ? '#ff6b35' : '#71717a'
                    }}
                  />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative w-full">
                      <p 
                        className="leading-[20px] not-italic relative shrink-0 text-[16px] text-center transition-colors duration-300"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          color: isHovered ? 'black' : 'white'
                        }}
                      >
                        View Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        Luma Health, 2025
                      </p>
                      <p 
                        className="relative shrink-0 w-full transition-colors duration-300"
                        style={{
                          fontFamily: 'Recoleta, serif',
                          fontSize: '48px',
                          fontWeight: 500,
                          lineHeight: '62.8px',
                          color: isHovered ? '#ff6b35' : 'white'
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
                      Health Tech / Enterprise SaaS / Startup / Desktop / Product Design / AI automation
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
                            borderColor: isHovered ? '#ff6b35' : '#71717a'
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
                            98%
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
                            Match accuracy
                          </p>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[18px] relative shrink-0">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-l-2 border-solid inset-0 pointer-events-none transition-colors duration-300"
                          style={{
                            borderColor: isHovered ? '#ff6b35' : '#71717a'
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
                            -80%
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
                            Time reduction
                          </p>
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[18px] relative shrink-0">
                        <div 
                          aria-hidden="true" 
                          className="absolute border-l-2 border-solid inset-0 pointer-events-none transition-colors duration-300"
                          style={{
                            borderColor: isHovered ? '#ff6b35' : '#71717a'
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
                            8k
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
                            Payers mapped
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div 
                    className="content-stretch flex gap-[8px] items-center px-[24px] py-[16px] relative rounded-[48px] shrink-0 cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? '#ff6b35' : 'transparent'
                    }}
                  >
                    <div 
                      aria-hidden="true" 
                      className="absolute border border-solid inset-0 pointer-events-none rounded-[48px] transition-colors duration-300"
                      style={{
                        borderColor: isHovered ? '#ff6b35' : '#b9b9b9'
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
            <div className="bg-[#fef5ed] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-br-[48px] rounded-tr-[48px] overflow-hidden">
              <img 
                src={caseImage}
                alt="Case Study Preview"
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
            borderColor: isHovered ? '#ff6b35' : '#464646'
          }}
        />
      </div>
    </div>
  );
}