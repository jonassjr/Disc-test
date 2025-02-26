import "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import DiscTest from "./page"

const pushMock = jest.fn()

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/disc-test",
  }),
}))

jest.mock("@/contexts/QuizContext", () => ({
  useQuiz: () => ({
    setResponses: jest.fn()
  }),
}))

const setResponsesMock = jest.fn()

jest.mock("@/contexts/QuizContext", () => ({
  useQuiz: () => ({
    setResponses: setResponsesMock,
  }),
}))

describe("Disc Test", () => {

  beforeEach(() => {
    jest.clearAllMocks() 
  })

  test("Deve renderizar os botões", () => {

    render(<DiscTest/>)
  
    const buttons = screen.getAllByRole("button")
    const progressBar = screen.getByRole("progressbar")
  
    expect(buttons.length).toBeGreaterThanOrEqual(4)
    expect(progressBar).toBeInTheDocument()
   
  })

  test("Deve chamar setResponses ao clicar em um botão", () => {
    
    render(<DiscTest/>)

    const buttons = screen.getAllByRole("button")
    const randomButton = buttons[Math.floor(Math.random() * buttons.length)]

    fireEvent.click(randomButton)

    expect(setResponsesMock).toHaveBeenCalledTimes(1)
  })


  test("Deve redirecionar para página results após o fim do teste", () => {
    render (<DiscTest />)
    
    
    for (let i = 0; i < 40; i++) {
      const buttons = screen.getAllByRole("button")
      const randomButton = buttons[Math.floor(Math.random() * buttons.length)]
      fireEvent.click(randomButton)
    }

    waitFor(() => expect(pushMock).toHaveBeenCalledWith("/results"))
  })
})
