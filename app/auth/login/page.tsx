"use client"

import React, { useState } from 'react'
import { LoginLayout } from '@/components/auth/LoginLayout'
import { api } from '@/lib/axios/client'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    const startGuest = async () => {
        setErrorMsg(null)
        setLoading(true)

        try{
            await api.post(`/api/auth/guest`)
            const redirect = new URLSearchParams(window.location.search).get(`redirect`) || '/'
            window.location.href = redirect
        }catch(error: any) {
            setErrorMsg(error?.response?.data?.message || 
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