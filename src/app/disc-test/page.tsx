"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

export default function DiscTest() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const currentQuestion = 12
  const totalQuestions = 40
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    < main className="w-full min-h-screen grid place-content-center" >
      <section className="w-[800px] h-[500px] flex flex-col space-y-14 p-12 shadow border rounded-lg ">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{currentQuestion}/{totalQuestions}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Selecione o adjetivo que melhor descreve você!
            </h1>
            <p className="text-muted-foreground">
              Mesmo que você se identifique com mais de um, escolha o que mais se encaixa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Energético", "Sociável", "Controlado", "Atencioso"].map((option) => (
              <Button
                variant={"outline"}
                key={option}
                className={`p-9 cursor-pointer transition-all hover:border-primary ${selectedOption === option
                  ? "border border-primary bg-primary/5 "
                  : "border border-border bg-card hover:bg-accent "
                  }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </Button>
            ))}

          </div>
        </div>
      </section>
    </main >
  )
}