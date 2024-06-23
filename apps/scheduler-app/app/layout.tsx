import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@repo/ui/styles/shadcn-rose"
import { ThemeProvider } from "../components/theme-provider"
import { SessionProviders } from "../components/session-provider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Bayesian Workflow Autommation",
  description: "Automation of all your personal and professional workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProviders>
          <ThemeProvider attribute="class"  defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </SessionProviders>
      </body>
    </html>
  );
}
