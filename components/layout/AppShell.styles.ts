"use client"

import { ReactNode } from "react"
import styled from "styled-components"
import { useAuthStore } from "@/lib/store/auth"
import { Button } from "../ui/Button"

export const Shell = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
`

export const Header = styled.header`
    height: 56px;
    padding: 0 24px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(248, 250, 252, 0.9);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 10;
`

export const Brand = styled.div`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #0f172a;
`

export const Main = styled.main`
    flex: 1;
    padding: 24px 24px 40px;
`

export const Footer = styled.footer`
    padding: 16px 24px;
    font-size: 12px;
    color: #94a3b8;
    border-top: 1px solid rgba(148, 163, 184, 0.3);
    background: #f8fafc;
`

export const AppShell = {
    Shell,
    Header,
    Brand,
    Main,
    Footer,
}