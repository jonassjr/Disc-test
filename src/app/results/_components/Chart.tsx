"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { ChartData } from "@/utils/calculateResult"

interface ChartProps {
  chartData: ChartData[]
}

const chartData = [
  { dimension: "dominancia", values: 275, fill: "var(--color-dominancia)" },
  { dimension: "influencia", values: 200, fill: "var(--color-influencia)" },
  { dimension: "estabilidade", values: 187, fill: "var(--color-estabilidade)" },
  { dimension: "comformidade", values: 173, fill: "var(--color-comformidade)" },
]

const chartConfig = {
  values: {
    label: "Valores",
  },
  dominancia: {
    label: "Dominancia",
    color: "hsl(var(--chart-1))",
  },
  influencia: {
    label: "Influência",
    color: "hsl(var(--chart-2))",
  },
  estabilidade: {
    label: "Estabilidade",
    color: "hsl(var(--chart-3))",
  },
  comformidade: {
    label: "Comformidade",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Mixed</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="dimension"
              type="category"
              width={100}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="values" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="values" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total values for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
