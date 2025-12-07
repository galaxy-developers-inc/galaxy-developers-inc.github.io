import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    year: "Year 1",
    subscription: 372,
    professional_services: 20,
    support: 12,
    overages: 40,
  },
  {
    year: "Year 2",
    subscription: 850,
    professional_services: 45,
    support: 28,
    overages: 90,
  },
  {
    year: "Year 3",
    subscription: 1600,
    professional_services: 75,
    support: 52,
    overages: 170,
  },
];

export const RevenueProjectionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSubscription" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSupport" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorOverages" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="year" stroke="hsl(var(--foreground-muted))" />
        <YAxis
          stroke="hsl(var(--foreground-muted))"
          label={{ value: 'Revenue (M ₽)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
          }}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="subscription"
          stackId="1"
          stroke="hsl(var(--chart-1))"
          fillOpacity={1}
          fill="url(#colorSubscription)"
          name="Подписка"
        />
        <Area
          type="monotone"
          dataKey="professional_services"
          stackId="1"
          stroke="hsl(var(--chart-2))"
          fillOpacity={1}
          fill="url(#colorServices)"
          name="Проф. услуги"
        />
        <Area
          type="monotone"
          dataKey="support"
          stackId="1"
          stroke="hsl(var(--chart-3))"
          fillOpacity={1}
          fill="url(#colorSupport)"
          name="Поддержка"
        />
        <Area
          type="monotone"
          dataKey="overages"
          stackId="1"
          stroke="hsl(var(--chart-4))"
          fillOpacity={1}
          fill="url(#colorOverages)"
          name="Overages"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
