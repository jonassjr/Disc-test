import { generateAnalysis } from "./generateAnalysis"
import { ChartData } from "./calculateResult"

describe("Generate Analysis", () => {
  test("Deve identificar corretamente um valor predominante", () => {
    
    const data: ChartData[] = [
      { dimension: "dominancia", values: 50, fill: "color-dominancia" },
      { dimension: "influencia", values: 25, fill: "color-influencia" },
      { dimension: "estabilidade", values: 15, fill: "color-estabilidade" },
      { dimension: "conformidade", values: 10, fill: "color-conformidade" },
    ]

    const result = generateAnalysis(data)

    expect(result.subtTitle).toBe("Fator predominante");
    expect(result.predominantNames).toBe("Dominância");
    expect(result.analysis).toContain("o fator predominante é Dominância com 50 % de pontuação");
  })

  test("Deve identificar corretamente dois fatores predominantes", () => {
    
    const data: ChartData[] = [
      { dimension: "dominancia", values: 40, fill: "color-dominancia" },
      { dimension: "influencia", values: 40, fill: "color-influencia" },
      { dimension: "estabilidade", values: 15, fill: "color-estabilidade" },
      { dimension: "conformidade", values: 5, fill: "color-conformidade" },
    ]

    const result = generateAnalysis(data)

    expect(result.subtTitle).toBe("Fatores predominantes")
    expect(result.predominantNames).toBe("Dominância e Influência")
    expect(result.analysis).toContain("os fatores predominantes são Dominância e Influência, ambos com 40 %")
  })

  test("Deve lidar corretamente com quatro fatores equilibrados" , () => {
    
    const data: ChartData[] = [
      { dimension: "dominancia", values: 25, fill: "color-dominancia" },
      { dimension: "influencia", values: 25, fill: "color-influencia" },
      { dimension: "estabilidade", values: 25, fill: "color-estabilidade" },
      { dimension: "conformidade", values: 25, fill: "color-conformidade" },
    ]

    const result = generateAnalysis(data)

    expect(result.analysis).toContain("As dimensões estão equilibradas")
  })

  test("Deve identificar um fator consequente", () => {
    
    const data: ChartData[] = [
      { dimension: "dominancia", values: 45, fill: "color-dominancia" },
      { dimension: "influencia", values: 30, fill: "color-influencia" },
      { dimension: "estabilidade", values: 25, fill: "color-estabilidade" },
      { dimension: "conformidade", values: 10, fill: "color-conformidade" },
    ]

    const result = generateAnalysis(data)

    expect(result.analysis).toContain("Logo atrás, temos Influência com 30 %")
  })
})