"use client"

import styled from "styled-components"

export const Wrap = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-start;
`

export const Left = styled.div`
    flex: 0.6;
    background: #ffffff;
    padding: 24px;
    border-radius: 12px;
    box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.08),
        0 0 0 1px rgba(148, 163, 184, 0.18);
`

export const Right = styled.div`
    flex: 1;
    background: #ffffff;
    padding: 24px;
    border-radius: 12px;
    box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.08),
        0 0 0 1px rgba(148, 163, 184, 0.18);
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #0f172a;
`

export const Description = styled.p`
    margin: 10px 0 20px;
    font-size: 14px;
    color: #64748b;
`

export const SectionTitle = styled.h2`
    margin: 24px 0 8px;
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
`

export const CodeBox = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 12px;
    font-family: "JetBrains Mono", "Consolas", monospace;
    font-size: 13px;
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    resize: vertical;
    outline: none;
`

export const RunButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
`

export const ResultBox = styled.div`
    padding: 16px;
    background: #f8fafc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    overflow-x: auto;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

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
`

export const SqlProblemStyles = {
    Wrap,
    Left,
    Right,
    Title,
    Description,
    SectionTitle,
    CodeBox,
    RunButtonArea,
    ResultBox,
    Table,
}