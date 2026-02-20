import svgPaths from "./svg-sy68hp3j17";
import imgImage80 from "figma:asset/bb6ac3f57d03f75775d7751717d7614a4c38e2ee.png";
import imgImage81 from "figma:asset/b8be258fbe5b3e99c89c57708697624d93465128.png";
import imgImage77 from "figma:asset/88b3998ba739e4ae131f9179801828bb79d33a53.png";
import imgImage78 from "figma:asset/1d261fbbc390a38f27d67444b42238fa866085ff.png";
import imgImage79 from "figma:asset/f1d865a9e83c4a5cdc975e6166451f6c40032494.png";
import imgImage82 from "figma:asset/8756860f579453b189171f9774307691bb5b71cd.png";

function PolluxPartOfAccentureLogoBlack() {
  return (
    <div className="h-[32.721px] relative shrink-0 w-[84.777px]" data-name="Pollux_Part of Accenture logo_Black">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.7768 32.7212">
        <g id="Pollux_Part of Accenture logo_Black">
          <path d={svgPaths.p19f3300} fill="var(--fill-0, white)" id="Caminho 1" />
          <path d={svgPaths.p129f3240} fill="var(--fill-0, white)" id="Caminho 2" />
          <path d={svgPaths.p1a9a2e00} fill="var(--fill-0, white)" id="Caminho 3" />
          <path d={svgPaths.p34e1d800} fill="var(--fill-0, white)" id="Caminho 4" />
          <path d={svgPaths.p3f766600} fill="var(--fill-0, white)" id="Caminho 5" />
          <path d={svgPaths.p4fc0c00} fill="var(--fill-0, white)" id="Caminho 6" />
          <path d={svgPaths.p1e7d0f80} fill="var(--fill-0, white)" id="Caminho 7" />
          <path d={svgPaths.p3d7f4480} fill="var(--fill-0, white)" id="Caminho 8" />
          <path d={svgPaths.p2da04180} fill="var(--fill-0, white)" id="Caminho 9" />
          <path d={svgPaths.p32f17500} fill="var(--fill-0, white)" id="Caminho 10" />
          <path d={svgPaths.p168c9100} fill="var(--fill-0, white)" id="Caminho 11" />
          <path d={svgPaths.p1b0bcc00} fill="var(--fill-0, white)" id="Caminho 12" />
          <path d={svgPaths.pc784c00} fill="var(--fill-0, white)" id="Caminho 13" />
          <path d={svgPaths.p275ac200} fill="var(--fill-0, white)" id="Caminho 14" />
          <path d={svgPaths.p76852f0} fill="var(--fill-0, white)" id="Caminho 15" />
          <path clipRule="evenodd" d={svgPaths.pea33500} fill="var(--fill-0, white)" fillRule="evenodd" id="Caminho 16" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="h-[39.697px] relative shrink-0 w-[108px]" data-name="image 80">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage80} />
      </div>
      <div className="h-[23px] relative shrink-0 w-[194px]" data-name="image 81">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[206.19%] left-0 max-w-none top-[-49.48%] w-full" src={imgImage81} />
        </div>
      </div>
      <div className="h-[33px] relative shrink-0 w-[59px]" data-name="image 77">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage77} />
      </div>
      <PolluxPartOfAccentureLogoBlack />
      <div className="h-[33px] relative shrink-0 w-[180px]" data-name="image 78">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[261.87%] left-[-16.48%] max-w-none top-[-79.08%] w-[133.86%]" src={imgImage78} />
        </div>
      </div>
      <div className="h-[42px] relative shrink-0 w-[145px]" data-name="image 79">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage79} />
      </div>
      <div className="h-[33px] relative shrink-0 w-[87px]" data-name="image 82">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage82} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame1 />
    </div>
  );
}