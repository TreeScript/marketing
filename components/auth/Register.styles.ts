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

export const Field = styled.div`
    display: grid;
    gap: 8px;
`

export const Label = styled.label`
    font-size: 14px;
    color: #334155;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    font-size: 16px;
    &:focus { outline: none; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35); }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: end;
`

export const ErrorText = styled.div`
    color: #EF4444;
    font-size: 14px;
`

export const Hint = styled.div`
    font-size: 12px;
    color: #64748B;
`

export const Register = {
    Wrap,
    Card,
    Title,
    Sub,
    Field,
    Label,
    Input,
    Row,
    ErrorText,
    Hint,
}