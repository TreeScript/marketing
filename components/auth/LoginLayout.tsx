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
                        <Login.AuthCard>
                            <Login.AuthHeader>
                                <Login.AuthTitle>로그인</Login.AuthTitle>
                                <Login.Badge>Guest & E-mail</Login.Badge>
                            </Login.AuthHeader>
                            <Login.AuthHint>
                                게스트, 이메일 로그인 가능합니다.
                            </Login.AuthHint>

                            <div
                                style={{
                                    display: "grid",
                                    gap: 12,
                                    marginTop: 8
                                }}
                            >   
                                <Button
                                    onClick={onGuest}
                                    disabled={loading}
                                    loading={loading}
                                    style={{ width: "100%" }}
                                >
                                    {loading ? "진행 중..." : "게스트로 진행하기"}
                                </Button>
                                <Login.AuthDivider />
                                <Button
                                    variant="ghost"
                                    size="md"
                                    disabled
                                    loading={loading}
                                    title="다음 단계에서 활성화"
                                    style={{ width: "100%" }}
                                > 
                                    이메일로 로그인 / 회원가입
                                </Button>
                            </div>
                            {error && <Login.ErrorText>{error}</Login.ErrorText>}
                            <Login.AuthFooterText>
                                이메일 로그인은 인증코드로 진행될 예정입니다.
                            </Login.AuthFooterText>
                        </Login.AuthCard>

                        <Login.MiniDashboard>
                            <Login.MiniTitle>
                                <span>오늘의 캠페인 성과</span>
                                <span style={{ fontSize: 11, color: "#9ca3af" }}>
                                    Last 7 days
                                </span>
                            </Login.MiniTitle>
                            <Login.MetricRow>
                                <Login.Metric>
                                    <Login.MetricLabel>CTR</Login.MetricLabel>
                                    <Login.MetricValue>4.8%</Login.MetricValue>
                                </Login.Metric>
                            </Login.MetricRow>
                            <Login.MetricRow>
                                <Login.Metric>
                                    <Login.MetricLabel>ROAS</Login.MetricLabel>
                                    <Login.MetricValue>312%</Login.MetricValue>
                                </Login.Metric>
                            </Login.MetricRow>
                            
                            <Login.BarRow>
                                <Login.Bar $height={40} />
                                <Login.Bar $height={72} />
                                <Login.Bar $height={55} />
                                <Login.Bar $height={88} />
                            </Login.BarRow>
                        </Login.MiniDashboard>
                    </Login.AuthPanel>
                </Login.MainGrid>
            </Login.Shell>
        </Login.Page>
    )
}