"use client"

import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatarData, getTipoAnuncioLabel, getTipoAnuncioColor, getTipoAnimalLabel } from "@/lib/anuncio"

interface AnuncioCardProps {
  anuncio: {
    id: string
    tipo: string
    tipoAnimal: string
    descricao: string
    cidade: string
    status: string
    createdAt: Date
    fotos: { url: string }[]
    _count?: {
      comentarios: number
      curtidas: number
    }
  }
  onCurtir?: (id: string) => void
  usuarioCurtiu?: boolean
}

export function AnuncioCard({ anuncio, onCurtir, usuarioCurtiu = false }: AnuncioCardProps) {
  const { id, tipo, descricao, cidade, createdAt, fotos, tipoAnimal } = anuncio
  const fotoUrl = fotos && fotos.length > 0 ? fotos[0].url : "/placeholder.svg"

  return (
    <Card className="overflow-hidden">
      <Link href={`/anuncios/${id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={fotoUrl || "/placeholder.svg"}
            alt={descricao.substring(0, 20)}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <div
            className={`absolute right-2 top-2 rounded-md px-2 py-1 text-xs font-medium text-white ${getTipoAnuncioColor(tipo)}`}
          >
            {getTipoAnuncioLabel(tipo)}
          </div>
        </div>
      </Link>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            <Link href={`/anuncios/${id}`}>{getTipoAnimalLabel(tipoAnimal)}</Link>
          </CardTitle>
          <span className="text-xs text-muted-foreground">{cidade}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="line-clamp-2 text-sm text-muted-foreground">{descricao}</p>
        <p className="mt-2 text-xs text-muted-foreground">{formatarData(createdAt)}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 p-0"
            onClick={(e) => {
              e.preventDefault()
              if (onCurtir) onCurtir(id)
            }}
          >
            <Heart className={`h-4 w-4 ${usuarioCurtiu ? "fill-red-500 text-red-500" : ""}`} />
            <span>{anuncio._count?.curtidas || 0}</span>
          </Button>
          <Link href={`/anuncios/${id}#comentarios`} className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{anuncio._count?.comentarios || 0}</span>
          </Link>
        </div>
        <Link href={`/anuncios/${id}`}>
          <Button size="sm">Ver mais</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

