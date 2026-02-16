"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Article } from "@/types/article";
import { Clock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";

interface SimpleArticle {
    id: string;
    title: string;
    slug: string;
    readTime: number;
    publishedAt: string;
    views?: number;
    comments?: number;
    bookmarks?: number;
    author?: {
        name: string;
    };
}

interface ArticleCarouselProps {
    articles: SimpleArticle[] | Partial<Article>[];
    title?: string;
    titleContent?: React.ReactNode;
    viewAllLink?: string;
}

const STRIDE_GAP = 16;

export default function ArticleCarousel({ articles, title, titleContent, viewAllLink }: ArticleCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const x = useMotionValue<number>(0);

    // Calculate metrics
    const updateMetrics = useCallback(() => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.offsetWidth;

        let items = 1;
        if (window.matchMedia("(min-width: 1024px)").matches) items = 4;
        else if (window.matchMedia("(min-width: 768px)").matches) items = 3;
        else if (window.matchMedia("(min-width: 640px)").matches) items = 2;

        setVisibleItems(items);
        const width = (containerWidth - (items - 1) * STRIDE_GAP) / items;
        setItemWidth(width);
    }, []);

    useEffect(() => {
        updateMetrics();
        window.addEventListener("resize", updateMetrics);
        return () => window.removeEventListener("resize", updateMetrics);
    }, [updateMetrics]);

    const maxIndex = Math.max(0, articles.length - visibleItems);
    const stride = itemWidth + STRIDE_GAP;

    useEffect(() => {
        if (!isDragging && itemWidth > 0) {
            const targetX = -currentIndex * stride;
            animate(x, targetX, {
                duration: 0.3,
                ease: "circOut"
            });
        }
    }, [currentIndex, isDragging, itemWidth, stride, x]);

    useEffect(() => {
        if (isPaused || isDragging || articles.length <= visibleItems) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= maxIndex) return 0;
                return prev + 1;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [isPaused, isDragging, maxIndex, visibleItems, articles.length]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        setIsDragging(false);
        const { offset, velocity } = info;
        const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;

        if (swipe) {
            const direction = offset.x > 0 ? -1 : 1;
            setCurrentIndex((prev) => Math.min(Math.max(prev + direction, 0), maxIndex));
        } else {
            const currentX = x.get();
            const index = Math.round(-currentX / stride);
            setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
        }
    };

    if (!articles.length) return null;

    return (
        <div className="py-8 mt-4 border-t border-border/40 w-full overflow-hidden">
            <div className="flex items-center justify-between mb-6 px-1">
                {titleContent ? titleContent : (
                    title && (
                        <h3 className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">
                            {title}
                        </h3>
                    )
                )}
                {viewAllLink && (
                    <Link href={viewAllLink} className="text-xs font-black text-primary hover:text-primary/80 flex items-center gap-1 uppercase tracking-wider">
                        Xem tất cả
                    </Link>
                )}
            </div>

            <div
                ref={containerRef}
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex touch-pan-y"
                    style={{ x, gap: STRIDE_GAP }}
                    drag="x"
                    dragElastic={0.05}
                    dragConstraints={{
                        left: -maxIndex * stride,
                        right: 0
                    }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {articles.map((article: SimpleArticle | Partial<Article>) => (
                        <motion.div
                            key={article.id}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className={cn(
                                "flex-shrink-0 bg-card rounded-xl p-6 border border-border transition-all duration-300",
                                "hover:border-primary/20",
                                "flex flex-col justify-between h-[210px] cursor-grab active:cursor-grabbing"
                            )}
                            style={{ width: itemWidth }}
                        >
                            <Link
                                href={`/post/${article.slug}`}
                                className="h-full flex flex-col justify-between"
                                draggable={false}
                                onClick={(e) => {
                                    if (isDragging) e.preventDefault();
                                }}
                            >
                                <div>
                                    <h4 className="font-black text-foreground mb-3 text-base leading-snug line-clamp-2 hover:text-primary transition-colors tracking-tight" title={article.title}>
                                        {article.title}
                                    </h4>
                                    <div className="text-xs font-bold text-muted-foreground truncate flex items-center gap-2">
                                        <span className="text-primary/70">@</span>
                                        {article.author?.name || "Tác giả"}
                                        {article.publishedAt && (
                                            <span className="text-muted-foreground/40 font-medium ml-auto">
                                                {new Date(article.publishedAt).toLocaleDateString("vi-VN", { day: 'numeric', month: 'short' })}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-xs text-muted-foreground/80 pt-4 border-t border-border/20 mt-auto">
                                    <div className="flex items-center gap-3">
                                        {article.views !== undefined && (
                                            <span className="flex items-center gap-1.5 font-bold" title="Lượt xem">
                                                <Eye className="h-3.5 w-3.5 text-primary/50" /> {article.views}
                                            </span>
                                        )}
                                    </div>
                                    <span className="flex items-center gap-1.5 ml-auto font-bold">
                                        <Clock className="h-3.5 w-3.5 text-primary/40" />
                                        {article.readTime}p
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {maxIndex > 0 && (
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(articles.length / visibleItems) }).map((_, pageIndex) => {
                        const targetIndex = pageIndex * visibleItems;
                        const isActive = currentIndex >= targetIndex && currentIndex < targetIndex + visibleItems;

                        return (
                            <button
                                key={pageIndex}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-500",
                                    isActive ? "bg-primary w-8" : "bg-primary/20 w-3 hover:bg-primary/40"
                                )}
                                onClick={() => setCurrentIndex(Math.min(targetIndex, maxIndex))}
                                aria-label={`Go to slide group ${pageIndex + 1}`}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
