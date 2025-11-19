"use client"

import { useEffect } from "react"
import { api } from "@/lib/axios/client"
import { useAuthStore } from "@/lib/store/auth"

export function useAuthInit() {
    const setUser = useAuthStore((s) => s.setUser)
    const initialized = useAuthStore((s) => s.initialized)
    const setInitialized = useAuthStore((s) => s.setInitialized)

    useEffect(() => {
        if(initialized) return

        let cancelled = false

        async function load() {
            try {
                const res = await api.get("/api/auth/me")

                console.log(`[/api/auth/me] status: ${JSON.stringify(res.status)}`)
                console.log(`[/api/auth/me] res.data.user: ${JSON.stringify(res.data.user)}`)
                
                const user = res.data.user ?? null
                console.log(`cancelled: ${cancelled}`)

                if(cancelled) return
                setUser(user)
            }catch(e) {
                if(cancelled) return
                setUser(null)
            }finally {
                if(cancelled) return
                setInitialized(true)
            }
        }        
        load()

        return () => { cancelled = true }
    }, [initialized,setUser, setInitialized])
}