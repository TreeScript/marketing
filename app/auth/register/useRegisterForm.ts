"use client"
import { useState } from "react"
import { api } from "@/lib/axios/client"

type Step = "email" | "verify" | "setpass" | "done"
type onChangeKeyProps = "email" | "code" | "password" | "confirm"

export function useRegisterForm() {
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [step, setStep] = useState<Step>("email")
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    const onChange = (key: onChangeKeyProps, value: string) => {
        setErrorMsg(null)
        
        if(key === "email") setEmail(value)
        if(key === "code") setCode(value)
        if(key === "password") setPassword(value)
        if(key === "confirm") setConfirm(value)
    }

    const onRequestCode = async () => {
        setLoading(true)
        setErrorMsg(null)

        try {
            await api.post(`/api/auth/otp/request`, { email })
            setStep("verify")
        }catch(err: any) {
            setErrorMsg(err?.response?.data?.message || "인증코드 발송 실패")
        }finally {
            setLoading(false)
        }
    }

    const onVerifyCode = async () => {
        setLoading(true)
        setErrorMsg(null)

        try {
            await api.post(`/api/auth/otp/verify`, { email, code })
            setStep("setpass")
        }catch(err: any) {
            setErrorMsg(err?.response?.data?.message || "인증코드 확인 실패")
        }finally {
            setLoading(false)
        }
    }

    const onSetPassword = async () => {
        setLoading(true)
        setErrorMsg(null)

        try {
            await api.post(`/api/auth/register`, { email, password })
            setStep("done")
        }catch(err: any) {
            setErrorMsg(err?.response?.data?.message || "회원가입 실패")
        }finally {
            setLoading(false)
        }
    }

    const onGoLogin = () => {
        window.location.href = `/auth/login`
    }

    return {
        state: {
            email,
            code,
            password,
            confirm,
            step,
            loading,
            errorMsg
        },
        actions: {
            onChange,
            onRequestCode,
            onVerifyCode,
            onSetPassword,
            onGoLogin
        }
    }
}