import styled from "styled-components"
import { cardBase, centerFlex } from "@/styles/mixins"

export const Wrap = styled.div`
    ${centerFlex};
    min-height: 100dvh;
    padding: 24px;
`

export const Card = styled.div`
    ${cardBase};
    width: 100%;
    max-width: 520px;
`

export const Title = styled.h1`
    margin: 0 0 8px;
    font-size: 24px;
`

export const Sub = styled.p`
    margin: 0 0 24px;
    color: #475569;
`

export const Divider = styled.div`
    margin-top: 8px;
    border-top: 1px solid #E2E8F0;
    padding-top: 16px;
`

export const ErrorText = styled.div`
    color: #EF4444;
    font-size: 14px;
`