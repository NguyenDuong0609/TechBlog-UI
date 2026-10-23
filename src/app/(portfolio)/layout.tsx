import type { Metadata } from "next";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";
import ThemeProvider from "@/components/portfolio/ThemeProvider";

export const metadata: Metadata = {
  title: "Duong Nguyen | Fullstack & DevOps Engineer",
  description: "Portfolio of Duong Nguyen, Fullstack Developer and DevOps Engineer.",
};

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="portfolio-theme bg-surface font-body-md text-body-md text-on-surface antialiased">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
