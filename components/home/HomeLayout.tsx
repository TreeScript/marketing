"use client"

import { Home } from "./Home.styles"
import { Button } from "../ui/Button"
 
type HomeUser = {
    id: string
    role: string
} | null

type HomeLayoutProps = {
    user: HomeUser,
    onGoLogin: () => void,
    onLogout: () => void
}

export function HomeLayout({
    user,
    onGoLogin,
    onLogout
}: HomeLayoutProps) {

    return (
        <Home.Page>
            <Home.Shell>
                <Home.Badge>main · temp</Home.Badge>
                <Home.Title>Marketing SQL Lab</Home.Title>
                <Home.Sub>
                    임시 메인 화면입니다. 게스트 로그인 플로우 확인 중
                </Home.Sub>

                <Home.Section>
                    <Home.Label>
                        현재 로그인 상태
                        {user ? (
                            <>
                                <Home.Value>
                                    {user.role === "guest"
                                        ? `게스트 모드로 접속 중:  ${user.id}, ${user.role}`
                                        : `${user.role} · ${user.id}`
                                    }    
                                </Home.Value>
                                <Home.Hint>
                                    Zustand 스토어에서 불러온 값
                                </Home.Hint>

                                <Home.ButtonWrap>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={onLogout}
                                        loading={false}
                                    >
                                        로그아웃
                                    </Button>
                                </Home.ButtonWrap>
                            </>
                        ) : (
                            <>
                                <Home.Value>로그인 정보가 없습니다.</Home.Value>
                                <Home.Hint>
                                    아직 상태가 없으면 로그인 페이지로 돌아가서 다시 시도
                                </Home.Hint>
                                <Home.ButtonWrap>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={onGoLogin}
                                        loading={false}
                                    >
                                        로그인 페이지로 이동
                                    </Button>
                                </Home.ButtonWrap>
                            </>
                        )}
                    </Home.Label>
                </Home.Section>
            </Home.Shell>
        </Home.Page>
    )
}