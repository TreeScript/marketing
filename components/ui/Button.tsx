"use client"
import styled, { css } from "styled-components"
import { theme } from "@/styles/theme"
import { focusRing } from "@/styles/mixins"

type Variant = 'primary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export const Button = styled.button<{ variant?: Variant; size?: Size }>`

    border: 1xp solid transparent;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    transition: .15s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    ${({ size = 'md' }) => {
        const map = {
            sm: css`padding: 6px 10px; font-size:${theme.typography.size.md};`,
            md: css`padding: 10px 14px; font-size:${theme.typography.size.lg};`,
            lg: css`padding: 12px 18px; font-size:${theme.typography.size.xl};`,
        }; return map[size]
    }}

    ${({ variant = 'primary' }) => {
        switch(variant) {
            case 'ghost': return css`
                background: transparent;
                color: ${theme.color.text.primary};
                border-color: ${theme.color.border.base};
                &:hover{ background: #EEF2FF }
                &:focus-visible{ ${focusRing} }
            `
            case 'danger': return css`
                background: ${theme.color.state.danger};
                color: ${theme.color.text.inverse};
                &:hover{ opacity: .9 } &:focus-visible{ ${focusRing} }
            `
            default: return css`
                background: ${theme.color.brand.primary};
                color: ${theme.color.text.inverse};
                &:hover{ opacity: .95 } &:focus-visible{ ${focusRing} }
            `
        }
    }}
`

