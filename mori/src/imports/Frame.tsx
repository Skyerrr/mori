function Container1() {
  return (
    <div className="h-[15.609px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15.6px] left-0 not-italic text-[10.4px] text-white top-[-1px] tracking-[1.56px]">PORTFOLIO 2025 — ISSUE Nº 01</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="font-['Recoleta:Regular_DEMO',sans-serif] h-[353px] leading-[176.8px] not-italic relative shrink-0 text-[180px] text-white tracking-[-8.32px] w-[661px]" data-name="Heading 1">
      <p className="absolute left-0 top-[-1px]">{`Hey I'm`}</p>
      <p className="absolute left-0 top-[175.8px]">Tav</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="font-['Satoshi:Regular',sans-serif] h-[84px] leading-[42px] not-italic relative shrink-0 text-[#e5e7eb] text-[28px] tracking-[-0.28px] w-full" data-name="Container">
      <p className="absolute left-0 top-0">A product designer</p>
      <p className="absolute left-0 top-[42px]">— versatile, crafty and idealist.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[35px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-center justify-center px-[29px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#aaa] text-[16px] text-center tracking-[0.16px]">Hi Tav!</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[29px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#aaa] text-[16px] text-center tracking-[0.16px]">Wait, can i answer you?</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[29px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#aaa] text-[16px] text-center tracking-[0.16px]">Show me your work</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[29px] py-[16px] relative rounded-[100px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#aaa] text-[16px] text-center tracking-[0.16px]">Tell me something funny</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[174px] items-start relative shrink-0 w-[896px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return <div className="bg-[#4a5565] h-[388.344px] shrink-0 w-px" data-name="Container" />;
}

function Container7() {
  return (
    <div className="content-stretch flex h-[388px] items-start relative w-[19px]" data-name="Container">
      <div className="flex h-[385px] items-center justify-center relative shrink-0 w-[19px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18.72px] not-italic relative text-[#aaa] text-[10.4px] tracking-[0.52px]">{`INTERACTIVE DIALOGUE SYSTEM — TAV'S MIND GARDEN — EST. 2025`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[1254px] top-[0.61px]">
      <Container6 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Container1 />
      <Heading />
      <Container2 />
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-between px-[64px] py-[120px] relative size-full" data-name="Frame">
      <Container />
    </div>
  );
}