"use client"

import styled from "styled-components"
import Link from "next/link"

export const Shell = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
`

export const Header = styled.header`
    width: 100%;
    height: 56px;
    padding: 0 28px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
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

export const AdminButton = styled(Link)`
    padding: 8px 14px;
    border-radius: 8px;
    border: 1px solid #dc2626;
    color: #b91c1c;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.18s ease;

    &:hover {
        background: #dc2626;
        color: #fff;
    }
`

export const Footer = styled.footer`
    padding: 16px 24px;
    font-size: 12px;
    color: #94a3b8;
    border-top: 1px solid rgba(148, 163, 184, 0.3);
    background: #f8fafc;
`

export const Nav = styled.nav`
    flex: 1;
    display: flex;
    justify-content: center;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.14);
`

export const NavItem = styled.li`
    list-style: none;
`

export const NavLink = styled(Link)<{ $active?: boolean }>`
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.01em;
    text-decoration: none;

    color: ${({ $active }) => ($active ? "#0f172a" : "#64748b")};
    background: ${({ $active }) =>
        $active ? "rgba(255, 255, 255, 0.9)" : "transparent"};
    box-shadow: ${({ $active }) =>
        $active ? "0 4px 12px rgba(15, 23, 42, 0.08)" : "none"};

    transition: all 0.18s ease;

    &:hover {
        background: ${({ $active }) =>
            $active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)"};
        color: #0f172a;
    }
`

export const RightArea = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const UserText = styled.span`
    font-size: 13px;
    color: #475569;
`

export const HeaderInner = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`

export const AppShell = {
    Shell,
    Header,
    Brand,
    Main,
    Footer,
    Nav,
    NavLink,
    NavItem,
    RightArea,
    UserText,
    HeaderInner,
    AdminButton
}

