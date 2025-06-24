import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface TimeSeriesChartProps {
  data: Array<{
    time: number;
    [key: string]: number | string | null;
  }>;
  keys: string[];
  colors: Record<string, string>;
}

export function TimeSeriesChart({ data, keys, colors }: TimeSeriesChartProps) {
  console.log(data);
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="w-full h-full">
      <ChartContainer config={{}}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          {keys.map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[key]}
              dot={false}
            />
          ))}
          <ChartLegend>
            <ChartLegendContent />
          </ChartLegend>
        </LineChart>
      </ChartContainer>
    </div>
  );
}
