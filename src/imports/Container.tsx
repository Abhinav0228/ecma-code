import img81301 from "figma:asset/7ee3456b3a79f04d787213d1cf38814814f69fa1.png";

function AboutSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="AboutSection">
      <p className="font-['Eurostile:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e0a130] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">About Us</p>
      <p className="font-['Eurostile-Bold:Regular',sans-serif] font-['Space_Grotesk:Regular',sans-serif] font-normal italic leading-[48px] relative shrink-0 text-[#e8eef5] text-[48px] w-[359px]">
        <span>{`About Alpha `}</span>
        <span className="text-[#e0a130]">Gold Trading</span>
      </p>
    </div>
  );
}

function Frame2147225148() {
  return (
    <div className="content-stretch flex flex-col font-['Eurostile:Regular',sans-serif] gap-[20px] items-start not-italic relative shrink-0 text-[#d9e0d8] text-[18px] text-justify w-full">
      <p className="leading-[30px] min-w-full relative shrink-0 w-[min-content]">AlphaXAU Trading is a fintech company specializing in automated trading solutions, focused on gold (XAUUSD) and forex. Our mission is to empower traders with technology and proven strategies to trade confidently and efficiently.</p>
      <p className="leading-[29.25px] relative shrink-0 w-[523px]">{`We're forward-thinking experts dedicated to cutting-edge technology and proven, price action–based strategies. Our goal: reduce bias, streamline trading, and aim for consistency in every trade.`}</p>
    </div>
  );
}

function AboutSection1() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="AboutSection">
      <p className="absolute font-['Eurostile-Bold:Regular',sans-serif] italic leading-[36px] left-[81.52px] text-[#e0a130] text-[30px] text-center text-nowrap top-[-1.18px] translate-x-[-50%] whitespace-pre">5+</p>
    </div>
  );
}

function AboutSection2() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="AboutSection">
      <p className="absolute font-['Eurostile:Regular',sans-serif] leading-[20px] left-[82.14px] not-italic text-[#d9e0d8] text-[14px] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Years Experience</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.971px] items-start left-[0.27px] top-[3.97px] w-[162.671px]" data-name="Container">
      <AboutSection1 />
      <AboutSection2 />
    </div>
  );
}

function AboutSection3() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="AboutSection">
      <p className="absolute font-['Eurostile-Bold:Regular',sans-serif] italic leading-[36px] left-[81.8px] text-[#e0a130] text-[30px] text-center text-nowrap top-[-1.18px] translate-x-[-50%] whitespace-pre">10k+</p>
    </div>
  );
}

function AboutSection4() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="AboutSection">
      <p className="absolute font-['Eurostile:Regular',sans-serif] leading-[20px] left-[81.35px] not-italic text-[#d9e0d8] text-[14px] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Active Users</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.971px] items-start left-[186.94px] top-[3.97px] w-[162.671px]" data-name="Container">
      <AboutSection3 />
      <AboutSection4 />
    </div>
  );
}

function AboutSection5() {
  return (
    <div className="h-[35.998px] relative shrink-0 w-full" data-name="AboutSection">
      <p className="absolute font-['Eurostile-Bold:Regular',sans-serif] italic leading-[36px] left-[81.33px] text-[#e0a130] text-[30px] text-center text-nowrap top-[-1.18px] translate-x-[-50%] whitespace-pre">24/7</p>
    </div>
  );
}

function AboutSection6() {
  return (
    <div className="h-[19.99px] relative shrink-0 w-full" data-name="AboutSection">
      <p className="absolute font-['Eurostile:Regular',sans-serif] leading-[20px] left-[81.4px] not-italic text-[#d9e0d8] text-[14px] text-center text-nowrap top-[0.18px] translate-x-[-50%] whitespace-pre">Support</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.983px] h-[59.971px] items-start left-[373.6px] top-[3.97px] w-[162.671px]" data-name="Container">
      <AboutSection5 />
      <AboutSection6 />
    </div>
  );
}

function AboutSection7() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="AboutSection">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[535.998px]" data-name="Container">
      <AboutSection />
      <Frame2147225148 />
      <AboutSection7 />
    </div>
  );
}

function Frame2147225149() {
  return (
    <div className="absolute content-stretch flex gap-[55px] items-center left-[calc(50%-0.001px)] top-px translate-x-[-50%]">
      <div className="h-[461px] relative shrink-0 w-[545px]" data-name="8130 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.08%] left-[-23.8%] max-w-none top-[-0.04%] w-[127%]" src={img81301} />
        </div>
      </div>
      <Container3 />
    </div>
  );
}

export default function Container4() {
  return (
    <div className="relative size-full" data-name="Container">
      <Frame2147225149 />
    </div>
  );
}