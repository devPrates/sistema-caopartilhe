
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnuncioCard } from "./anuncio-card"
import { anunciosArray } from "@/lib/data"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Featured() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Pets que precisam da sua ajuda</h2>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-yellow-200 text-yellow-800 hover:bg-yellow-300">
              Perdidos
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Encontrados
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-200">
              Para Adoção
            </Badge>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {anunciosArray.map((anuncio) => (
            <AnuncioCard key={anuncio.id} anuncio={anuncio} />
          ))}
        </div>
        <div className="flex justify-center mt-8">

          <Link href="/anuncios" className={cn(buttonVariants({ variant: "outline" }))}>
            Ver todos os pets
          </Link>

        </div>
      </div>
    </section>
  )
}

