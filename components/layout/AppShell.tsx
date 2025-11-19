"use client"

import { ReactNode } from "react"
import { AppShell } from "./AppShell.styles"
import { useAuthStore } from "@/lib/store/auth"
import { Button } from "../ui/Button"
import { usePathname } from "next/navigation"

type AppShellProps = {
    children: ReactNode
    onLogout: () => void
}

const navItem = [
    { href: "/", label: "HOME" },
    { href: "/practice/sql", label: "SQL Problem" }
]

export function AppShellLayout({
    children,
    onLogout
}: AppShellProps) {
    const pathname = usePathname()
    const user = useAuthStore((s) => s.user)

    
    return (
        <AppShell.Shell>
            <AppShell.Header>
                <AppShell.HeaderInner>
                    <AppShell.Brand>Marketing SQL Lab</AppShell.Brand>

                    <AppShell.Nav>
                        {navItem.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href)

                            return (
                                <AppShell.NavLink
                                    key={item.href}
                                    href={item.href}
                                    $active={isActive}
                                >
                                    {item.label}
                                </AppShell.NavLink>
                            )
                        })}
                    </AppShell.Nav>
                    
                    <AppShell.RightArea>
                        {user && (
                            <>
                                <AppShell.UserText>
                                    {user.role === "guest"
                                        ? `${user.id} (게스트)`
                                        : `${user.id}`}
                                </AppShell.UserText>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={onLogout}
                                >
                                    로그아웃
                                </Button>
                            </>
                        )}
                    </AppShell.RightArea>
                </AppShell.HeaderInner>
            </AppShell.Header>
            
            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer>ⓒ {new Date().getFullYear()} Marketing SQL Lab </AppShell.Footer>
        </AppShell.Shell>
    )
}