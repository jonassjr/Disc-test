import { calculateResults, ChartData } from "./calculateResult"

describe("Calculate Results", () => {
  test("Deve calcular corretamente as porcentagens para respostas equilibradas", () => {
    const  responses = ["D", "I", "S", "C"]

    const expected: ChartData[] = [
      { dimension: "dominancia", values: 25, fill: "var(--color-dominancia)" },
      { dimension: "influencia", values: 25, fill: "var(--color-influencia)" },
      { dimension: "estabilidade", values: 25, fill: "var(--color-estabilidade)" },
      { dimension: "conformidade", values: 25, fill: "var(--color-conformidade)" },
    ]

    expect(calculateResults(responses)).toEqual(expected)
  })

  test("Deve calcuar corretamente quando há mais de uma resposta do mesmo tipo", () => {
    const  responses = ["D", "D", "I", "S", "S", "S"]

    const expected: ChartData[] = [
      { dimension: "dominancia", values: 33, fill: "var(--color-dominancia)" },  // 2/6 = 33%
      { dimension: "influencia", values: 17, fill: "var(--color-influencia)" },  // 1/6 = 17%
      { dimension: "estabilidade", values: 50, fill: "var(--color-estabilidade)" }, // 3/6 = 50%
      { dimension: "conformidade", values: 0, fill: "var(--color-conformidade)" }, // 0/6 = 0%
    ]

    expect(calculateResults(responses)).toEqual(expected)
  })

  test("Deve retornar 0% para todas as dimensões quando não há respostas", () => {
    const responses: string[] = []
    const expected: ChartData[] = [
      { dimension: "dominancia", values: 0, fill: "var(--color-dominancia)" },
      { dimension: "influencia", values: 0, fill: "var(--color-influencia)" },
      { dimension: "estabilidade", values: 0, fill: "var(--color-estabilidade)" },
      { dimension: "conformidade", values: 0, fill: "var(--color-conformidade)" },
    ]
    
    expect(calculateResults(responses)).toEqual(expected)
  })

  test("Deve lidar corretamente com respostas inválidas (ignorá-las)", () => {
    const responses = ["D", "X", "I", "Y", "S", "Z"] // X, Y, Z são inválidos
    const expected: ChartData[] = [
      { dimension: "dominancia", values: 33, fill: "var(--color-dominancia)" },  // 1/3 = 33%
      { dimension: "influencia", values: 33, fill: "var(--color-influencia)" },  // 1/3 = 33%
      { dimension: "estabilidade", values: 33, fill: "var(--color-estabilidade)" }, // 1/3 = 33%
      { dimension: "conformidade", values: 0, fill: "var(--color-conformidade)" }, // 0/3 = 0%
    ]
    
    expect(calculateResults(responses)).toEqual(expected)
  })
})