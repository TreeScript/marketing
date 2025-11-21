"use client"

import { useEffect, useState } from "react"
import { SqlPracticeLayout, SqlProblemSummary } from "@/components/sql/SqlPracticeLayout"
import { useAuthInit } from "@/lib/hooks/auth/useAuthInit"
import { useAuthStore } from "@/lib/store/auth"
import { api } from "@/lib/axios/client"

export default function SqlPracticePage() {
    useAuthInit()
    const initialized = useAuthStore((s) => s.initialized)

    const [problems, setProblems] = useState<SqlProblemSummary[]>([])
    const [loading, setLoading] = useState(true)

    const getProblems = async () => {
        setLoading(true)
        
        try{
            const result = await api.get(`/api/problems`, {
                params: {
                    category: "ga4",
                }
            })
            if(result.data?.ok) {
                const mapped: SqlProblemSummary[] = result.data.items.map((problem: any) => ({
                    id: problem.id,
                    slug: problem.slug,
                    title: problem.title,
                    description: problem.description,
                    difficulty: problem.difficulty,
                    tags: problem.tags ?? [],
                    estimatedMinutes: 15,
                }))
                setProblems(mapped)
            }
        }catch(error: any) {
            console.error(`문제 로딩 실패: ${error.message}`)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(initialized) {
            getProblems()
        }
    }, [initialized])

    if(!initialized) {
        return <div>세션 확인 중...</div>
    }
    if(loading) {
        return <div style={{ padding: 24 }}>문제 로딩 중...</div>
    }

    return <SqlPracticeLayout problems={problems} />
}