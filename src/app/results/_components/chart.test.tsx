import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Chart } from "./Chart"

jest.mock("recharts", () => ({
  ...jest.requireActual("recharts"),
  BarChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Bar: () => <div>Bar</div>,
  XAxis: () => <div>X Axis</div>,
  YAxis: () => <div>Y Axis</div>,
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div style={{ width: "800px", height: "600px" }}>{children}</div>
  ),
}));

const data = [
  {dimension: "dominancia", values: 25, fill: "var(--color-dominancia)"},
  {dimension: "influencia",  values: 30, fill: "var(--color-influencia)"},
  {dimension: "estabilidade", values: 25, fill: "var(--color-estabilidade)"},
  {dimension: "conformidade", values: 20,fill: "var(--color-conformidade)"}
]

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Chart component", () => {
  
  test("Deve renderizar o componente de gráfico", () => {
    
    render(<Chart chartData={data}/>)

    const chart = screen.getByTestId("chart")

    expect(chart).toBeInTheDocument()
  })
})