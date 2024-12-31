import { ChartData } from "./calculateResult"

const dimensions = {
  dominancia: "Dominância",
  estabilidade: "Estabilidade",
  influencia: "Influência",
  conformidade: "Conformidade",
}

const dimensionDescriptions = {
  dominancia: "A dominância reflete assertividade, tomada de decisão rápida e foco em resultados.",
  estabilidade: "A estabilidade indica uma tendência a manter a calma, ser consistente e valorizar harmonia.",
  influencia: "A influeência representa sociabilidade, entusiasmo e facilidade em influenciar pessoas.",
  conformidade: "A comformidade demonstra atenção aos detalhes, disciplina e foco em regras e padrões."
};

export function generateAnalysis(data: ChartData[]) {

  // Ordenar os dados em ordem decrescente de valores
  const sortedData = [...data].sort((a, b) => b.values - a.values)

  const predominantValue = sortedData[0]
  const topValue = sortedData[0].values

  // Identificar fatores predominantes
  const predominants = sortedData.filter((item) => item.values === topValue)

  // Definir fator predominante
  let predominantNames = dimensions[predominantValue.dimension as keyof typeof dimensions]

  // Identificar segundo maior valor
  const secondMax = Math.max(
    ...sortedData.filter((item) => item.values < topValue).map((item) => item.values)
  )

  // Identificar fatores cosequentes
  const cosequentes = sortedData.filter((item) => item.values === secondMax)

  const descriptions = predominants
    .map(item => ` ${dimensionDescriptions[item.dimension as keyof typeof dimensionDescriptions]}`)
    .join(" ");

  // Construir a análise
  let analysis = ""
  let subtTitle = "Fator predominante"

  if (predominants.length === 1) {
    analysis = `Analisando os resultados, o fator predominante é ${dimensions[predominantValue.dimension as keyof typeof dimensions]
      } com ${topValue} % de pontuação.`
  }

  if (predominants.length === 2) {
    subtTitle = "Fatores predominantes"

    predominantNames = predominants
      .map((item) => dimensions[item.dimension as keyof typeof dimensions])
      .join(" e ")
    analysis = `Analisando os resultados, os fatores predominantes são ${predominantNames}, ambos com ${topValue} %.`
  }

  if (predominants.length === 3) {
    subtTitle = "Fatores predominantes"

    const lastItem = predominants.pop()

    predominantNames = predominants
      .map((item) => dimensions[item.dimension as keyof typeof dimensions])
      .join(", ")

    predominantNames = predominantNames + ` e ${lastItem?.dimension}`

    analysis = `Analisando os resultados, os fatores predominantes são ${predominantNames} e ${lastItem?.dimension}, todos com ${topValue} %.`
  }

  if (predominants.length === 4) {
    subtTitle = "Fatores predominantes"

    const lastItem = predominants.pop()

    predominantNames = predominants
      .map((item) => dimensions[item.dimension as keyof typeof dimensions])
      .join(", ")

    predominantNames = predominantNames + ` e ${lastItem?.dimension}`

  }

  if (cosequentes.length > 0) {
    const cosequenteNames = cosequentes
      .map((item) => dimensions[item.dimension as keyof typeof dimensions])
      .join(", ")
    if (cosequentes.length === 1) {
      analysis += ` Logo atrás, temos ${cosequenteNames} com ${secondMax} %,`
    } else {
      analysis += ` Logo atrás, temos ${cosequenteNames}, cada uma com ${secondMax} %.`
    }
  }

  // Identificar equilíbrio
  const totalSum = sortedData.reduce((sum, item) => sum + item.values, 0)
  const balanceThreshold = 10; // Diferença máxima em % para considerar "equilibrado"
  const isBalanced = sortedData.every(
    (item) => Math.abs(item.values - totalSum / sortedData.length) <= balanceThreshold
  );

  if (isBalanced) {
    analysis += ` As dimensões estão equilibradas, sugerindo flexibilidade em diferentes situações.`
  } else {
    analysis += ` O perfil apresenta uma predominância clara em ${predominantNames}, indicando um foco maior nessa(s) característica(s).`
  }

  return {
    analysis,
    predominantNames,
    descriptions,
    subtTitle
  }
}
