
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const About = () => {
  return (
    <section id="about" className="w-full flex flex-col gap-8 text-gray-500 dark:text-gray-400 scroll-m-10">
      <h2 className="font-semibold text-2xl text-center text-foreground">Sobre</h2>

      <p className="text-center">
        O teste DISC é uma ferramenta poderosa para compreender características pessoais e tendências de
        comportamento. Ele é amplamente utilizado em contextos pessoais e profissionais para identificar
        estilos de comunicação, preferências e formas de interação.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold text-foreground">O que é o Teste DISC?</AccordionTrigger>
          <AccordionContent className="text-base">
            O teste DISC é baseado em uma teoria comportamental que categoriza os perfis em quatro dimensões
            principais: Dominância, Influência, Estabilidade e Conformidade. Cada dimensão reflete diferentes
            aspectos da personalidade e comportamentos típicos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold text-foreground">Como funciona?</AccordionTrigger>
          <AccordionContent className="text-base">
            O teste é composto por perguntas simples e diretas que ajudam a mapear as suas respostas.
            Com base nas suas escolhas, o teste gera um perfil comportamental detalhado que destaca seus
            pontos fortes, tendências e áreas de melhoria.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold text-foreground">O que o teste pode me dizer?</AccordionTrigger>
          <AccordionContent className="text-base space-y-2">
            <p>O teste DISC pode revelar:</p>
            <ul className="pl-4 list-disc">
              <li >Seu estilo de comunicação preferido: Entenda como você se expressa e interage com os outros.</li>
              <li>Pontos fortes e desafios: Identifique as características que o tornam único e áreas que podem ser aprimoradas.</li>
              <li>Adequação ao trabalho em equipe: Descubra como suas preferências comportamentais influenciam suas interações no ambiente profissional e pessoal.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold text-foreground">Por que o Teste DISC é relevante hoje?</AccordionTrigger>
          <AccordionContent className="text-base">
            <p>O Teste DISC é uma ferramenta essencial para o autoconhecimento e melhoria das relações pessoais e
              profissionais. Ele ajuda a identificar padrões de comportamento, melhorar a comunicação e
              formar equipes mais eficientes.
            </p>
            <p>Em um mundo que exige flexibilidade e adaptação, o DISC oferece insights
              práticos para lidar com desafios e maximizar potencial. Sua simplicidade e aplicabilidade
              tornam-no indispensável para quem busca crescimento e conexão significativa nos dias de hoje.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}