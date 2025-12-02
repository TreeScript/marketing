"use client"

import { AdminHomeStyle } from "./AdminHome.style"

export default function AdminHomeLayout() {
    
    return (
        <AdminHomeStyle.Wrapper>
            <AdminHomeStyle.Title>관리자 홈</AdminHomeStyle.Title>
            <AdminHomeStyle.CardGrid>
                <AdminHomeStyle.Card>
                    <AdminHomeStyle.CardTitle>
                        총 등록된 문제 수
                    </AdminHomeStyle.CardTitle>
                    <AdminHomeStyle.Number>
                        0
                    </AdminHomeStyle.Number>
                </AdminHomeStyle.Card>

                <AdminHomeStyle.Card>
                    <AdminHomeStyle.CardTitle>
                        최근 문제
                    </AdminHomeStyle.CardTitle>
                    <AdminHomeStyle.List>
                        문제가 없습니다.
                    </AdminHomeStyle.List>
                </AdminHomeStyle.Card>
            </AdminHomeStyle.CardGrid>
        </AdminHomeStyle.Wrapper>
    )
}