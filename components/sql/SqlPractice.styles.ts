"use client"

import styled from "styled-components"

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 16px;
    margin-bottom: 8px;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 22px;
    letter-spacing: -0.03em;
    color: #0f172a;
`

export const Subtitle = styled.p`
    margin: 4px 0 0;
    font-size: 13px;
    color: #64748b;
`

export const FilterHint = styled.div`
    font-size: 12px;
    color: #94a3b8;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
`

export const Card = styled.article`
    padding: 18px 18px 16px;
    border-radius: 14px;
    background: #ffffff;
    box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.08),
        0 0 0 1px rgba(148, 163, 184, 0.18);

    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BadgeRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`

export const DifficultyBadge = styled.span<{ $level: "easy" | "mid" | "hard" }>`
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    ${({ $level }) => {
        if ($level === "easy") {
        return `
            background: rgba(34, 197, 94, 0.08);
            color: #16a34a;
        `
        }
        if ($level === "mid") {
        return `
            background: rgba(59, 130, 246, 0.08);
            color: #2563eb;
        `
        }
        return `
        background: rgba(244, 63, 94, 0.08);
        color: #e11d48;
        `
    }}
`

export const ProblemTitle = styled.h2`
    margin: 0;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #0f172a;
`

export const ProblemDesc = styled.p`
    margin: 4px 0 0;
    font-size: 13px;
    color: #64748b;
`

export const TagRow = styled.div`
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`

export const Tag = styled.span`
    padding: 3px 8px;
    border-radius: 999px;
    font-size: 11px;
    color: #64748b;
    background: #f1f5f9;
`

export const CardFooter = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`

export const MetaText = styled.span`
    font-size: 11px;
    color: #94a3b8;
`

export const ButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const SqlPractice = {
    Page,
    HeaderRow,
    Title,
    Subtitle,
    FilterHint,
    Grid,
    Card,
    BadgeRow,
    DifficultyBadge,
    ProblemTitle,
    ProblemDesc,
    TagRow,
    Tag,
    CardFooter,
    MetaText,
    ButtonRow,
}
