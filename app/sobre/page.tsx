import Navbar from "@/components/navbar"
import Link from "next/link"
import { Search, MapPin, Heart, PawPrint } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SobrePage() {
    return (
        <section>
            <Navbar />
            <div className="container py-8">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-8 flex flex-col items-center text-center">
                        <PawPrint className="mb-4 h-16 w-16 text-primary" />
                        <h1 className="mb-4 text-4xl font-bold">Sobre a PetONG</h1>
                        <p className="text-lg text-muted-foreground">Conectando animais a lares amorosos desde 2023</p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold">Nossa Missão</h2>
                            <p className="text-muted-foreground">
                                A PetONG nasceu da necessidade de criar uma plataforma centralizada para ajudar animais em situação de
                                vulnerabilidade. Nossa missão é facilitar o processo de adoção, ajudar a encontrar animais perdidos e
                                reunir animais encontrados com seus tutores.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold">Como podemos ajudar?</h2>
                            <p className="text-muted-foreground">
                                Escolha uma das opções abaixo para começar
                            </p>
                            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                                <Link href="/perdidos">
                                    <Card className="h-full transition-all hover:shadow-lg">
                                        <CardHeader className="pb-2">
                                            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                                <Search className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle><p className="text-2xl"> Animais Perdidos</p></CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-500  text-justify">Procure por animais que foram perdidos e ajude a encontrá-los</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link href="/encontrados">
                                    <Card className="h-full transition-all hover:shadow-lg">
                                        <CardHeader className="pb-2">
                                            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                                <MapPin className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle> <p className="text-2xl">Animais Encontrados</p></CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-500  text-justify">Veja animais que foram encontrados e estão procurando seus donos</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link href="/adocao">
                                    <Card className="h-full transition-all hover:shadow-lg">
                                        <CardHeader className="pb-2">
                                            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                                <Heart className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle> <p className="text-2xl">Adoção</p></CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-500  text-justify">Encontre um novo amigo para fazer parte da sua família</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold">Nossa Equipe</h2>
                            <p className="mb-4 text-muted-foreground">
                                Somos um grupo de voluntários apaixonados por animais, dedicados a fazer a diferença na vida deles. Nossa
                                equipe é composta por desenvolvedores, designers, veterinários e amantes de animais em geral.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold">Como Você Pode Ajudar</h2>
                            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                                <li>Adote um animal em vez de comprar</li>
                                <li>Compartilhe os anúncios de animais perdidos e encontrados</li>
                                <li>Crie anúncios para animais que precisam de um lar</li>
                                <li>Seja voluntário em ONGs e abrigos locais</li>
                                <li>Doe para organizações que cuidam de animais abandonados</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold">Contato</h2>
                            <p className="text-muted-foreground">
                                Para mais informações, entre em contato conosco pelo email{" "}
                                <a href="mailto:contato@petong.org" className="text-primary underline">
                                    contato@petong.org
                                </a>{" "}
                                ou pelo telefone (11) 1234-5678.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

