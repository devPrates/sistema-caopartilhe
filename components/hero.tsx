import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-12 md:py-16 bg-primary/5">
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Encontre, Reporte ou Adote um Pet
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Ajudamos a reunir pets perdidos com suas famílias e encontrar novos lares para animais que precisam.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link href="/" className={cn(buttonVariants({ variant: "default" }))}>Ver todos os pets</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

