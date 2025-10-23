import type { Metadata } from "next"
import "./globals.css"
import Nav from "@components/Nav"
import Footer from "@components/Footer"

export const metadata: Metadata = {
  title: "Dawn Construction Group",
  description: "High-fidelity render for a construction company website.",
  metadataBase: new URL("https://example.com")
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-brand-primary">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
