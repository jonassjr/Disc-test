export interface ChartData {
  dimension: string,
  value: number,
  fill: string
}

export function calculateResults(responses: string[]): ChartData[] {

  const index = {
    D: { label: "Dominancia", color: "var(--color-dominancia)" },
    I: { label: "Inflência", color: "var(--color-influencia)" },
    S: { label: "Estabilidade", color: "var(--color-estabilidade)" },
    C: { label: "Conformidade", color: "var(--color-conformidade)" },
  }

  const counts: Record<string, number> = responses.reduce((acc, response) => {
    acc[response] = (acc[response] || 0) + 1

    return acc
  }, {} as Record<string, number>)

  const chartData = Object.entries(index).map(([key, { label, color }]) => ({
    dimension: label,
    value: counts[key] || 0,
    fill: color
  }))

  return chartData
}