import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry"
import Providers from "./providers"
import { useAuthInit } from "@/lib/hooks/auth/useAuthInit";


export const metadata: Metadata = {
    title: "marketing_project",
    description: "Data-driven marketer playground",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // useAuthInit()

    return (
        <html>
            <body>
                <StyledComponentsRegistry>
                    <Providers>{children}</Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
