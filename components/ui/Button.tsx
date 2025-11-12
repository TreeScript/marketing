"use client"
import styled, { css, keyframes } from "styled-components"
import { theme } from "@/styles/theme"
import { focusRing } from "@/styles/mixins"

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.02) }
    100% { transform: scale(1); }
`

const primaryStyle = css`
    background: linear-gradient(135deg, #3b82f6, #6366F1);
    color: #fff;
    &:hover {
        filter: brightness(0.98);
    }
    &:active {
        animation: ${pulse} 0.18s linear;
    }
    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
    }
`
const ghostStyle = css`
    background: #fff;
    color: #0F172A;
    border-color: #E2E8F0;
    &:hover {
        background: #F8FAFF;
    }
    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
    }
`

const dangerStyle = css`
    background: #EF4444;
    color: #fff;
    &:hover {
        filter: brightness(0.95);
    }
    &:focus-visible {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.35);
    }
`

type Variant = 'primary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export const Button = styled.button<{ variant?: Variant; size?: Size, loading: boolean }>`

    border: 1xp solid transparent;
    border-radius: 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 600;
    transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
    will-change: transform, box-shadow;

    ${({ size = "md" }) => {
        switch(size) {
            case "sm":
                return css`
                    font-size: 14px; 
                    padding: 8px 12px;
                `
            case "lg":
                return css`
                    font-size: 20px;
                    padding: 14px 20px;
                `
            default:
                return css`
                    font-size: 16px;
                    padding: 12px 16px;
                `
        }
    }}

    ${({ variant = "primary" }) => {
        switch(variant) {
            case "ghost":
                return ghostStyle
            case "danger":
                return dangerStyle
            default:
                return primaryStyle
        }
    }}

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 18px 40px rgba(2, 6, 23, 0.1);
    }

    ${({ loading }) =>
        loading && css`
            opacity: 0.75;
            pointer-events: none;
        `
    }
`

