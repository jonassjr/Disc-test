import { Header } from "@/components/Header";
import { Github, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Header />

      <section className="max-w-[700px] flex flex-col gap-8 padding-x padding-y self-center row-start-2 items-center sm:items-start">
        <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none">
          Aprenda a se conhecer melhor com um teste de personalidade{" "}
          <span className="text-blue-500">gratuito</span> e de código
          aberto.
        </h1>

        <p className="mx-auto max-w-[700px] text-center text-gray-500 md:text-lg dark:text-gray-400">
          O teste a seguir contém 120 questões que levam cerca de 10
          minutos para serem concluídas.
        </p>

        <div className="flex gap-4 self-center items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex gap-2 items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6"
            href="/"
          >
            Faça um teste Agora
            <MoveRight className="animate-forward" />
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex gap-2 items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Github
          </a>
        </div>
      </section>
    </main >
  );
}
