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
    href: '#about'
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
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-lg text-blue-500 font-bold">DISC</span>
      </Link>

      {/* Navegação mobile */}
      <div className={`fixed ${toggle ? "top-0" : "-top-full"}
        bg-background left-0 w-full py-12 px-20 text-center transition-top duration-500 
        shadow sm:hidden z-20`}>
        <ul className="flex flex-col items-center gap-y-4">
          {navLinks.map((link) => (
            <li key={link.id} className="text-sm font-medium hover:text-blue-500">
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

      {/* Navegação Desktop */}
      <div className="hidden sm:flex w-full justify-between items-center">
        <ul className="flex items-center gap-x-4">
          {navLinks.map((link) => (
            <li key={link.id} className="text-sm font-medium hover:text-blue-500 ">
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
            <Link href="https://github.com/" target="_blank" className="flex items-center space-x-2">
              <Button variant="test" size="icon">
                <Github />
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      <div className="sm:hidden flex items-center">
        <div className="flex items-center gap-2 ">
          <ModeToggle />
          <Button
            variant="test"
            size="icon"

          >
            <Github />
          </Button>

          <Button
            variant="test"
            size="icon"
            onClick={() => setToggle(true)}
          >
            <Menu />
          </Button>

        </div>
      </div>

      {/* <div className="container  padding-x flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-gray-500 font-semibold">DISC</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/resultado" className="text-sm font-medium hover:text-blue-500">
              Resutado
            </Link>
            <Link href="/compare" className="text-sm font-medium hover:text-blue-500">
              Compare
            </Link>
            <Link href="/artigos" className="text-sm font-medium hover:text-blue-500">
              Artigos
            </Link>
            <Link href="/sobre" className="text-sm font-medium hover:text-blue-500">
              Sobre
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
          </nav>
        </div>
      </div> */}
    </header >
  )
}
