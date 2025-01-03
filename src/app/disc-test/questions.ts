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
      { id: 4, text: "Analítico", dimension: "C" }
    ]
  },
  {
    id: 6,
    options: [
      { id: 1, text: "Resoluto", dimension: "D" },
      { id: 2, text: "Eloquente", dimension: "I" },
      { id: 3, text: "Agradável", dimension: "S" },
      { id: 4, text: "Organizado", dimension: "C" }
    ]
  },
  {
    id: 7,
    options: [
      { id: 1, text: "Proativo", dimension: "D" },
      { id: 2, text: "Sociável", dimension: "I" },
      { id: 3, text: "Estável", dimension: "S" },
      { id: 4, text: "Minucioso", dimension: "C" }
    ]
  },
  {
    id: 8,
    options: [
      { id: 1, text: "Autoconfiante", dimension: "D" },
      { id: 2, text: "Encantador", dimension: "I" },
      { id: 3, text: "Leal", dimension: "S" },
      { id: 4, text: "Metódico", dimension: "C" }
    ]
  },
  {
    id: 9,
    options: [
      { id: 1, text: "Iniciador", dimension: "D" },
      { id: 2, text: "Dinâmico", dimension: "I" },
      { id: 3, text: "Apoiado", dimension: "S" },
      { id: 4, text: "Conservador", dimension: "C" }
    ]
  },
  {
    id: 10,
    options: [
      { id: 1, text: "Pragmático", dimension: "D" },
      { id: 2, text: "Expressivo", dimension: "I" },
      { id: 3, text: "Pacificador", dimension: "S" },
      { id: 4, text: "Precavido", dimension: "C" }
    ]
  },
  {
    id: 11,
    options: [
      { id: 1, text: "Determinado", dimension: "D" },
      { id: 2, text: "Carismático", dimension: "I" },
      { id: 3, text: "Tolerante", dimension: "S" },
      { id: 4, text: "Disciplinado", dimension: "C" }
    ]
  },
  {
    id: 12,
    options: [
      { id: 1, text: "Competente", dimension: "D" },
      { id: 2, text: "Engajado", dimension: "I" },
      { id: 3, text: "Dedicado", dimension: "S" },
      { id: 4, text: "Sistemático", dimension: "C" }
    ]
  },
  {
    id: 13,
    options: [
      { id: 1, text: "Independente", dimension: "D" },
      { id: 2, text: "Afetivo", dimension: "I" },
      { id: 3, text: "Empático", dimension: "S" },
      { id: 4, text: "Lógico", dimension: "C" }
    ]
  },
  {
    id: 14,
    options: [
      { id: 1, text: "Enérgico", dimension: "D" },
      { id: 2, text: "Confiante", dimension: "I" },
      { id: 3, text: "Próximo", dimension: "S" },
      { id: 4, text: "Ajuizado", dimension: "C" }
    ]
  },
  {
    id: 15,
    options: [
      { id: 1, text: "Resiliente", dimension: "D" },
      { id: 2, text: "Espontâneo", dimension: "I" },
      { id: 3, text: "Prudente", dimension: "S" },
      { id: 4, text: "Criterioso", dimension: "C" }
    ]
  },
  {
    id: 16,
    options: [
      { id: 1, text: "Decisivo", dimension: "D" },
      { id: 2, text: "instigador", dimension: "I" },
      { id: 3, text: "Generoso", dimension: "S" },
      { id: 4, text: "Racional", dimension: "C" }
    ]
  },
  {
    id: 17,
    options: [
      { id: 1, text: "Direto", dimension: "D" },
      { id: 2, text: "Animado", dimension: "I" },
      { id: 3, text: "Reservado", dimension: "S" },
      { id: 4, text: "Estruturado", dimension: "C" }
    ]
  },
  {
    id: 18,
    options: [
      { id: 1, text: "Audacioso", dimension: "D" },
      { id: 2, text: "Atraente", dimension: "I" },
      { id: 3, text: "Amável", dimension: "S" },
      { id: 4, text: "Ponderado", dimension: "C" }
    ]
  },
  {
    id: 19,
    options: [
      { id: 1, text: "Prático", dimension: "D" },
      { id: 2, text: "Amigável", dimension: "I" },
      { id: 3, text: "Fiel", dimension: "S" },
      { id: 4, text: "Crítico", dimension: "C" }
    ]
  },
  {
    id: 20,
    options: [
      { id: 1, text: "Focado", dimension: "D" },
      { id: 2, text: "Expansivo", dimension: "I" },
      { id: 3, text: "Equilibrado", dimension: "S" },
      { id: 4, text: "Coerente", dimension: "C" }
    ]
  },
  {
    id: 21,
    options: [
      { id: 1, text: "Obstinado", dimension: "D" },
      { id: 2, text: "Espontâneo", dimension: "I" },
      { id: 3, text: "Amigável", dimension: "S" },
      { id: 4, text: "Alinhado", dimension: "C" }
    ]
  },
  {
    id: 22,
    options: [
      { id: 1, text: "Assertivo", dimension: "D" },
      { id: 2, text: "Intenso", dimension: "I" },
      { id: 3, text: "Sensível", dimension: "S" },
      { id: 4, text: "Sistemático", dimension: "C" }
    ]
  },
  {
    id: 23,
    options: [
      { id: 1, text: "Confiante", dimension: "D" },
      { id: 2, text: "Charmoso", dimension: "I" },
      { id: 3, text: "Tranquilo", dimension: "S" },
      { id: 4, text: "Exato", dimension: "C" }
    ]
  },
  {
    id: 24,
    options: [
      { id: 1, text: "Persistente", dimension: "D" },
      { id: 2, text: "Ousado", dimension: "I" },
      { id: 3, text: "Solidário", dimension: "S" },
      { id: 4, text: "Cauteloso", dimension: "C" }
    ]
  },
  {
    id: 25,
    options: [
      { id: 1, text: "Estratégico", dimension: "D" },
      { id: 2, text: "Aberto", dimension: "I" },
      { id: 3, text: "Próximo", dimension: "S" },
      { id: 4, text: "Minucioso", dimension: "C" }
    ]
  },
  {
    id: 26,
    options: [
      { id: 1, text: "Pragmático", dimension: "D" },
      { id: 2, text: "Dinâmico", dimension: "I" },
      { id: 3, text: "Fiel", dimension: "S" },
      { id: 4, text: "Lógico", dimension: "C" }
    ]
  },
  {
    id: 27,
    options: [
      { id: 1, text: "Enérgico", dimension: "D" },
      { id: 2, text: "Motivador", dimension: "I" },
      { id: 3, text: "Atencioso", dimension: "S" },
      { id: 4, text: "Precavido", dimension: "C" }
    ]
  },
  {
    id: 28,
    options: [
      { id: 1, text: "Líder", dimension: "D" },
      { id: 2, text: "Inspirador", dimension: "I" },
      { id: 3, text: "Cuidadoso", dimension: "S" },
      { id: 4, text: "Analítico", dimension: "C" }
    ]
  },
  {
    id: 29,
    options: [
      { id: 1, text: "Ambicioso", dimension: "D" },
      { id: 2, text: "Criativo", dimension: "I" },
      { id: 3, text: "Paciente", dimension: "S" },
      { id: 4, text: "Rigoroso", dimension: "C" }
    ]
  },
  {
    id: 30,
    options: [
      { id: 1, text: "Competente", dimension: "D" },
      { id: 2, text: "Extrovertido", dimension: "I" },
      { id: 3, text: "Atencioso", dimension: "S" },
      { id: 4, text: "Realista", dimension: "C" }
    ]
  },
  {
    id: 31,
    options: [
      { id: 1, text: "Decisivo", dimension: "D" },
      { id: 2, text: "Carismático", dimension: "I" },
      { id: 3, text: "Trabalhador", dimension: "S" },
      { id: 4, text: "Meticuloso", dimension: "C" }
    ]
  },
  {
    id: 32,
    options: [
      { id: 1, text: "Desafiador", dimension: "D" },
      { id: 2, text: "Empático", dimension: "I" },
      { id: 3, text: "Comunicativo", dimension: "S" },
      { id: 4, text: "Perfeccionista", dimension: "C" }
    ]
  },
  {
    id: 33,
    options: [
      { id: 1, text: "Inovador", dimension: "D" },
      { id: 2, text: "Alegre", dimension: "I" },
      { id: 3, text: "Cooperativo", dimension: "S" },
      { id: 4, text: "Preciso", dimension: "C" }
    ]
  },
  {
    id: 34,
    options: [
      { id: 1, text: "Assertivo", dimension: "D" },
      { id: 2, text: "Vibrante", dimension: "I" },
      { id: 3, text: "Leal", dimension: "S" },
      { id: 4, text: "Detalhista", dimension: "C" }
    ]
  },
  {
    id: 35,
    options: [
      { id: 1, text: "Organizado", dimension: "D" },
      { id: 2, text: "Comunicativo", dimension: "I" },
      { id: 3, text: "Flexível", dimension: "S" },
      { id: 4, text: "Estruturado", dimension: "C" }
    ]
  },
  {
    id: 36,
    options: [
      { id: 1, text: "Proativo", dimension: "D" },
      { id: 2, text: "Aficionado", dimension: "I" },
      { id: 3, text: "Acessível", dimension: "S" },
      { id: 4, text: "Sistemático", dimension: "C" }
    ]
  },
  {
    id: 37,
    options: [
      { id: 1, text: "Motivador", dimension: "D" },
      { id: 2, text: "Comunicativo", dimension: "I" },
      { id: 3, text: "Tolerante", dimension: "S" },
      { id: 4, text: "Coeso", dimension: "C" }
    ]
  },
  {
    id: 38,
    options: [
      { id: 1, text: "Competitivo", dimension: "D" },
      { id: 2, text: "Sugestivo", dimension: "I" },
      { id: 3, text: "Apoiado", dimension: "S" },
      { id: 4, text: "Estruturado", dimension: "C" }
    ]
  },
  {
    id: 39,
    options: [
      { id: 1, text: "Focado", dimension: "D" },
      { id: 2, text: "Envolvente", dimension: "I" },
      { id: 3, text: "Respeitoso", dimension: "S" },
      { id: 4, text: "Detalhado", dimension: "C" }
    ]
  },
  {
    id: 40,
    options: [
      { id: 1, text: "Resoluto", dimension: "D" },
      { id: 2, text: "Sociável", dimension: "I" },
      { id: 3, text: "Compreensivo", dimension: "S" },
      { id: 4, text: "Congruente", dimension: "C" }
    ]
  }
]
