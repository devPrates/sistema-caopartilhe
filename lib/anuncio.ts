export function formatarData(data: Date): string {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(data))
}

export function getTipoAnuncioLabel(tipo: string): string {
    const tipos: Record<string, string> = {
        ADOCAO: "Adoção",
        PERDIDO: "Perdido",
        ENCONTRADO: "Encontrado",
    }
    return tipos[tipo] || tipo
}

export function getTipoAnuncioColor(tipo: string): string {
    const colors: Record<string, string> = {
        PERDIDO: "bg-yellow-500",
        ADOCAO: "bg-green-500",
        ENCONTRADO: "bg-blue-500",
    }
    return colors[tipo]
}

export function getTipoAnimalLabel(tipo: string): string {
    const tipos: Record<string, string> = {
        GATO: "Gato",
        CACHORRO: "Cachorro",
        COELHO: "Coelho",
        OUTRO: "Outro",
    }
    return tipos[tipo] || tipo
}

export function getPorteAnimalLabel(porte: string): string {
    const portes: Record<string, string> = {
        PEQUENO: "Pequeno",
        MEDIO: "Médio",
        GRANDE: "Grande",
    }
    return portes[porte] || porte
}

export function getStatusAnuncioLabel(status: string): string {
    const statusList: Record<string, string> = {
        ATIVO: "Ativo",
        RESOLVIDO: "Resolvido",
        ADOTADO: "Adotado",
    }
    return statusList[status] || status
}