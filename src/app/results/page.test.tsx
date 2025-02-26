import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { useRouter } from "next/navigation"
import Results from "./page"
import { useQuiz } from "@/contexts/QuizContext"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

jest.mock("@/contexts/QuizContext", () => ({
  useQuiz: jest.fn(),
}))

describe("Results page" ,() => {
 
  const backMock = jest.fn()

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      back: backMock,
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      pathname: "/disc-test",
    })
  })

  test("Deve redirecionar para página anterior se responses estiver vazio", () => {
    
    (useQuiz as jest.Mock).mockReturnValue({ responses: [] })

    render(<Results />)

    expect(useRouter().back).toHaveBeenCalled()
  })
})