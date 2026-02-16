"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MoveLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Header />

            <main className="flex-1 flex items-center justify-center p-4">
                <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="relative inline-block scale-110 sm:scale-125 mb-12">
                        <h1 className="text-[12rem] font-black text-primary/5 select-none leading-none tracking-tighter">404</h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-card p-10 rounded-2xl border border-border space-y-4 min-w-[280px]">
                                <h2 className="text-3xl font-bold text-foreground tracking-tight">Trang không tồn tại</h2>
                                <p className="text-neutral-500 dark:text-secondary-foreground leading-relaxed font-medium">
                                    Dường như trang bạn đang tìm kiếm đã được di chuyển hoặc không còn tồn tại.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 relative z-10">
                        <Link href="/">
                            <Button size="lg" className="rounded-xl px-10 h-14 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:-translate-y-1 active:scale-95 text-base font-bold uppercase tracking-widest">
                                <Home className="w-5 h-5" />
                                Trang chủ
                            </Button>
                        </Link>

                        <Button
                            variant="secondary"
                            size="lg"
                            className="rounded-xl px-10 h-14 gap-2 bg-secondary/50 dark:bg-secondary/30 text-foreground border-transparent hover:bg-secondary transition-all hover:-translate-y-1 active:scale-95 text-base font-bold uppercase tracking-widest"
                            onClick={() => window.history.back()}
                        >
                            <MoveLeft className="w-5 h-5" />
                            Quay lại
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
