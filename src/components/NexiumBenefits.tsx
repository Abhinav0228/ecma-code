import { motion } from "motion/react";
import bgPhone from "./../assets/bg-phone.png"
import leftFull from "./../assets/left-full.svg"
import rightFull from "./../assets/right-full.svg" 
import up from "./../assets/up.svg"
import down from "./../assets/down.svg"

export default function NexiumBenefits() {
  const left = [
    {
      num: "01",
      title: "Automated Trading",
      desc:
        "Our advanced trading bot handles the market for you, executing trades precisely so you can focus on what matters most.",
    },
    {
      num: "02",
      title: "Low Risk",
      desc:
        "Trade confidently with a strategy engineered to minimize drawdowns, safeguarding your capital while achieving growth.",
    },
    {
      num: "03",
      title: "High Profit",
      desc:
        "Our proven system is designed for maximum profitability and consistent monthly returns of 30–50%*.",
    },
  ];

  const right = [
    {
      num: "04",
      title: "Winning Ratio",
      desc:
        "With a proven 97–99%* winning ratio, your investments work efficiently and profitably in your favor.",
    },
    {
      num: "05",
      title: "Easy to Set Up",
      desc:
        "Get started quickly with a straightforward setup process, accessible to traders of all experience levels.",
    },
    {
      num: "06",
      title: "Passive Income",
      desc:
        "Set it up, sit back, and let the bot make a passive profit for you.",
    },
  ];

  const Item = ({ num, title, desc, align }: { num: string; title: string; desc: string; align: "left" | "right" }) => (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-row-reverse gap-3 ${align === "left" ? "xl:flex-row! xl:text-right" : "items-start text-left !flex-row"}`}
    >
      {align === "right" && (
        <span className="md:ml-3 text-lg text-[#E0A130] font-semibold">{num}</span>
      )}
      <div className="max-w-full md:max-w-xs">
        <h4 className="text-white text-2xl md:text-xl mb-1">{title}</h4>
        <p className="text-[#D9E0D8] text-base leading-relaxed">{desc}</p>
      </div>
      {align === "left" && (
        <span className="md:mr-3 text-xl text-[#E0A130] font-semibold">{num}</span>
      )}
    </motion.div>
  );

  return (
    <section id="benefits" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#E0A130] mb-2">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E8EEF5]">Key
            <span className="text-[#E0A130] inline-block ml-2">Benefits</span> </h2>
        </div>

        <div className="grid grid-cols-2 xl:flex! flex-col gap-10 md:flex-row! justify-between">
          <div className="grid grid-cols-1 col-span-2 md:col-span-1 gap-6 md:gap-16! order-1 xl:order-0 items-start xl:items-end">
            {left.map((b) => (
              <Item key={b.num} num={b.num} title={b.title} desc={b.desc} align="left" />
            ))}
          </div>

          <div className="relative col-span-3 xl:col-span-1 order-0 xl:order-1 mb-10 xl:mb-0">
            <div className="mx-auto max-w-sm flex items-center justify-center flex-col">
              <div className="relative rounded-3xl md:min-w-[400px] w-full flex items-center justify-center">
                <img src={leftFull} className="h-[365px] hidden xl:block! absolute -left-18 top-3" alt="" />
                <img src={rightFull} className="h-[365px] hidden xl:block! absolute -right-18 top-3" alt="" />
                <img src={bgPhone} className="min-w-[220px] max-w-[220px] rounded-[26px] shadow-[3px_13px_29px_19px_#00652c4f]" alt="" />
                <div className="absolute w-full md:min-w-[360px] max-w-[360px] left-1/2 top-1/2 -translate-1/2">
                  <div className="rounded-2xl bg-[#005829] py-3 px-6 text-white flex items-center justify-between">
                    <div className="">
                      <div className="text-sm opacity-80">Profit With <b>AlphaXAU</b></div>
                      <div className="text-3xl md:text-4xl font-semibold mt-1">$16,250.45</div>
                    </div>
                    <img src={up} alt="" />
                  </div>
                  <div className="mt-5 rounded-2xl border border-[#E0A130] flex items-center justify-between bg-white py-3 px-6">
                    <div className="">
                      <div className="text-blacktext-sm">Without <b> AlphaXAU Miner</b></div>
                      <div className="text-[#E0A130] font-bold text-3xl">$468.88</div>
                    </div>
                    <img src={down} alt="" />
                  </div>
                </div>
                
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4">
                  <button className="px-6 py-2 rounded-lg border border-[#6CBD454D] bg-[#005829] text-white text-base min-w-[220px]">
                    Subscribe Now
                  </button>
                </div>
            </div>

            <svg className="hidden lg:block absolute inset-0 -z-10" width="100%" height="100%" viewBox="0 0 900 560" preserveAspectRatio="none">
              <path d="M20,120 C160,120 240,220 360,220" fill="none" stroke="#8052ff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20,280 C200,280 240,320 360,320" fill="none" stroke="#8052ff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20,440 C200,440 240,380 360,380" fill="none" stroke="#8052ff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M880,120 C740,120 660,220 540,220" fill="none" stroke="#8052ff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M880,280 C700,280 660,320 540,320" fill="none" stroke="#8052ff" strokeWidth="3" strokeLinecap="round"/>
              <path d="M880,440 C700,440 660,380 540,380" fill="none" stroke="#8052ff" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 col-span-2 md:col-span-1 gap-8 md:gap-16! self-baseline order-2">
            {right.map((b) => (
              <Item key={b.num} num={b.num} title={b.title} desc={b.desc} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
