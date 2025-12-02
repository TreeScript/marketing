"use client"

import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    min-height: 100vh;
    background: #f8fafc;
`
const Sidebar = styled.aside`
    width: 240px;
    background: #0f172a;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
`
const Logo = styled.div`
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 24px;
`

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const NavItem = styled.a`
    color: #e2e8f0;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 0;
    cursor: pointer;

    &:hover {
        color: #ffffff;
    }

`

const ContentArea = styled.main`
    flex: 1;
    padding: 32px;
`

export const AdminLayoutStyle = {
    Wrap,
    Sidebar,
    Logo,
    NavItem,
    ContentArea,
    Nav
}