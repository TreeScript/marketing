import { css } from "styled-components"
import { color, radius, shadow, space } from "./tokens"

export const centerFlex = css`
    display: flex; align-items: center; justify-content: center;
`

export const focusRing = css`
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
`

export const cardBase = css`
    background: ${color.surface.base};
    border: 1px solid ${color.border.base};
    border-radius: ${radius.lg};
    box-shadow: ${shadow.md};
    padding: ${space.xl};
`