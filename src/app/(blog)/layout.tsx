import type { Metadata } from "next";
import { Suspense } from "react";
import BackToTopButton from "@/components/common/BackToTop";
import ScrollToTop from "@/components/common/ScrollToTop";
import QueryProvider from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "ND | Technical Blog",
  description: "Technical articles and knowledge sharing from the developer community.",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <div className="techblog-theme">
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          {children}
          <BackToTopButton />
        </div>
      </QueryProvider>
    </ThemeProvider>
  );
}
