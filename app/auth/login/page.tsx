"use client"

import React, { useState } from 'react'
import { LoginLayout } from '@/components/auth/LoginLayout'
import { api, ApiError } from '@/lib/axios/client'
import { useAuthStore } from '@/lib/store/auth'
import type { Role } from '@/lib/store/auth'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    const setUser = useAuthStore((s) => s.setUser)

    const startGuest = async () => {
        setErrorMsg(null)
        setLoading(true)

        try{
            const result = await api.post(`/api/auth/guest`)

            const { id, role } = result.data as {
                id: string
                role: Role
            }

            setUser({
                id,
                email: "",
                role,
            })

            const redirect =
                new URLSearchParams(window.location.search).get("redirect") || "/"
            window.location.href = redirect
        }catch(error: any) {
            setErrorMsg(error.message || 
                `게스트 로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.`
            )
        }finally {
            setLoading(false)
        }
    }

    return <LoginLayout 
        onGuest={startGuest}
        loading={loading}
        error={errorMsg}
    />
}