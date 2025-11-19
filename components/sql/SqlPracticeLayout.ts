"use client"

import { SqlPractice } from "./SqlPractice.styles"
import { Button } from "../ui/Button"
import Link from "next/link"

export type Difficulty = "easy" | "mid" | "hard"

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

    
}