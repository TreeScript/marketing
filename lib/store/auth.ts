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
    clear: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    initialized: false,
    setUser: (u) => set({ 
        user: u,
        initialized: true
    }),
    clear: () => set({ 
        user: null,
        initialized: true 
    })
}))