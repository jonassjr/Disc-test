"use client"

import { Header } from "@/components/Header";
import { useQuiz } from "@/contexts/QuizContext";
import { calculateResults } from "@/utils/calculateResult";

import { Chart } from "./_components/Chart"

export default function Results() {
  const { responses } = useQuiz()

  const chartData = calculateResults(responses)
  console.log(chartData)

  return (
    <main className="w-full flex flex-col min-h-screen">
      <Header />

      <section className="padding-y padding-x">
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-5xl lg:text-4xl/none">Resultados</h1>

        <section className="mt-8 w-[450px]">
          <Chart />
        </section>
      </section>
    </main>
  )
}

const chartData = [
  { Dimensão: "Dominancia", valor: 12 },
  { Dimensão: "Inflência", valor: 18 },
  { Dimensão: "Estabilidade", valor: 10 },
  { Dimensão: "Conformidade", valor: 10 }
]