"use client";

import { useState, useEffect, useRef } from "react";
import { useUIStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { List, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRESETS } from "@/lib/motion-presets";

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TOCProps {
    items?: TOCItem[];
    content?: string;
}

export default function TableOfContents({ items: propItems, content }: TOCProps) {
    const [items, setItems] = useState<TOCItem[]>(propItems || []);
    const [isReady, setIsReady] = useState(!!propItems);
    const [readingProgress, setReadingProgress] = useState(0);
    const { tocActiveId, setTocActiveId } = useUIStore();
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (propItems) {
            setItems(propItems);
            setIsReady(true);
        }
    }, [propItems]);

    useEffect(() => {
        const updateProgress = () => {
            const article = document.getElementById("article-content");
            if (!article) return;

            const rect = article.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const fullHeight = rect.height;
            const scrolledHeight = Math.max(0, -rect.top);

            const progress = Math.min(100, Math.round((scrolledHeight / (fullHeight - windowHeight + 200)) * 100));
            setReadingProgress(isNaN(progress) ? 0 : progress);
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    useEffect(() => {
        if (items.length === 0) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    const nearest = visible.reduce((prev, curr) =>
                        Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev
                    );
                    setTocActiveId(nearest.target.id);
                }
            },
            {
                rootMargin: "-100px 0px -70% 0px",
                threshold: [0, 1],
            }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                element.style.scrollMarginTop = "120px";
                observer.current?.observe(element);
            }
        });

        return () => observer.current?.disconnect();
    }, [items, setTocActiveId]);

    if (items.length === 0 && isReady) return null;

    if (!isReady || items.length === 0) {
        return (
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-5/6" />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-1 h-4 bg-primary rounded-full transition-colors" />
                <h3 className="text-[11px] font-bold tracking-tech text-foreground flex items-center gap-2">
                    <List className="h-3.5 w-3.5" />
                    Mục lục bài viết
                </h3>
            </div>

            <div className="relative pl-3">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border" />

                <motion.ul
                    className="space-y-4"
                    variants={PRESETS.staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {items.map((item) => {
                        const isActive = tocActiveId === item.id;
                        return (
                            <motion.li
                                key={item.id}
                                className={cn(
                                    "relative transition-all duration-200",
                                    item.level === 3 ? "ml-4" : "ml-0"
                                )}
                                variants={{
                                    ...PRESETS.staggerItem,
                                    ...PRESETS.listItemHover
                                }}
                                whileHover="hover"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="toc-indicator"
                                        className="absolute -left-[13.5px] top-1.5 w-[2px] h-[12px] bg-primary z-10"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}

                                <a
                                    href={`#${item.id}`}
                                    className={cn(
                                        "block text-sm transition-all duration-200",
                                        isActive
                                            ? "text-primary font-bold"
                                            : "text-neutral-500 dark:text-secondary-foreground hover:text-foreground dark:hover:text-neutral-100 font-medium"
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(item.id);
                                        if (element) {
                                            const headerOffset = 110;
                                            const elementPosition = element.getBoundingClientRect().top;
                                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                        }
                                    }}
                                >
                                    <div className="flex items-start gap-2">
                                        {item.level === 2 && (
                                            <ChevronRight className={cn(
                                                "h-3 w-3 mt-1 shrink-0 transition-transform",
                                                isActive ? "rotate-90 opacity-100" : "opacity-0 -rotate-90"
                                            )} />
                                        )}
                                        <span className="leading-relaxed line-clamp-2">
                                            {item.text}
                                        </span>
                                    </div>
                                </a>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </div>

            <div className="mt-4 pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 flex items-center justify-center">
                        <svg className="h-10 w-10 -rotate-90">
                            <circle
                                cx="20"
                                cy="20"
                                r="18"
                                className="stroke-secondary/50 dark:stroke-secondary/30 fill-none"
                                strokeWidth="2"
                            />
                            <motion.circle
                                cx="20"
                                cy="20"
                                r="18"
                                className="stroke-primary fill-none"
                                strokeWidth="2"
                                strokeDasharray="100"
                                strokeDashoffset={100 - readingProgress}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-[10px] font-bold text-primary">
                            {Math.round(readingProgress)}%
                        </span>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-neutral-500 dark:text-secondary-foreground uppercase tracking-wider">Tiến độ đọc</p>
                        <p className="text-[10px] text-neutral-400 dark:text-muted-foreground font-medium">{Math.round(readingProgress)}% hoàn thành</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
