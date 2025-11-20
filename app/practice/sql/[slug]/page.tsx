"use client"

import { SqlProblemLayout } from "@/components/sql/SqlProblemLayout"

const problemMock = {
    title: "캠페인별 일일 클릭 수 집계",
    description: "ad_clicks 테이블을 사용하여 지난 7일간 캠페인별 클릭 수를 계산하세요.",
    difficulty: "easy",
    tags: ["GROUP BY", "날짜", "기초"],
    exampleSchema: {
        ad_clicks: ["id", "campaign_id", "clicked_at"],
        campaigns: ["id", "name", "budget"],
    },
}

async function runQueryMock(sql: string) {
    console.log(`유저 SQL 실행 ${sql}`)

    return {
        columns: ["campaign_id", "clicks"],
        rows: [
            [1, 123],
            [2, 456],
        ],
    }
}

export default function SqlProblemPage() {
    return <SqlProblemLayout 
        problem={problemMock}
        onRunQuery={runQueryMock} 
    />
}