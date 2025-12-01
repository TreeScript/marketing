"use client"

import { ReactNode } from "react"
import { AppShellLayout } from "@/components/layout/AppShell"
import { api } from "@/lib/axios/client"
import { useAuthStore } from "@/lib/store/auth"

type AppShellClientProps = {
    children: ReactNode
}

export function AppShellClient({
    children
}: AppShellClientProps) {
    const clear = useAuthStore((s) => s.clear)

    const onLogout = async () => {
        try {
            await api.post(`/api/auth/logout`)
        } catch(error: any) {
            console.error(`Logout Error: ${error}`)
        } finally {
            clear()
            window.location.href = `/auth/login`
        }
    }

    return (
        <AppShellLayout
            onLogout={onLogout}
        >
            {children}
        </AppShellLayout>
    )
}