"use client";

import { Bookmark, Share2, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SidebarActions() {
    const [isSaved, setIsSaved] = useState(false);
    const [isShared, setIsShared] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
    };

    return (
        <div className="grid grid-cols-3 gap-2">
            <Button
                variant="secondary"
                size="icon"
                className={cn(
                    "flex-col h-20 rounded-xl gap-1.5 border-none transition-all duration-300 bg-secondary/50 dark:bg-secondary/30",
                    isSaved ? "text-primary bg-primary/10" : "text-neutral-500 dark:text-secondary-foreground hover:bg-secondary hover:text-primary"
                )}
                onClick={() => setIsSaved(!isSaved)}
                title="Lưu bài viết"
            >
                <Bookmark className={cn("h-5 w-5", isSaved && "fill-current")} />
                <span className="text-[9px] font-black uppercase tracking-tight">Lưu</span>
            </Button>

            <Button
                variant="secondary"
                size="icon"
                className={cn(
                    "flex-col h-20 rounded-xl gap-1.5 border-none transition-all duration-300 bg-secondary/50 dark:bg-secondary/30",
                    isShared ? "text-primary bg-primary/10" : "text-neutral-500 dark:text-secondary-foreground hover:bg-secondary hover:text-primary"
                )}
                onClick={handleShare}
                title="Chia sẻ link"
            >
                {isShared ? <Check className="h-5 w-5" /> : <Share2 className="h-5 w-5" />}
                <span className="text-[9px] font-black uppercase tracking-tight">{isShared ? "Đã sao chép" : "Chia sẻ"}</span>
            </Button>

            <Button
                variant="secondary"
                size="icon"
                className="flex-col h-20 rounded-xl gap-1.5 border-none bg-secondary/50 dark:bg-secondary/30 text-neutral-500 dark:text-secondary-foreground hover:bg-secondary hover:text-primary transition-all duration-300"
                onClick={scrollToTop}
                title="Quay lại đầu trang"
            >
                <ArrowUp className="h-5 w-5" />
                <span className="text-[9px] font-black uppercase tracking-tight">Lên đầu</span>
            </Button>
        </div>
    );
}
