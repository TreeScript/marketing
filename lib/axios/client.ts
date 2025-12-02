"use client"

import axios, { AxiosError } from "axios"

const tempBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL
const baseUrlVerify = 
    process.env.NEXT_PUBLIC_API_BASE_URL &&
    process.env.NEXT_PUBLIC_API_BASE_URL.length > 0


const baseURL = baseUrlVerify ? tempBaseURL : ""
    
// axios 객체 생성
export const api = axios.create({
    baseURL,
    validateStatus: () => true,
    withCredentials: true,
    timeout: 10_000,
})

export type ApiError = {
    status?: number
    message: string
    raw?: unknown
}

api.interceptors.request.use(
    (config) => {
        // JWT 세션 토큰 읽기 (쿠키)
        return config
    },
    (error) => {
        console.error(`Request Error: ${error}`)
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<any>) => {
        const apiError: ApiError = {
            status: error.response?.status,
            message:
                (error.response?.data as any)?.message ||
                error.message ||
                "요청 중 알 수 없는 오류가 발생했습니다.",
            raw: error,
        }

        return Promise.reject(apiError)
    }
)