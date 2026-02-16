"use client";

import { Calendar, Clock, Eye } from "lucide-react";

interface SidebarMetadataProps {
    publishedAt: string | Date;
    readTime: number;
    views: number;
}

export default function SidebarMetadata({ publishedAt, readTime, views }: SidebarMetadataProps) {
    const formattedDate = new Date(publishedAt).toLocaleDateString("vi-VN", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="bg-card rounded-xl border border-border p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-sm">
            <h3 className="font-bold text-foreground text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4 sm:mb-6">
                Thông tin bài viết
            </h3>

            <div className="flex items-center gap-4 text-sm text-foreground/80">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] tracking-tech font-bold text-neutral-400 uppercase">Ngày đăng</span>
                    <span className="font-bold text-sm tracking-tight">{formattedDate}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-foreground">
                <div className="h-9 w-9 rounded-xl bg-secondary/50 dark:bg-secondary/30 flex items-center justify-center shrink-0 border border-border/50">
                    <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] tracking-tech font-bold text-neutral-400 uppercase">Thời gian đọc</span>
                    <span className="font-bold text-sm tracking-tight">{readTime} phút</span>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-foreground">
                <div className="h-9 w-9 rounded-xl bg-secondary/50 dark:bg-secondary/30 flex items-center justify-center shrink-0 border border-border/50">
                    <Eye className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] tracking-tech font-bold text-neutral-400 uppercase">Lượt xem</span>
                    <span className="font-bold text-sm tracking-tight">{views.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
}
