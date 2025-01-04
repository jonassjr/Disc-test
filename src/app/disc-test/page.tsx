"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { Questions, questions } from "./questions"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useQuiz } from "@/contexts/QuizContext"

export default function DiscTest() {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number>(0)

  const { setResponses } = useQuiz()

  const router = useRouter()

  const currentOption: Questions | null = currentOptionIndex < questions.length ? questions[currentOptionIndex] : null;

  const progress = ((currentOptionIndex) / questions.length) * 100

  const handleSelectedOption = (dimension: string) => {
    setResponses(prevResponses => {
      return [...prevResponses, dimension]
    })

    if (currentOptionIndex < questions.length) {
      setCurrentOptionIndex((prev) => prev + 1)
    }
  }

  useEffect(() => {

    if (currentOptionIndex === questions.length) {
      router.push("/results")
    }

  }, [currentOptionIndex, router])

  return (
    <main className="w-full min-h-screen grid place-content-center">
      <section className="w-[800px] h-[500px] flex flex-col space-y-14 p-12 shadow border rounded-lg ">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{currentOptionIndex}/{questions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        {currentOption ? (
          <div className="space-y-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Selecione o adjetivo que melhor descreve você!
              </h1>
              <p className="text-muted-foreground">
                Mesmo que você se identifique com mais de um, escolha o que mais se encaixa.
              </p>
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
              {currentOption?.options
                .map((option) => (
                  <Button
                    variant={"outline"}
                    key={option.id}
                    className={`p-9 cursor-pointer transition-all hover:border-primary `}
                    onClick={() => handleSelectedOption(option.dimension)}
                  >
                    {option.text}
                  </Button>
                ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Gerando resultados!
              </h1>
              <p className="text-muted-foreground">Analisando seu perfil DISC...</p>
            </div>

            <div className="h-full grid place-content-center">
              <Loader2 className="animate-spin 2s" size={36} />
            </div>
          </div>)
        }
      </section >
    </main >
  )
}