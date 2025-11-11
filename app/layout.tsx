import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry"
import Providers from "./providers"


export const metadata: Metadata = {
    title: "marketing_project",
    description: "Data-driven marketer playground",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
