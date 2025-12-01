"use client"

import styled from "styled-components"

export const Page = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: 
        radial-gradient(circle at 0 0, #eff6ff, transparent 55%),
        radial-gradient(circle at 100% 100%, #eef2ff, transparent 55%),
        #f8fafc;
    /* background: yellow; */
`

export const Shell = styled.div`
    width: 100%;
    max-width: 640px;
    padding: 32px 28px;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 
        0 18px 40px rgba(15, 23, 42, 0.14),
        0 0 0 1px rgba(148, 163, 184, 0.25);
`

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: rgba(59, 130, 246, 0.06);
    color: #2563eb;
    margin-bottom: 12px;
`

export const Title = styled.h1`
    margin: 0 0 4px;
    font-size: 24px;
    letter-spacing: -0.03em;
    color: #0f172a;
`

export const Sub = styled.p`
    margin: 0 0 20px;
    font-size: 14px;
    color: #64748b;
`

export const Section = styled.div`
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
`

export const Label = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
`

export const Value = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: #0f172a;
`

export const Hint = styled.p`
    margin: 12px 0 0;
    font-size: 13px;
    color: #94a3b8;
`

export const ButtonWrap = styled.div`
    margin-top: 12px;
`

export const Home = {
    Page,
    Shell,
    Badge,
    Title,
    Sub,
    Section,
    Label,
    Value,
    Hint,
    ButtonWrap,
}