"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Users, Settings, BarChart3, FileText, LogOut, ChevronDown, CircleFadingPlus, FolderOpen, BellDot } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export function DashboardNav() {
  const segment = useSelectedLayoutSegment()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      segment: null,
    },
    {
      title: "Meus Anúncios",
      href: "/dashboard/anuncios",
      icon: FolderOpen,
      segment: "anuncios",
    },
    {
      title: "Criar Anúncio",
      href: "/dashboard/novo",
      icon: CircleFadingPlus,
      segment: "novo",
    },
    {
      title: "Notificações",
      href: "/dashboard/notificacoes",
      icon: BellDot,
      segment: "notificacoes",
    },
    {
      title: "Configurações",
      href: "/dashboard/configuracoes",
      icon: Settings,
      segment: "configuracoes",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-300">
                  <Image
                    src="/logoipsum.svg"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">CãoPartilhe</span>
                  <span className="text-xs text-muted-foreground">Dashboard</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="mt-4">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={segment === item.segment}
                className={cn(
                  "font-medium text-sm",
                  segment === item.segment && "bg-blue-300 text-white hover:bg-blue-300 hover:text-white",
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h4 className="mb-1 font-medium">Precisa de ajuda?</h4>
          <p className="mb-3 text-xs text-muted-foreground">
            Entre em contato com nosso suporte para obter assistência.
          </p>
          <Button size="sm" className="w-full">
            Obter ajuda
          </Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

