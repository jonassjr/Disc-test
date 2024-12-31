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

// const chartData = [
//   { dimension: "dominancia", values: 275, fill: "var(--color-dominancia)" },
//   { dimension: "influencia", values: 200, fill: "var(--color-influencia)" },
//   { dimension: "estabilidade", values: 187, fill: "var(--color-estabilidade)" },
//   { dimension: "comformidade", values: 173, fill: "var(--color-comformidade)" },
// ]

const chartConfig = {
  values: {
    label: "Valores",
  },
  dominancia: {
    label: "Dominância",
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
  conformidade: {
    label: "Comformidade",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig


export function Chart({ chartData }: ChartProps) {

  const maxDimension = chartData.reduce((max, item) => {
    return item.values > max.values ? item : max;
  }, chartData[0])

  const predominantValue = chartConfig[maxDimension.dimension as keyof typeof chartConfig]?.label;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Resultados</CardTitle>
        <CardDescription>Valores mostrado em porcentagem</CardDescription>
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
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name, item, index) => (

                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={{ backgroundColor: item.payload.fill }}
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          %
                        </span>
                      </div>
                    </>
                  )}
                />
              }
              defaultIndex={1}
            />
            <Bar dataKey="values" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {predominantValue} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
        Fator predominante
        </div>
      </CardFooter> */}
    </Card>
  )
}
