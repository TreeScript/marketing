"use client"

import { SqlProblemLayout } from "@/components/sql/SqlProblemLayout"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { api } from "@/lib/axios/client"

export default function SqlProblemPage() {

    const { slug } = useParams()
    
    const [problem, setProblem] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function loadProblem() {
        setLoading(true)
        setError(null)

        try {
            const result = await api.get(`/api/problems/${slug}`)
            if(result.data.ok) {
                setProblem(result.data.problem)
            }else {
                setError(`문제를 불러올 수 없습니다.`)
            }
        }catch(error: any) {
            console.error(`문제 가져오기 실패: ${error.message}`)
            setError(`서버 오류가 발생했습니다.`)
        }finally {
            setLoading(false)
        }
    }

    async function onRunQuery(sql: string) {
        try {
            const result = await api.post(`/api/sql/execute`, { sql })

            return {
                columns: result.data.columns,
                rows: result.data.rows,
            }
        }catch(error: any) {
            return {
                columns: [],
                rows: [],
                error: error.message
            }
        }
    }

    useEffect(() => {
        loadProblem()
    }, [slug])

    if(loading) return <div style={{ padding: 24 }}>문제 로딩 중...</div>
    if(error) return <div style={{ padding: 24 }}>{error}</div>
    if(!problem) return <div style={{ padding: 24 }}>문제를 찾을 수 없습니다.</div>

    return (
        <SqlProblemLayout 
            problem={problem}
            onRunQuery={onRunQuery} 
        />
    ) 
}