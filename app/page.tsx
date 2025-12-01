"use client"

import { useAuthStore } from "@/lib/store/auth"
import { HomeLayout } from "@/components/home/HomeLayout"
import { api } from "@/lib/axios/client"
import { useAuthInit } from "@/lib/hooks/auth/useAuthInit"

export default function HomePage() {
    useAuthInit()

    const user = useAuthStore((s) => s.user)
    const initialized = useAuthStore((s) => s.initialized)
    const clear = useAuthStore((s) => s.clear)

    const onGoLogin = async () => {
        try {
            await api.post(`/api/auth/logout`)
        }catch(error: any) {
            
        }finally {
            clear()
            window.location.href = "/auth/login"
        }
    }

    const onLogout = async () => {
        try {
            await api.post(`/api/auth/logout`)
        }catch(error: any) {

        }finally {
            clear()
            window.location.href = "/auth/login"
        }
    }

    if(!initialized) {
        return <div>세션 확인 중...</div>
    }

    return (
        <HomeLayout 
            user={user}
            onGoLogin={onGoLogin}
            onLogout={onLogout}
        />
    )
}