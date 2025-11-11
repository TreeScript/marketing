"use client"

import axios from "axios"

// axios 객체 생성
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLISH_API_URL ?? '',
    withCredentials: true,
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
    }
})

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
    (result) => result,
    async (error) => {
        const status = error?.response?.status

        console.error(`Response Error [$(status)]: ${error}`)

        // 세션 만료 or 권한 없음 → 로그인 화면으로 강제 이동
        if(status === 401 || status === 403) {
            if(typeof window !== 'undefined') {
                window.location.href = `/auth/login`
            }
        }

        return Promise.reject(error)
    }
)