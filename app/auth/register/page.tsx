"use client"

import { useRegisterForm } from "./useRegisterForm"
import { RegisterLayout } from "@/components/auth/RegisterLayout"

export default function RegisterPage() {
    
    const { state, actions } = useRegisterForm()

    return (
        <RegisterLayout 
            email={state.email}
            code={state.code}
            password={state.password}
            confirm={state.confirm}
            step={state.step}
            loading={state.loading}
            error={state.errorMsg}
            onChange={actions.onChange}
            onRequestCode={actions.onRequestCode}
            onVerifyCode={actions.onVerifyCode}
            onSetPassword={actions.onSetPassword}
            onGoLogin={actions.onGoLogin}
        />
    )
}