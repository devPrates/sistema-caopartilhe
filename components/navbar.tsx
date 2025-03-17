'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Importando usePathname
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Anuncios', href: '/Anuncios' },
    { name: 'Doações', href: '/doacoes' },
    { name: 'Sobre', href: '/sobre' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Pegando o pathname da URL atual

    return (
        <nav className="bg-white shadow-md sticky w-full z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-xl font-medium text-gray-800">
                        <Image src="/logoipsum.svg" alt="CãoPartilhe" width={60} height={60} />
                    </Link>
                </div>

                {/* Menu - Desktop */}
                <div className="hidden md:flex flex-1 justify-center space-x-6">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`text-gray-700 font-medium hover:text-blue-500 ${pathname === item.href ? 'text-blue-500' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Botões - Desktop */}
                <div className="hidden md:flex justify-end space-x-4 flex-shrink-0">
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline" }))}>Dashboard</Link>
                        <UserButton />
                    </SignedIn>
                </div>

                {/* Botão Menu Mobile */}
                <div className="flex md:hidden justify-end space-x-3">
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md flex flex-col items-center">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`w-full text-center py-3 border-b text-gray-700 font-medium hover:bg-gray-100 ${pathname === item.href ? 'bg-gray-100' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline" }))}>Dashboard</Link>

                </div>
            )}
        </nav>
    );
}