"use client"

import { useAuthStore } from "@/lib/store/auth"
import { HomeLayout } from "@/components/home/HomeLayout"
import { api } from "@/lib/axios/client"
import { useAuthInit } from "@/lib/hooks/auth/useAuthInit"

export default function HomePage() {
    useAuthInit()

    const user = useAuthStore((s) => s.user)
    // const initialized = useAuthStore((s) => s.initialized)
    const clear = useAuthStore((s) => s.clear)

    const onGoLogin = () => {
        window.location.href = "/auth/login"
    }

    const onLogout = async () => {
        try {
            await api.post(`/api/auth/logout`)
        }catch(error: any) {
            console.error(`Logout Error: ${error}`)
        }finally {
            clear()
            window.location.href = "/auth/login"
        }
    }

    return <HomeLayout 
        user={user}
        onGoLogin={onGoLogin}
        onLogout={onLogout}
    />
}