"use client"

import { AdminLayoutStyle } from "./style"

export default function AdminLayout({
    children
}: { children: React.ReactNode }) {

    return (
        <AdminLayoutStyle.Wrap>
            <AdminLayoutStyle.Sidebar>
                <AdminLayoutStyle.Logo>
                    ADMIN MENU
                </AdminLayoutStyle.Logo>

                <AdminLayoutStyle.Nav>
                    <AdminLayoutStyle.NavItem href="/admin">어드민 홈</AdminLayoutStyle.NavItem>
                    <AdminLayoutStyle.NavItem href="/admin/problems">문제 목록</AdminLayoutStyle.NavItem>
                    <AdminLayoutStyle.NavItem href="/admin/problem/create">문제 생성</AdminLayoutStyle.NavItem>
                    <AdminLayoutStyle.NavItem href="/admin/problem/settings">관리자 설정</AdminLayoutStyle.NavItem>
                </AdminLayoutStyle.Nav>
            </AdminLayoutStyle.Sidebar>
            <AdminLayoutStyle.ContentArea>
                {children}
            </AdminLayoutStyle.ContentArea>
        </AdminLayoutStyle.Wrap>
    )
}