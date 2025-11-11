"use client"

import { Button } from "../ui/Button"
import { Register } from "./Register.styles"

type RegisterLayoutProps = {
    email: string
    code: string
    password: string
    confirm: string
    step: "email" | "verify" | "setpass" | "done"
    loading: boolean
    error: string | null
    onChange: (key: "email" | "code" | "password" | "confirm", v: string) => void
    onRequestCode: () => void
    onVerifyCode: () => void
    onSetPassword: () => void
    onGoLogin: () => void
}

export function RegisterLayout(props: RegisterLayoutProps) {
    const {
        email, code, password, confirm, step, loading, error,
        onChange, onRequestCode, onVerifyCode, onSetPassword, onGoLogin
    } = props

    return (
        <Register.Wrap>
            <Register.Card>
                <Register.Title>회원가입</Register.Title>
                <Register.Sub>이메일 인증</Register.Sub>
                {step === "email" && (
                    <div style={{ display: "grid", gap: 12 }}>
                        <Register.Field>
                            <Register.Label htmlFor="email">이메일</Register.Label>
                            <Register.Input 
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                value={email}
                                onChange={(e) => onChange("email", e.target.value)}
                            />
                        </Register.Field>
                        <Register.Row>
                            <div />
                            <Button
                                onClick={onRequestCode}
                                disabled={loading || !email}
                            > 
                                {loading ? "발송 중..." : "인증코드 보내기"}
                            </Button>
                        </Register.Row>
                        {error && <Register.ErrorText>{error}</Register.ErrorText>}
                    </div>
                )}

                {step === "verify" && (
                    <div style={{ display: "grid", gap: 12 }}>
                        <Register.Field>
                            <Register.Label>이메일</Register.Label>
                            <Register.Input 
                                value={email}
                                disabled
                            />
                        </Register.Field>
                        <Register.Field>
                            <Register.Label htmlFor="code">인증코드</Register.Label>
                            <Register.Input 
                                id="code"
                                inputMode="numeric"
                                maxLength={6}
                                placeholder="6자리"
                                value={code}
                                onChange={(e) => onChange("code", e.target.value)}
                            />
                            <Register.Hint>코드는 10분간 유효합니다.</Register.Hint>
                        </Register.Field>
                        <Register.Row>
                            <Button 
                                variant="ghost"
                                onClick={onRequestCode}
                                disabled={loading}
                            >
                                코드 재발송
                            </Button>
                            <Button
                                onClick={onVerifyCode}
                                disabled={loading || code.length !== 6}
                            >
                                {loading ? "확인 중..." : "인증코드 확인"}
                            </Button>
                        </Register.Row>
                        {error && <Register.ErrorText>{error}</Register.ErrorText>}
                    </div>
                )} 

                {step === "setpass" && (
                    <div style={{ display: "grid", gap: 12 }}>
                        <Register.Field>
                            <Register.Label>이메일</Register.Label>
                            <Register.Input
                                value={email}
                                disabled
                            />
                            <Register.Field>
                                <Register.Label htmlFor="pw">비밀번호</Register.Label>
                                <Register.Input 
                                    id="pw"
                                    type="password"
                                    placeholder="8자 이상"
                                    value={password}
                                    onChange={(e) => onChange("password", e.target.value)}
                                />
                            </Register.Field>
                            <Register.Field>
                                <Register.Label htmlFor="pw2">비밀번호 확인</Register.Label>
                                <Register.Input 
                                    id="pw2"
                                    type="password"
                                    placeholder="다시 입력"
                                    value={confirm}
                                    onChange={(e) => onChange("confirm", e.target.value)}
                                />
                            </Register.Field>
                            <Register.Row>
                                <div />
                                <Button
                                    onClick={onSetPassword}
                                    disabled={loading || !password || password !== confirm}
                                >
                                    {loading ? "설정 중..." : "비밀번호 설정하고 가입 완료"}
                                </Button>
                            </Register.Row>
                            {error && <Register.ErrorText>{error}</Register.ErrorText>}
                        </Register.Field>
                    </div>
                )}

                {step === "done" && (
                    <div style={{ display: "grid", gap: 12 }}>
                        <p>
                            회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.
                        </p>
                        <Register.Row>
                            <div />
                            <Button onClick={onGoLogin}>로그인 페이지로 이동</Button>
                        </Register.Row>
                    </div>
                )}
            </Register.Card>
        </Register.Wrap>
    )
}