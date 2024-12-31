import { Banknote, ChartColumnBig, Github, MousePointer2 } from "lucide-react"

export const Cards = () => {
  return (
    <section className="max-w-[1400px] mx-auto w-full h-full grid md:grid-cols-2 min-[1180px]:grid-cols-4 gap-4">
      <article className="w-full p-4 flex space-y-2 flex-col border rounded-md shadow">
        <div className="grid place-content-center w-14 h-14 rounded-full bg-border">
          <Banknote />
        </div>
        <h3 className="font-semibold">Gratuito</h3>
        <p className="text-gray-500 dark:text-gray-400">Acesse o teste DISC, descubra suas características e
          tendências de comportamento sem pagar nada.</p>
      </article>
      <article className="w-full p-4 flex space-y-2 flex-col border rounded-md shadow">
        <div className="grid place-content-center w-14 h-14 rounded-full bg-border">
          <Github />
        </div>
        <h3 className="font-semibold">Código Aberto</h3>
        <p className="text-gray-500 dark:text-gray-400">O projeto é acessível. Confira, modifique e contribua com o código disponível no GitHub</p>
      </article>
      <article className="w-full p-4 flex space-y-2 flex-col border rounded-md shadow">
        <div className="grid place-content-center w-14 h-14 rounded-full bg-border">
          <MousePointer2 />
        </div>
        <h3 className="font-semibold">Fácil de Usar</h3>
        <p className="text-gray-500 dark:text-gray-400">Uma interface clara e intuitiva para que você se concentre no teste.</p>
      </article>
      <article className="w-full p-4 flex space-y-2 flex-col border rounded-md shadow">
        <div className="grid place-content-center w-14 h-14 rounded-full bg-border">
          <ChartColumnBig />
        </div>
        <h3 className="font-semibold">Resultados Instantâneos</h3>
        <p className="text-gray-500 dark:text-gray-400">Veja seus resultados assim que completar o teste. Nada de esperar!</p>
      </article>
    </section >
  )
}