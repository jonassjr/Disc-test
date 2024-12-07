"use client"

import { ReactNode, createContext, useContext, useState } from "react"

interface QuizContextType {
  responses: string[]
  setResponses: React.Dispatch<React.SetStateAction<string[]>>
}

export const QuizContext = createContext({} as QuizContextType)

interface QuizProviderProps {
  children: ReactNode
}

export function QuizProvider({ children }: QuizProviderProps) {
  const [responses, setResponses] = useState<string[]>([''])

  return (
    <QuizContext.Provider value={{ responses, setResponses }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => useContext(QuizContext)