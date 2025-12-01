import { css } from "styled-components"
import { shadow } from "./tokens"

export const centerFlex = css`
    display: flex; 
    align-items: center; 
    justify-content: center;
`

export const focusRing = css`
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
`

export const cardBase = css`
    background: #fff;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    box-shadow: ${shadow.md};
    padding: 32px;
`

export const elevateHover = css`
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
    will-change: transform, box-shadow;
    &:hover{ transform: translateY(-1px); box-shadow:${shadow.lg} }
`

export const divider = css`
    height: 1px;
    background: linear-gradient(90deg, #E5E7EB00, #E5E7EB00 20%, #E5E7EB 80%, #E5E7EB00);
`