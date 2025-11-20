import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

type MonthKey = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

const makeAscending = (start: number, step: number, n: number) =>
  Array.from({ length: n }, (_, i) => ({ day: i + 1, value: start + step * i }));

const DATA: Record<MonthKey, { day: number; value: number }[]> = {
  January: makeAscending(9500, 250, 30),
  February: makeAscending(10000, 260, 28),
  March: makeAscending(11000, 270, 30),
  April: makeAscending(12000, 280, 30),
  May: makeAscending(12500, 290, 31),
  June: makeAscending(13000, 300, 30),
  July: makeAscending(13500, 310, 31),
  August: makeAscending(14000, 320, 31),
  September: makeAscending(14500, 330, 30),
  October: makeAscending(15000, 340, 31),
  November: makeAscending(15500, 350, 30),
  December: makeAscending(16000, 360, 31),
};

function formatCurrency(value: number): string {
  return `$${(value / 1000).toFixed(1)}k`;
}

export default function MonthlyGrowthChart() {
  const [month, setMonth] = useState<MonthKey>("January");
  const data = useMemo(() => DATA[month], [month]);

  return (
    <div className="w-full rounded-2xl border border-[#6cbd45] bg-[#0b0f14] p-6">
      <div className="mx-auto mb-6 flex w-full items-center rounded-full bg-[#141a22] px-2 py-2 overflow-x-scroll months-graph">
        {(["January", "February", "March","April","May","June","July","August","September","October","November","December"] as MonthKey[]).map((m) => (
          <button
            key={m}
            onClick={() => setMonth(m)}
            className={`mx-1 rounded-full px-6 py-2 text-sm transition-colors ${
              month === m
                ? "bg-[#E0A130] text-black shadow-lg"
                : "text-white/80 hover:text-white"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="h-[420px] w-full rounded-xl bg-[#0f141b] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="goldMonthlyFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0A130" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#E0A130" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#6cbd45"
              strokeOpacity={0.35}
              vertical={true}
              horizontal={true}
              strokeDasharray="4 6"
            />

            <XAxis
              dataKey="day"
              tick={{ fill: "#e8eef5", opacity: 0.8, fontSize: 12 }}
              axisLine={{ stroke: "#e8eef5", opacity: 0.3 }}
              tickLine={{ stroke: "#e8eef5", opacity: 0.3 }}
              interval={2}
            />

            <YAxis
              domain={[0, 18000]}
              ticks={[0, 4500, 9000, 13500, 18000]}
              tickFormatter={formatCurrency}
              tick={{ fill: "#e8eef5", opacity: 0.9, fontSize: 12 }}
              axisLine={{ stroke: "#e8eef5", opacity: 0.3 }}
              tickLine={{ stroke: "#e8eef5", opacity: 0.3 }}
              width={56}
            />

            <Area
              type="linear"
              dataKey="value"
              stroke="#E0A130"
              strokeWidth={3}
              fill="url(#goldMonthlyFill)"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


