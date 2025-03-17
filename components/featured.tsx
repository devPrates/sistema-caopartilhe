import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export default function Featured() {
  const featuredPets = [
    {
      id: 1,
      name: "Max",
      type: "Cachorro",
      breed: "Labrador",
      age: "2 anos",
      location: "Vila Mariana, São Paulo",
      date: "12/03/2023",
      image: "/placeholder.svg?height=300&width=400",
      category: "perdido",
    },
    {
      id: 2,
      name: "Luna",
      type: "Gato",
      breed: "Siamês",
      age: "1 ano",
      location: "Moema, São Paulo",
      date: "15/03/2023",
      image: "/placeholder.svg?height=300&width=400",
      category: "encontrado",
    },
    {
      id: 3,
      name: "Thor",
      type: "Cachorro",
      breed: "Vira-lata",
      age: "3 anos",
      location: "Pinheiros, São Paulo",
      date: "10/03/2023",
      image: "/placeholder.svg?height=300&width=400",
      category: "adocao",
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "perdido":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "encontrado":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "adocao":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  const getCategoryText = (category: string) => {
    switch (category) {
      case "perdido":
        return "Perdido"
      case "encontrado":
        return "Encontrado"
      case "adocao":
        return "Para Adoção"
      default:
        return category
    }
  }

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Pets que precisam da sua ajuda</h2>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-200">
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
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPets.map((pet) => (
            <Card key={pet.id} className="overflow-hidden h-full transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
                <Badge className={`absolute right-2 top-2 ${getCategoryColor(pet.category)}`} variant="outline">
                  {getCategoryText(pet.category)}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{pet.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {pet.type} • {pet.breed} • {pet.age}
                </p>
              </CardHeader>
              <CardContent className="space-y-2 pb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{pet.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{pet.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/${pet.category}/${pet.id}`}>Ver detalhes</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Ver todos os pets
          </Button>
        </div>
      </div>
    </section>
  )
}

