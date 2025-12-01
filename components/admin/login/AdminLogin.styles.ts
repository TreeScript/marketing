"use client"

import styled from "styled-components"

const Wrap = styled.div`
    width: 100%;
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 380px;
    padding: 32px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow:
        0 18px 40px rgba(15,23,42,0.08),
        0 0 0 1px rgba(148,163,184,0.12);
`

const Title = styled.h1`
    margin: 0 0 16px 0;
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.03em;
`

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    margin-top: 12px;
    font-size: 15px;

    &:focus {
        border-color: #6366f1;
        outline: none;
    }
`

const LoginButton = styled.button`
    width: 100%;
    margin-top: 18px;
    padding: 12px;
    font-size: 15px;
    font-weight: 600;
    background: #0f172a;
    color: #fff;
    border: none;
    border-radius: 10px;
    transition: 0.2s;

    &:hover {
        background: #1e293b;
    }
`

const ErrorBox = styled.div`
    margin-top: 14px;
    padding: 12px;
    color: #dc2626;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 8px;
    font-size: 14px;
`

export const AdminLoginStyle = {
    Wrap,
    Card,
    Title,
    Input,
    LoginButton,
    ErrorBox,
}