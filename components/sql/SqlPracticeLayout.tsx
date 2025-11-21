"use client"

import { SqlPractice } from "./SqlPractice.styles"
import { Button } from "../ui/Button"
import Link from "next/link"

export type Difficulty = "easy" | "mid" | "hard" | "expert"

export type SqlProblemSummary = {
    id: number
    slug: string
    title: string
    description: string
    difficulty: Difficulty
    tags: string[]
    estimatedMinutes: number
}

type SqlPracticeProps = {
    problems: SqlProblemSummary[]
}

export function SqlPracticeLayout({ problems }: SqlPracticeProps) {

    return (
        <SqlPractice.Page>
            <SqlPractice.HeaderRow>
                <div>
                    <SqlPractice.Title>마케팅 SQL 실전 문제</SqlPractice.Title>
                    <SqlPractice.Subtitle>
                        마케터가 자주 보는 지표들을 SQL로 직접 조회해보는 연습 공간
                    </SqlPractice.Subtitle>
                </div>
                <SqlPractice.FilterHint>난도 · 태그 필터는 나중에 추가할 예정</SqlPractice.FilterHint>
            </SqlPractice.HeaderRow>

            <SqlPractice.Grid>
                {problems.map((problem) => (
                    <SqlPractice.Card key={problem.id}>
                        <SqlPractice.BadgeRow>
                            <SqlPractice.DifficultyBadge $level={problem.difficulty}>
                                {problem.difficulty === "easy"
                                    ? "입문"
                                    : problem.difficulty === "mid"
                                        ? "실전"
                                        : "심화"}
                            </SqlPractice.DifficultyBadge>
                        </SqlPractice.BadgeRow>
                        <div>
                            <SqlPractice.ProblemTitle>{problem.title}</SqlPractice.ProblemTitle>
                            <SqlPractice.ProblemDesc>{problem.description}</SqlPractice.ProblemDesc>
                        </div>

                        {problem.tags.length > 0 && (
                            <SqlPractice.TagRow>
                                {problem.tags.map((tag) => (
                                    <SqlPractice.Tag key={tag}>{tag}</SqlPractice.Tag>
                                ))}
                            </SqlPractice.TagRow>
                        )}

                        <SqlPractice.CardFooter>
                            <SqlPractice.MetaText>문제 ID: #{problem.id.toString().padStart(3, "0")}</SqlPractice.MetaText>
                            <SqlPractice.ButtonRow>
                                <Link href={`/practice/sql/${problem.slug}`} passHref>
                                    <Button
                                        size="sm"
                                        variant="primary"
                                    >
                                        연습시작
                                    </Button>
                                </Link>
                            </SqlPractice.ButtonRow>
                        </SqlPractice.CardFooter>
                    </SqlPractice.Card>
                ))}
            </SqlPractice.Grid>
        </SqlPractice.Page>
    )
}