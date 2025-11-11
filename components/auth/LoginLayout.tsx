"use client"

import { Button } from "../ui/Button"
import { Wrap, Card, Title, Sub, Divider, ErrorText } from './Login.styles'

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
        <Wrap>
            <Card>
                <Title>로그인</Title>
                <Sub>게스트로 시작하거나, 이메일로 로그인하세요.</Sub>

                <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
                    <Button onClick={onGuest} disabled={loading}>
                        {loading ? '진행 중...' : '게스트로 시작하기'}
                    </Button>

                    <Divider>
                        <div style={{ fontSize: 14, marginBottom: 8, color: '#334155' }}>
                            이메일 로그인(인증코드)은 다음 단계에서 연결합니다.
                        </div>
                        <Button 
                            variant="ghost" 
                            size="md" 
                            disabled 
                            title="다음 단계에서 활성화"
                        >
                            이메일로 로그인/회원가입
                        </Button>
                    </Divider>

                    {error && <ErrorText>{error}</ErrorText>}
                </div>
            </Card>
        </Wrap>
    )
}