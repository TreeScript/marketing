"use client"
import styled, { css } from "styled-components"

type Variant = "elevated" | "outline" | "soft"
type Padding = "sm" | "md" | "lg"

const base = css`
    border-radius: 18px;
    background: #fff;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
`

const elevated = css`
    border: 1px solid #E2E8F0;
    box-shadow: 0 6px 24px rgba(2, 6, 23, .08);
`

const outline = css`
    border: 1px solid #CBD5E1;
    box-shadow: none;
`

const soft = css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    box-shadow: 0 1px 2px rgba(2, 6, 23, .04);
`

const paddingStyle = (_padding: Padding) => {
    switch(_padding) {
        case "sm":
            return css`
                padding: 20px;
            `
        case "lg":
            return css`
                padding: 36px;
            `
        default:
            return css`
                padding: 28px;
            `
    }
}

export const Card = styled.div<{
    variant?: Variant
    padding?: Padding
    interactive?: boolean
}>`
    ${base}
    ${({ padding = "md" }) => paddingStyle(padding)} 
    ${({ variant = "elevated" }) => {
        switch(variant) {
            case "outline":
                return outline
            case "soft":
                return soft
            default:
                return elevated
        }
    }}
    ${({ interactive }) => interactive && css`
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 18px 40px rgba(2, 6, 23, .10);
        }
    `}
`