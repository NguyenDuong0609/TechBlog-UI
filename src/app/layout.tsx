import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import BackToTopButton from "@/components/common/BackToTop";
import ScrollToTop from "@/components/common/ScrollToTop";
import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ND - Nền tảng chia sẻ kiến thức công nghệ",
  description: "Nền tảng chia sẻ kiến thức công nghệ hàng đầu Việt Nam. Nơi các developer cùng nhau học hỏi và phát triển với các bài viết về Programming, DevOps, AI, và nhiều hơn nữa.",
  keywords: ["nd", "blog", "technology", "programming", "developer", "vietnam", "bài viết công nghệ"],
  authors: [{ name: "ND Team" }],
  openGraph: {
    title: "ND - Nền tảng chia sẻ kiến thức công nghệ",
    description: "Nền tảng chia sẻ kiến thức công nghệ hàng đầu Việt Nam",
    url: "https://nd.asia",
    siteName: "ND",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ND - Nền tảng chia sẻ kiến thức công nghệ",
    description: "Nền tảng chia sẻ kiến thức công nghệ hàng đầu Việt Nam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
            {children}
            <BackToTopButton />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
