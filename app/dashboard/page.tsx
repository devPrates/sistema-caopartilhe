import { SignedIn, UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <section className="flex">

        <div>
            <h1>Bem vindo a dashboard</h1>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        </section>
    )
}