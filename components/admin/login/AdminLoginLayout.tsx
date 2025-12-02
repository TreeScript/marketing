"use client"

import { useState } from "react"
import { api } from "@/lib/axios/client"
import { useRouter } from "next/navigation"
import { AdminLoginStyle } from "./AdminLogin.styles"

export default function AdminLoginLayout() {
    
    const router = useRouter()

    const [adminId, setAdminId] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function onSubmit() {
        setError("")

        const response = await api.post(`/api/admin/login`, {
            admin_id: adminId,
            password,
        })
        const result = response.data

        const loginSuccess: boolean = response.data.ok
        if(!loginSuccess) {
            setError(result.error)
        }

        router.push(`/admin`)
    }

    return (
        <AdminLoginStyle.Wrap>
            <AdminLoginStyle.Card>
                <AdminLoginStyle.Title>관리자 로그인</AdminLoginStyle.Title>

                <AdminLoginStyle.Input 
                    placeholder="관리자 아이디"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                />
                <AdminLoginStyle.Input
                    placeholder="비밀번호"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <AdminLoginStyle.LoginButton
                    onClick={onSubmit}
                >
                    로그인
                </AdminLoginStyle.LoginButton>

                {error && <AdminLoginStyle.ErrorBox>{error}</AdminLoginStyle.ErrorBox>}
            </AdminLoginStyle.Card>
        </AdminLoginStyle.Wrap>
    )
}