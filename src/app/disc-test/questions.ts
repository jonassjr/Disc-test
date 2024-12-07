export interface Questions {
  id: number,
  options: {
    id: number,
    text: string,
    dimension: string
  }[],
}

export const questions: Questions[] = [
  {
    id: 1,
    options: [
      { id: 1, text: "Decidido", dimension: "D" },
      { id: 2, text: "Entusiasta", dimension: "I" },
      { id: 3, text: "Paciente", dimension: "S" },
      { id: 4, text: "Perfeccionista", dimension: "C" }
    ]
  },
  {
    id: 2,
    options: [
      { id: 1, text: "Direto", dimension: "D" },
      { id: 2, text: "Persuasivo", dimension: "I" },
      { id: 3, text: "Compreensivo", dimension: "S" },
      { id: 4, text: "Detalhista", dimension: "C" }
    ]
  },
  {
    id: 3,
    options: [
      { id: 1, text: "Competitivo", dimension: "D" },
      { id: 2, text: "Alegre", dimension: "I" },
      { id: 3, text: "Tranquilo", dimension: "S" },
      { id: 4, text: "Preciso", dimension: "C" }
    ]
  },
  {
    id: 4,
    options: [
      { id: 1, text: "Determinado", dimension: "D" },
      { id: 2, text: "Charmoso", dimension: "I" },
      { id: 3, text: "Confiável", dimension: "S" },
      { id: 4, text: "Cauteloso", dimension: "C" }
    ]
  },
  {
    id: 5,
    options: [
      { id: 1, text: "Corajoso", dimension: "D" },
      { id: 2, text: "Inspirador", dimension: "I" },
      { id: 3, text: "Calmo", dimension: "S" },
      { id: 4, text: "Analático", dimension: "C" }
    ]
  },
]