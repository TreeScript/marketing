"use client"

import { useEffect } from "react"
import { api } from "@/lib/axios/client"
import { useAuthStore } from "@/lib/store/auth"

export function useAuthInit() {
    const initialized = useAuthStore((s) => s.initialized)
    const setUser = useAuthStore((s) => s.setUser)

    useEffect(() => {
        if(initialized) return
        
        let isMounted = true

        async function load() {
            try {
                const res = await api.get("/api/auth/me")
                const user = res.data?.user ?? null

                if(!isMounted) return
                setUser(user)
            }catch(e) {
                if(!isMounted) return
                setUser(null)
            }
        }        
        load()

        return () => { isMounted = false }
    }, [setUser])
}