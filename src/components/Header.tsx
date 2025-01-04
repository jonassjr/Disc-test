"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { useState } from "react"

const navLinks = [
  {
    id: 1,
    name: 'Sobre',
    href: '/#about'
  }
  // {
  //   id: 2,
  //   name: 'Resultado',
  //   href: '#resultado'

  // },
  // {
  //   id: 3,
  //   name: 'Artigos',
  //   href: '#artigos'

  // },
]


export function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="w-full border-b padding-x flex h-16 items-center justify-between sm:justify-normal sm:space-x-4">
      <Link href="/" className="whitespace-nowrap">
        <span className="text-lg text-gray-900 dark:text-gray-100 font-bold">Teste DISC</span>
      </Link>

      {true ? (
        <>
          {/* Navegação mobile */}
          <div className={`fixed ${toggle ? "top-0" : "-top-full"}
          bg-background left-0 w-full py-12 px-20 text-center transition-top duration-500 
          shadow sm:hidden z-20`}>
            <ul className="flex flex-col items-center gap-y-4">
              {navLinks.map((link) => (
                <li key={link.id} className="text-base font-semibold text-gray-500 hover:text-gray-400">
                  <a href={link.href}
                    onClick={() => setToggle(false)}
                  >{link.name}</a>
                </li>
              ))}
            </ul>

            <Button
              variant="test"
              size="icon"
              className=" absolute top-5 right-8 sm:hidden"
              onClick={() => setToggle(false)}
            >
              <X />
            </Button>
          </div>

          {/* Navegação desktop */}
          <div className="hidden sm:flex w-full justify-between items-center">
            <ul className="flex items-center gap-x-4">
              {navLinks.map((link) => (
                <li key={link.id} className="text-base font-semibold text-gray-500 hover:text-gray-400">
                  <a href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <nav className="flex items-center space-x-2">
                <ModeToggle />
                <Link href="https://github.com/jonassjr/Disc-test" target="_blank" className="flex items-center space-x-2">
                  <Button variant="test" size="icon">
                    <Github />
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </>
      ) : ("")
      }

      <div className="sm:hidden flex items-center">
        <div className="flex items-center gap-2 ">
          <ModeToggle />
          <Link href="https://github.com/jonassjr/Disc-test" target="_blank" className="flex items-center space-x-2">
            <Button variant="test" size="icon">
              <Github />
            </Button>
          </Link>

          <Button
            variant="test"
            size="icon"
            onClick={() => setToggle(true)}
          >
            <Menu />
          </Button>

        </div>
      </div>
    </header >
  )
}
