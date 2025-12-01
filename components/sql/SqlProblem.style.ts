"use client"

import styled from "styled-components"

export const PageWrap = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-start;
    padding: 24px;
`

/* LEFT */
// export const Left = styled.div`
//     flex: 0.7;
//     background: #ffffff;
//     padding: 28px;
//     border-radius: 14px;
//     box-shadow:
//         0 18px 40px rgba(15, 23, 42, 0.08),
//         0 0 0 1px rgba(148, 163, 184, 0.18);
// `

export const Left = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

/* RIGHT */
// export const Right = styled.div`
//     flex: 1;
//     background: #ffffff;
//     padding: 24px;
//     border-radius: 14px;
//     box-shadow:
//         0 18px 40px rgba(15, 23, 42, 0.08),
//         0 0 0 1px rgba(148, 163, 184, 0.18);
//     display: flex;
//     flex-direction: column;
//     gap: 18px;
// `

export const Right = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 20px;
`


export const Card = styled.div`
    background: #ffffff;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`

export const Title = styled.h1`
    margin: 0 0 8px;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #0f172a;
`

export const Description = styled.p`
    margin: 0 0 16px;
    font-size: 14px;
    color: #475569;
    line-height: 1.6;
`

export const SectionTitle = styled.h2`
    margin: 0 0 10px;
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
`

/* Badge Area */
export const BadgeWrap = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
`

export const DifficultyBadge = styled.span<{ $level: string }>`
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;

    background: ${({ $level }) => 
        $level === "easy" ? "#e0f2fe" :
        $level === "mid" ? "#fef9c3" :
        $level === "hard" ? "#fee2e2" :
        "#ede9fe"};
    color: #334155;
`

export const CategoryBadge = styled.span`
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    background: #eef2ff;
    color: #4f46e5;
    text-transform: uppercase;
`

/* Tags */
export const TagWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
`

export const Tag = styled.span`
    background: #f1f5f9;
    color: #475569;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 11px;
`

/* Schema Area */
export const SchemaArea = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SchemaCard = styled.div`
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px;
    background: #ffffff;
`

export const SchemaHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`

export const SchemaTableName = styled.div`
    font-weight: 700;
    font-size: 14px;
    color: #0f172a;
`

export const SchemaBadge = styled.span`
    padding: 2px 8px;
    background: #f1f5f9;
    border-radius: 6px;
    font-size: 11px;
    color: #475569;
`

export const SchemaTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;

    th {
        background: #f8fafc;
        padding: 6px;
        border-bottom: 1px solid #e2e8f0;
        text-align: left;
        color: #475569;
    }

    td {
        padding: 6px;
        border-bottom: 1px solid #f1f5f9;
        color: #334155;
    }

    tr:last-child td {
        border-bottom: none;
    }
`

/* Business Rules */
export const RuleList = styled.ul`
    margin: 0;
    padding-left: 20px;
`

export const RuleItem = styled.li`
    margin-bottom: 6px;
    font-size: 14px;
    color: #475569;
`

/* Run Button Area */
export const RunButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
`

/* Error Box */
export const ErrorBox = styled.div`
    background: #fef2f2;
    border: 1px solid #fecaca;
    padding: 12px;
    border-radius: 8px;
    color: #b91c1c;
    font-size: 14px;
`

/* Table Box */
export const TableBox = styled.div`
    width: 100%;
    overflow-x: auto;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background: #ffffff;

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    th {
        background: #f1f5f9;
        padding: 8px;
        border-bottom: 1px solid #e2e8f0;
        text-align: left;
        font-weight: 600;
        color: #475569;
    }

    td {
        padding: 8px;
        border-bottom: 1px solid #f1f5f9;
        color: #334155;
    }

    tr:last-child td {
        border-bottom: none;
    }
`

export const ResultCorrect = styled.div`
    background: #ecfdf5;
    border: 1px solid #6ee7b7;
    color: #047857;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
`

export const ResultWrong = styled.div`
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
`

export const SqlProblemStyles = {
    PageWrap,
    Left,
    Right,
    Title,
    Description,
    Card,
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
    SchemaTable,
    ResultWrong,
    ResultCorrect
}
