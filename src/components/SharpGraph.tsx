import React, { useMemo, useState } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis } from "recharts";

type TabKey = "1H" | "1D" | "1W" | "1M" | "1Y" | "All";

const generateData = (points: number, max: number) =>
  Array.from({ length: points }, (_, i) => ({ time: i, value: Math.random() * max }));

const PRESET_DATA: Record<TabKey, { time: number; value: number }[]> = {
  "1H": generateData(20, 100),
  "1D": generateData(30, 130),
  "1W": generateData(40, 120),
  "1M": generateData(60, 150),
  "1Y": generateData(80, 180),
  "All": generateData(100, 200),
};

const TABS: TabKey[] = ["1H", "1D", "1W", "1M", "1Y", "All"];

export default function SharpGraph() {
  const [activeTab, setActiveTab] = useState<TabKey>("1D");

  const data = useMemo(() => PRESET_DATA[activeTab], [activeTab]);

  return (
    <div className="w-full h-[360px] rounded-xl border relative">
      <div className="absolute inset-0 pointer-events-none rounded-xl shadow-[0_40px_120px_-20px_rgba(224,161,48,0.18)]" />

      <div className="absolute hidden md:block -top-6 right-2 md:right-8 bg-[rgba(15,20,27,0.9)] border border-[#E0A130]/30 text-white text-sm rounded-xl px-4 py-2 backdrop-blur-sm shadow-lg">
        <span className="mr-2">🛡️</span>
        <span>&lt;20% Drawdown*</span>
      </div>

      <div className="absolute hidden md:block top-0 -left-10 bg-[rgba(15,20,27,0.9)] border border-[#E0A130]/30 text-white text-sm rounded-xl px-4 py-2 backdrop-blur-sm shadow-lg">
        <span className="mr-2">📈</span>
        <span>15–25% Monthly Target*</span>
      </div>

      <div className="h-full w-full p-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0A130" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#E0A130" stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" hide />
            <Area
              type="linear"
              dataKey="value"
              stroke="#E0A130"
              strokeWidth={2}
              fill="url(#goldFill)"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-md border text-sm transition-colors ${
              activeTab === tab
                ? "text-[#E0A130] border-[#E0A130]"
                : "text-white/80 border-white/10 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}


