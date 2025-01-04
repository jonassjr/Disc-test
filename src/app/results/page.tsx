"use client"

import { Header } from "@/components/Header"
import { calculateResults } from "@/utils/calculateResult"
import { useRouter } from "next/navigation"

import { Chart } from "./_components/Chart"
import { generateAnalysis } from "@/utils/generateAnalisys"

import { TrendingUp } from "lucide-react"
import { useQuiz } from "@/contexts/QuizContext"
import { useEffect } from "react"

export default function Results() {

  const { responses } = useQuiz()

  const router = useRouter()

  useEffect(() => {
    if (responses.length === 0) {
      router.back()
    }
  }, [responses, router])

  const data = calculateResults(responses)

  const { analysis, predominantNames, descriptions, subtTitle } = generateAnalysis(data)

  return (
    <main className="w-full flex flex-col min-h-screen">
      <Header />

      <section className="padding-y padding-x">
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-5xl lg:text-4xl/none">Resultados</h1>

        <section className="mt-8 flex gap-12">
          <div className=" w-[400px]">
            <Chart chartData={data} />
          </div>
          <article className=" flex-1">
            <header>
              <div className="flex gap-2 items-center font-medium leading-none">
                <p className="text-xl">{predominantNames}</p><TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                {subtTitle}
              </div>
            </header>
            <div className="space-y-2">
              <p className="mt-4">{analysis}</p>
              <p>{descriptions}</p>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}