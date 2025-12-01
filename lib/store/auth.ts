import { create } from "zustand"

export type Role = "guest" | "user" | "manager" | "admin" | "portfolio_viewer"
type User = {
    id: string
    email: string
    role: Role
} | null

type AuthState = {
    user: User
    initialized: boolean
    setUser: (u: User) => void
    setInitialized: (v: boolean) => void
    clear: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    initialized: false,
    setUser: (u) => set({ user: u }),
    setInitialized: (v) => set({ initialized: v }),
    clear: () => set({ user: null, initialized: false })
}))