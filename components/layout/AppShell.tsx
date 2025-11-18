"use client"

import { ReactNode } from "react"
import { AppShell } from "./AppShell.styles"
import { useAuthStore } from "@/lib/store/auth"
import { Button } from "../ui/Button"

type AppShellProps = {
    children: ReactNode
    onLogout: () => void
}

export function AppShellLayout({
    children,
    onLogout
}: AppShellProps) {

    const user = useAuthStore((s) => s.user)

    
    return (
        <AppShell.Shell>
            <AppShell.Header>
                <AppShell.Brand>Marketing SQL Lab</AppShell.Brand>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {user ? (
                        <>
                            <span style={{ fontSize: 13, color: "#475569" }}>
                                {user.role === "guest"
                                    ? `${user.id} (게스트)`
                                    : `${user.id}`}
                            </span>
                            <Button size="sm" variant="ghost" onClick={onLogout} loading={false}>
                                로그아웃
                            </Button>
                        </>
                    ) : null}
                </div>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer>ⓒ {new Date().getFullYear()} Marketing SQL Lab </AppShell.Footer>
        </AppShell.Shell>
    )
}