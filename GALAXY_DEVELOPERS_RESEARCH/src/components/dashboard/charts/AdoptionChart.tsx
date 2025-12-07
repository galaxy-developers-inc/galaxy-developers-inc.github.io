import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { metric: "Компании используют AI", percentage: 67 },
  { metric: "Enterprise (1000+)", percentage: 78 },
  { metric: "Интерес рекрутеров 2024", percentage: 88 },
  { metric: "Ожидаемое внедрение 2025", percentage: 60 },
];

export const AdoptionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="metric"
          stroke="hsl(var(--foreground-muted))"
          style={{ fontSize: '11px' }}
          angle={-15}
          textAnchor="end"
          height={80}
        />
        <YAxis
          stroke="hsl(var(--foreground-muted))"
          style={{ fontSize: '12px' }}
          label={{ value: 'Процент (%)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
        />
        <Bar dataKey="percentage" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
