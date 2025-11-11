import { create } from "zustand"

type Role = "guest" | "user" | "manager" | "admin" | "portfolio_viewer"
type User = {
    id: string
    email: string
    role: Role
} | null

type AuthState = {
    user: User
    setUser: (u: User) => void
    clear: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (u) => set({ user: u }),
    clear: () => set({ user: null })
}))