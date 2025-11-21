"use client"

import styled from "styled-components"

export const PageWrap = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-start;
`

/* LEFT */
export const Left = styled.div`
    flex: 0.7;
    background: #ffffff;
    padding: 28px;
    border-radius: 14px;
    box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.08),
        0 0 0 1px rgba(148, 163, 184, 0.18);
`

/* RIGHT */
export const Right = styled.div`
    flex: 1;
    background: #ffffff;
    padding: 24px;
    border-radius: 14px;
    box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.08),
        0 0 0 1px rgba(148, 163, 184, 0.18);
    display: flex;
    flex-direction: column;
    gap: 18px;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.02em;
`

export const Description = styled.p`
    margin: 12px 0 20px;
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
`

export const SectionTitle = styled.h2`
    margin: 28px 0 12px;
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
`

/* Badge Area */
export const BadgeWrap = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 12px;
    margin-bottom: 12px;
`

export const DifficultyBadge = styled.span<{ $level: string }>`
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: #fff;
    background: ${({ $level }) =>
        $level === "easy" ? "#4ade80" :
        $level === "mid" ? "#3b82f6" :
        $level === "hard" ? "#f97316" :
        "#7e22ce"};
`

export const CategoryBadge = styled.span`
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 999px;
    background: #e2e8f0;
    color: #475569;
    font-weight: 600;
    letter-spacing: 0.05em;
`

/* Tags */
export const TagWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
`

export const Tag = styled.span`
    background: #f1f5f9;
    color: #475569;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
`

/* Schema Area */
export const SchemaArea = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SchemaCard = styled.div`
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    box-shadow: 
        0 12px 28px rgba(15, 23, 42, 0.08)
        0 0 0 1px rgba(148, 163, 184, 0.15);

    ul {
        margin-top: 6px;
        margin-left: 18px;
    }

    li {
        font-size: 13px;
        color: #475569;
    }
`

export const SchemaHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
`

export const SchemaTableName = styled.div`
    font-weight: 700;
    font-size: 14px;
    color: #0f172a;
`

export const SchemaBadge = styled.span`
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    background: #eff6ff;
    color: #2563eb;
    border: 1px solid #bfdbfe;
`

export const SchemaTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    th, td {
        border: 1px solid #e2e8f0;
        padding: 6px 10px;
        text-align: left;
    }

    th {
        background: #f8fafc;
        font-weight: 600;
        color: #475569;
    }

    td {
        color: #334155;
    }
`

/* Business Rules */
export const RuleList = styled.ul`
    margin: 0;
    padding-left: 20px;
`

export const RuleItem = styled.li`
    margin-bottom: 8px;
    font-size: 13px;
    color: #475569;
`

/* Run Button Area */
export const RunButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
`

/* Error Box */
export const ErrorBox = styled.div`
    padding: 12px;
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
    border-radius: 8px;
    font-size: 13px;
`

/* Table Box */
export const TableBox = styled.div`
    max-height: 300px;
    overflow: auto;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 8px;
    background: #ffffff;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #e2e8f0;
        padding: 6px 8px;
        font-size: 13px;
    }

    th {
        background: #f1f5f9;
        font-weight: 600;
        color: #475569;
    }

    td {
        color: #334155;
    }
`

export const SqlProblemStyles = {
    PageWrap,
    Left,
    Right,
    Title,
    Description,
    SectionTitle,
    BadgeWrap,
    DifficultyBadge,
    CategoryBadge,
    TagWrap,
    Tag,
    SchemaArea,
    SchemaCard,
    SchemaTableName,
    RuleList,
    RuleItem,
    RunButtonArea,
    ErrorBox,
    TableBox,
    SchemaHeader,
    SchemaBadge,
    SchemaTable
}
