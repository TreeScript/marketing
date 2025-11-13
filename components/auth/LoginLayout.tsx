"use client"

import { Button } from "../ui/Button"
import { Login } from "./Login.styles"

type LoginLayoutProps = {
    onGuest: () => void
    loading: boolean
    error: string | null
}

export function LoginLayout({
    onGuest,
    loading,
    error
}: LoginLayoutProps) {
    return (
        <Login.Page>
            <Login.Shell>
                <Login.TopBar>
                    <Login.Brand>
                        <Login.BrandMark>
                            <Login.BrandBar>
                                <span />
                                <span />
                                <span />
                            </Login.BrandBar>
                        </Login.BrandMark>
                        <Login.BrandName>Marketing SQL Lab</Login.BrandName>
                        <Login.Badge>Beta</Login.Badge>
                    </Login.Brand>
                </Login.TopBar>

                <Login.MainGrid>
                    <Login.Intro>
                        <Login.IntroCaption>
                            데이터 기반 마케터를 위한 실전 연습실
                        </Login.IntroCaption>
                        <Login.IntroTitle>
                            SQL · GA4 · GTM까지, <span>실무형 연습</span>
                        </Login.IntroTitle>
                        <Login.IntroSub>
                            실제 마케팅 데이터를 기반으로 SQL 문제를 풀고
                            <br />
                            GA4와 GTM 시나리오를 연습하며 포트폴리오를 쌓아보세요.
                        </Login.IntroSub>
                        <Login.BulletList>
                            <Login.BulletItem>
                                <Login.BulletIcon>📊</Login.BulletIcon>
                                <Login.BulletText>
                                    캠페인 · 채널 · 소재별 퍼포먼스 SQL 실습
                                </Login.BulletText>
                                </Login.BulletItem>
                            <Login.BulletItem>
                                <Login.BulletIcon>🧩</Login.BulletIcon>
                                <Login.BulletText>
                                    퍼널 · 리텐션 · 코호트 분석 시나리오 문제
                                </Login.BulletText>
                            </Login.BulletItem>
                            <Login.BulletItem>
                                <Login.BulletIcon>🔐</Login.BulletIcon>
                                <Login.BulletText>
                                    실습 기록을 마케터 포트폴리오로 연결
                                </Login.BulletText>
                            </Login.BulletItem>
                        </Login.BulletList>
                    </Login.Intro>

                    <Login.AuthPanel>
                        {/* TODO */}
                    </Login.AuthPanel>
                </Login.MainGrid>
            </Login.Shell>
        </Login.Page>
    )
}