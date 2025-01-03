import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Cards } from "@/components/sections/Cards";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";


export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Header nav={true} />
      <section className="padding-x padding-y">
        <Hero />
      </section>
      <section className="padding-x padding-y">
        <Cards />
      </section>
      <section className="padding-y padding-x">
        <About />
      </section>
      <footer className="padding-x">
        <Footer />
      </footer>
    </main >
  )
}
