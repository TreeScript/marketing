"use client"

import { useEffect } from "react"
import { SqlPracticeLayout, SqlProblemSummary } from "@/components/sql/SqlPracticeLayout"
import { useAuthInit } from "@/lib/hooks/auth/useAuthInit"
import { useAuthStore } from "@/lib/store/auth"

const mockProblems: SqlProblemSummary[] = [
    {
        id: 1,
        slug: "daily-clicks-by-campaign",
        title: "캠페인별 일일 클릭 수 집계",
        description:
        "지난 7일 동안 캠페인별 일일 클릭 수를 계산해 CTR 분석에 사용할 수 있는 기본 리포트를 만들어보세요.",
        difficulty: "easy",
        tags: ["기본 집계", "GROUP BY", "날짜"],
        estimatedMinutes: 10,
    },
    {
        id: 2,
        slug: "conversion-rate-by-channel",
        title: "유입 채널별 전환율 계산",
        description:
        "광고 유입 채널별 세션 수와 구매 수를 활용해 전환율을 계산하고, 전환율 기준 내림차순으로 정렬해보세요.",
        difficulty: "mid",
        tags: ["전환율", "JOIN", "집계"],
        estimatedMinutes: 15,
    },
    {
        id: 3,
        slug: "lifetime-value-cohort",
        title: "가입 월 Cohort별 LTV 추이",
        description:
        "유저 가입 월 기준으로 Cohort를 나누고, 각 Cohort의 누적 매출을 월별로 계산해 LTV를 분석해보세요.",
        difficulty: "hard",
        tags: ["코호트", "윈도우 함수", "LTV"],
        estimatedMinutes: 25,
    },
]

export default function SqlPracticePage() {
    useAuthInit()

    const initialized = useAuthStore((s) => s.initialized)

    useEffect(() => {

    }, [])

    if(!initialized) {
        return <div>세션 확인 중...</div>
    }

    return <SqlPracticeLayout problems={mockProblems} />
}