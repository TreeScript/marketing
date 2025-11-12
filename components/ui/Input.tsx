"use client"
import styled, { css } from "styled-components"

type Variant = "default" | "subtle" | "danger"
type Size = "sm" | "md" | "lg"

const baseStyle = css`
    width: 100%;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    background: #fff;
    font-weight: 500;
    transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
    box-shadow: 0 1px 2px rgba(2, 6, 23, .04);

    &::placeholder { color: #64748B }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, .35);
        border-color: transparent;
    }
    &:hover {
        border-color: #D5DCE5;
    }

    &:disabled {
        color: #94A3B8;
        background: #F1F5F9;
        border-color: #E2E8F0;
        box-shadow: none;
        cursor: not-allowed;
    }
`

const sizeStyle = (size: Size) => {
    switch(size) {
        case "sm":
            return css`
                padding: 8px 12px;
                font-size: 14px;
            `
        case "lg":
            return css`
                padding: 14px 16px;
                font-size: 18px;
            `
        default:
            return css`
                padding: 12px 14px;
                font-size: 16px;
            `
    }
}

const defaultVariant = css``

const subtleVariant = css`
    background: #F8FAFC;
    &:hover { background: #F1F5F9; }
    &:focus { background: #FFFFFF; }
`

const dangerVariant = css`
    background-color: #FCA5A5;
    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, .35);
        border-color: transparent;
    }
`

const errorStyle = css`
    border-color: #EF4444;
    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, .35);
        border-color: transparent;
    }
`

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: Variant
    size?: Size
    error?: boolean
}

export const Input = styled.input<InputProps>`
    ${baseStyle}
    ${({ size = "md" }) => sizeStyle(size)}
    ${({ variant = "default" }) => {
        switch(variant) {
            case "subtle":
                return subtleVariant
            case "danger":
                return dangerVariant
            default:
                return defaultVariant
        }
    }}
    ${({ error }) => error ? errorStyle : null}
`