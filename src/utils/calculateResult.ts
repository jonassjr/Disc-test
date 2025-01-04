export interface ChartData {
  dimension: string,
  values: number,
  fill: string
}

export function calculateResults(responses: string[]): ChartData[] {

  const index = {
    D: { label: "dominancia", color: "var(--color-dominancia)" },
    I: { label: "influencia", color: "var(--color-influencia)" },
    S: { label: "estabilidade", color: "var(--color-estabilidade)" },
    C: { label: "conformidade", color: "var(--color-conformidade)" },
  }

  const totalResponses = responses.length

  const counts: Record<string, number> = responses.reduce((acc, response) => {
    acc[response] = (acc[response] || 0) + 1

    return acc
  }, {} as Record<string, number>)

  const chartData = Object.entries(index).map(([key, { label, color }]) => {
    const count = counts[key] || 0
    const percentage = totalResponses > 0 ? (count / totalResponses) * 100 : 0

    return {
      dimension: label,
      values: parseFloat(percentage.toFixed()),
      fill: color,
    }
  })

  return chartData
}