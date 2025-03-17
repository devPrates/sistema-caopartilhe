export const featuredPets = [
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


export const anunciosArray = [
    {
        id: "1",
        tipo: "PERDIDO",
        tipoAnimal: "COELHO",
        descricao: "Meu gatinho foi perdido sla aonde",
        cidade: "Navirai",
        status: "ATIVO",
        createdAt: new Date("2025-03-06T02:09:26.521Z"),
        _count: {
            comentarios: 4,
            curtidas: 7,
        },
        fotos: [
            {
                id: "asdas",
                url: "/placeholder.svg"
            }
        ],
    },
    {
        id: "2",
        tipo: "ADOCAO",
        tipoAnimal: "GATO",
        descricao: "Meu gatinho foi perdido sla aonde",
        cidade: "Navirai",
        status: "RESOLVIDO",
        createdAt: new Date("2025-03-06T02:09:26.521Z"),
        _count: {
            comentarios: 4,
            curtidas: 7,
        },
        fotos: [
            {
                id: "asdas",
                url: "/placeholder.svg"
            }
        ],
    },
    {
        id: "3",
        tipo: "ENCONTRADO",
        tipoAnimal: "CACHORRO",
        descricao: "Meu gatinho foi perdido sla aonde",
        cidade: "Navirai",
        status: "ADOTADO",
        createdAt: new Date("2025-03-06T02:09:26.521Z"),
        _count: {
            comentarios: 4,
            curtidas: 7,
        },
        fotos: [
            {
                id: "asdas",
                url: "/placeholder.svg"
            }
        ],
    }
]