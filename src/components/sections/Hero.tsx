import { Github, MoveRight } from "lucide-react";
import Link from "next/link"

export const Hero = () => {
  return (
    <section className="max-w-[600px] flex flex-col gap-8 mx-auto row-start-2 items-center sm:items-start">
      <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none">
        Descubra mais sobre sua personalidade com um teste{" "}
        <span className="text-blue-500">gratuito</span> e de código
        aberto.
      </h1>

      <p className="mx-auto max-w-[450px] text-center text-gray-500 md:text-lg dark:text-gray-400">
        Com 40 perguntas rápidas, você levará cerca de 5 minutos para completar e obter insights valiosos sobre si mesmo.
      </p>

      <div className="flex gap-4 self-center items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex gap-2 items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6"
          href="/disc-test"
        >
          Faça um teste Agora
          <MoveRight className="animate-forward" />
        </Link>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex gap-2 items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://github.com/jonassjr/Disc-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          Github
        </Link>
      </div>
    </section>
  )
}