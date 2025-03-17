import { CheckCircle, Search, Heart, Share2 } from "lucide-react"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HowItWorks() {
    const steps = [
        {
            icon: <Search className="h-6 w-6 text-primary" />,
            title: "Procure",
            description: "Busque por animais perdidos, encontrados ou disponíveis para adoção em sua região.",
        },
        {
            icon: <Share2 className="h-6 w-6 text-primary" />,
            title: "Compartilhe",
            description: "Ajude a divulgar os animais para aumentar as chances de encontrá-los.",
        },
        {
            icon: <Heart className="h-6 w-6 text-primary" />,
            title: "Ajude",
            description: "Entre em contato com os tutores ou adote um animal que precisa de um lar.",
        },
        {
            icon: <CheckCircle className="h-6 w-6 text-primary" />,
            title: "Faça a diferença",
            description: "Cada compartilhamento ou adoção ajuda a transformar a vida de um animal.",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como Funciona</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Entenda como nossa plataforma ajuda a conectar animais e pessoas
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <Card key={index} className="h-full transition-all hover:shadow-lg">
                            <CardHeader className="pb-2 ">
                                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    {step.icon}
                                </div>
                                <CardTitle>
                                    <p className="text-2xl"> {step.title}</p>
                                </CardTitle>

                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500  text-justify">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Link
                        href="/como-funciona"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Saiba mais
                    </Link>
                </div>
            </div>
        </section>
    )
}

