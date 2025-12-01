"use client"

import styled from "styled-components"
import { Card as BaseCard } from "../ui/Card"
import { Divider as BaseDivider } from "../ui/Divider"

export const Login = {
    Page: styled.main`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `,
    Shell: styled.div`
        max-width: 1120px;
        margin: 0 auto;
        padding: 72px 24px 96px;

        @media (max-width: 768px) {
            padding: 40px 20px 56px;
        }
    `,
    TopBar: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 56px;

        @media (max-width: 768px) {
            margin-bottom: 32px;
        }
    `,
    Brand: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `,
    BrandMark: styled.div`
        width: 26px;
        height: 26px;
        border-radius: 9px;
        background: radial-gradient(circle at 30% 20%, #38dbf8 0, #4f46e5 40%, #020617 100%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        &::after {
            content: "";
            position: absolute;
            inset: 35% 15%;
            border-radius: 999px;
            background: linear-gradient(180deg, rgba(248, 250, 252, 0.75), transparent);
            opacity: 0.9;
        }
    `,
    BrandBar: styled.div`
        position: relative;
        width: 14px;
        height: 10px;
        display: flex;
        align-items: flex-end;
        gap: 2px;
        z-index: 1;

        span {
            flex: 1;
            border-radius: 999px 999px 0 0;
            background: linear-gradient(180deg, #eef2ff, #c7d2fe);
        }

        span:nth-child(2) {
            height: 8px;
        }
        span:nth-child(3) {
            height: 10px;
        }
        span:nth-child(1) {
            height: 6px;
            opacity: 0.7;
        }
    `,
    BrandName: styled.span`
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #0f172a;
    `,
    Badge: styled.span`
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        background: rgba(79, 70, 229, 0.06);
        color: #4f46e5;
    `,
    MainGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
        gap: 48px;
        align-items: stretch;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
        }
    `,

    Intro: styled.section`
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,

    IntroCaption: styled.div`
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: #64748b;
    `,

    IntroTitle: styled.h1`
        margin: 0;
        font-size: 32px;
        line-height: 1.25;
        letter-spacing: -0.03em;
        color: #0f172a;

        span {
            color: #4f46e5;
        }

        @media (max-width: 768px) {
            font-size: 26px;
        }
    `,

    IntroSub: styled.p`
        margin: 0;
        font-size: 15px;
        line-height: 1.6;
        color: #475569;
    `,

    BulletList: styled.ul`
        margin: 18px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    BulletItem: styled.li`
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 14px;
        color: #0f172a;
    `,

    BulletIcon: styled.span`
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.08);
        color: #2563eb;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        margin-top: 2px;
    `,

    BulletText: styled.span`
        line-height: 1.5;
    `,

    // 오른쪽 로그인 + 미니 대시보드 패널
    AuthPanel: styled.section`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,

    AuthCard: styled(BaseCard)`
        padding: 26px 24px 24px;
        border-radius: 22px;
        border: 1px solid rgba(148, 163, 184, 0.7);
        background: radial-gradient(circle at 0 0, rgba(59, 130, 246, 0.12), transparent 55%),
        radial-gradient(circle at 100% 100%, rgba(79, 70, 229, 0.16), transparent 55%),
        #ffffff;
        box-shadow:
        0 18px 40px rgba(15, 23, 42, 0.12),
        0 0 0 1px rgba(148, 163, 184, 0.16);
    `,

    AuthHeader: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
    `,

    AuthTitle: styled.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #0f172a;
    `,

    AuthHint: styled.p`
        margin: 0 0 18px;
        font-size: 13px;
        color: #64748b;
    `,

    AuthDivider: styled(BaseDivider)`
        margin: 14px 0 18px;
    `,

    AuthFooterText: styled.p`
        margin: 8px 0 0;
        font-size: 12px;
        color: #94a3b8;
    `,

    ErrorText: styled.p`
        margin: 10px 0 0;
        font-size: 13px;
        color: #b91c1c;
    `,

    // 작은 "가짜 대시보드" 카드
    MiniDashboard: styled(BaseCard)`
        padding: 18px 18px 16px;
        border-radius: 18px;
        border: 1px solid rgba(148, 163, 184, 0.5);
        background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.16), transparent 55%),
        #0f172a;
        color: #e5e7eb;
    `,

    MiniTitle: styled.div`
        font-size: 12px;
        font-weight: 600;
        color: #cbd5f5;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    MetricRow: styled.div`
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    `,

    Metric: styled.div`
        flex: 1;
    `,

    MetricLabel: styled.div`
        font-size: 11px;
        color: #9ca3af;
        margin-bottom: 3px;
    `,

    MetricValue: styled.div`
        font-size: 14px;
        font-weight: 600;
        color: #f9fafb;
    `,

    BarRow: styled.div`
        display: flex;
        align-items: flex-end;
        gap: 4px;
        margin-top: 6px;
    `,

    Bar: styled.div<{ $height: number }>`
        flex: 1;
        border-radius: 999px 999px 0 0;
        height: ${({ $height }) => $height}%;
        background: linear-gradient(180deg, #38bdf8, #4f46e5);
        opacity: 0.9;

        &:nth-child(2) {
            opacity: 0.7;
        }
        &:nth-child(3) {
            opacity: 0.5;   
        }
    `,
}