import Link from "next/link"
import { Button } from "../ui/button"
import { Github } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="pt-10 md:pt-24 pb-4 w-full space-y-4">
      <div className="flex justify-between pt-4 border-t">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg text-gray-900  dark:text-gray-100 font-bold">Teste DISC</span>
        </Link>

        <Link href="https://github.com/jonassjr/Disc-test" target="_blank" className="flex items-center space-x-2">
          <Button variant="test" size="icon">
            <Github />
          </Button>
        </Link>
      </div>

      <p className="text-center text-gray-500 dark:text-gray-600">Este projeto é de código aberto confira no  <Link href="https://github.com/jonassjr/Disc-test" className="underline text-blue-800 font-semibold">Github</Link></p>
    </footer>
  )
}