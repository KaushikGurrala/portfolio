import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Kaushik Gurrala — AI/ML Software Engineer",
    template: "%s — Kaushik Gurrala",
  },
  description:
    "AI/ML Software Engineer building reliable systems from model evaluation and agentic workflows to APIs, databases, and user-facing products.",
  openGraph: {
    title: "Kaushik Gurrala — AI/ML Software Engineer",
    description:
      "AI systems that move from models to real products.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Gurrala — AI/ML Software Engineer",
    description: "AI systems that move from models to real products.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
