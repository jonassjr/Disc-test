"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
                  formatter={(value, name, item) => (

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
    </Card>
  )
}
