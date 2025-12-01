export const color = {
    brand: { primary: "#3B82F6", secondary: "#6366F1" },
    text: { primary: "#0F172A", secondary: "#334155", subtle: "#64748B", inverse: "#FFFFFF" },
    surface: { base: "#FFFFFF", muted: "#F8FAFC", soft: "#F1F5F9" },
    border: { base: "#E2E8F0", strong: "#CBD5E1" },
    state: { success: "#10B981", warning: "#F59E0B", danger: "#EF4444", info: "#3B82F6" },
}

export const space = {
    xs: "4px", 
    sm: "8px", 
    md: "12px", 
    lg: "16px", 
    xl: "24px", 
    "2xl": "32px", 
    "3xl": "40px",
} as const

export const radius = {
    sm: "6px",
    md: "10px",
    lg: "14px",
    pill: "999px",
} as const

export const shadow = {
    xs: "0 1px 2px rgba(2, 6, 23, 0.06)",
    md: "0 6px 24px rgba(2, 6, 23, 0.08)",
    lg: "0 18px 40px rgba(2, 6, 23, 0.10)",
} as const

export const typography = {
    font: { base: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif` },
    size: { 
        sm: "12px", 
        md: "14px", 
        lg: "16px", 
        xl: "20px", 
        "2xl": "24px",
        "3xl": "30px" 
    },
    weight: { 
        regular: 400, 
        medium: 500,
        semibold: 600,
        bold: 700 
    },
    line: { 
        tight: 1.2, 
        snug: 1.35, 
        normal: 1.5 
    },
} as const

