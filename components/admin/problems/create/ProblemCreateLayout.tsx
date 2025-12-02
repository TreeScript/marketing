"use client"

import { useState } from "react"
import { ProblemCreateStyle } from "./ProblemCreate.style"

export default function ProblemCreateLayout() {

    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [category, setCategory] = useState("ga4")
    const [difficulty, setDifficulty] = useState("easy")
    const [description, setDescription] = useState("")

    return (
        <ProblemCreateStyle.Wrapper>
            <ProblemCreateStyle.Title>문제 생성하기</ProblemCreateStyle.Title>

            <ProblemCreateStyle.Form>
                <ProblemCreateStyle.Label>문제 제목</ProblemCreateStyle.Label>
                <ProblemCreateStyle.Input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <ProblemCreateStyle.Label>Slug (문제 URL)</ProblemCreateStyle.Label>
                <ProblemCreateStyle.Input 
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />

                <ProblemCreateStyle.Label>카테고리</ProblemCreateStyle.Label>
                <ProblemCreateStyle.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="ga4">GA4</option>
                    <option value="naver_ads">네이버 광고</option>
                    <option value="crm">CRM</option>
                    <option value="ecommerce">이커머스</option>
                    <option value="general">일반</option>
                </ProblemCreateStyle.Select>

                <ProblemCreateStyle.Label>난이도</ProblemCreateStyle.Label>
                <ProblemCreateStyle.Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="easy">easy</option>
                    <option value="mid">mid</option>
                    <option value="hard">hard</option>
                    <option value="expert">expert</option>
                </ProblemCreateStyle.Select>

                <ProblemCreateStyle.Label>설명</ProblemCreateStyle.Label>
                <ProblemCreateStyle.TextArea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                />

                <ProblemCreateStyle.CreateButton>문제 생성</ProblemCreateStyle.CreateButton>
            </ProblemCreateStyle.Form>
        </ProblemCreateStyle.Wrapper>
    )
}