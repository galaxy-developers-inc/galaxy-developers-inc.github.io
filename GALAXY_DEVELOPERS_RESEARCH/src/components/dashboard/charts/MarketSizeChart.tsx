import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { year: 2024, ai_recruitment: 596, video_interview: 1100 },
  { year: 2025, ai_recruitment: 680, video_interview: 1200 },
  { year: 2026, ai_recruitment: 750, video_interview: 1400 },
  { year: 2027, ai_recruitment: 820, video_interview: 1700 },
  { year: 2028, ai_recruitment: 890, video_interview: 2100 },
  { year: 2029, ai_recruitment: 960, video_interview: 2600 },
  { year: 2030, ai_recruitment: 1040, video_interview: 3200 },
];

export const MarketSizeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="year"
          stroke="hsl(var(--foreground-muted))"
          style={{ fontSize: '12px' }}
        />
        <YAxis
          stroke="hsl(var(--foreground-muted))"
          style={{ fontSize: '12px' }}
          label={{ value: 'Market Size ($ millions)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="ai_recruitment"
          stroke="hsl(var(--chart-1))"
          strokeWidth={3}
          name="AI Recruitment"
          dot={{ fill: 'hsl(var(--chart-1))' }}
        />
        <Line
          type="monotone"
          dataKey="video_interview"
          stroke="hsl(var(--chart-2))"
          strokeWidth={3}
          name="Video Interview"
          dot={{ fill: 'hsl(var(--chart-2))' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
