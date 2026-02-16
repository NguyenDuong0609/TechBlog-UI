"use client";

import Link from "next/link";
import { Flame, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PRESETS } from "@/lib/motion-presets";

const TRENDING_POSTS = [
    {
        id: "1",
        title: "Lộ trình học Frontend 2024: Từ Zero đến Hero",
        author: "Hoàng Nguyễn",
        views: "15.4K",
        rank: 1
    },
    {
        id: "2",
        title: "10 tính năng mới cực hot của Next.js 15 bạn cần biết",
        author: "Sơn Tùng M-TP",
        views: "12.1K",
        rank: 2
    },
    {
        id: "3",
        title: "Tại sao nên dùng Bun thay vì Node.js trong năm nay?",
        author: "Tech Master",
        views: "8.9K",
        rank: 3
    },
    {
        id: "4",
        title: "Hướng dẫn tối ưu SEO cho Single Page Application",
        author: "SEO Pro",
        views: "7.2K",
        rank: 4
    }
];

export default function TrendingWidget() {
    return (
        <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-foreground flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-70">
                    <Flame className="h-4 w-4 text-primary" />
                    Đang thịnh hành
                </h3>
            </div>

            <motion.div
                className="space-y-6"
                variants={PRESETS.staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {TRENDING_POSTS.map((post) => (
                    <motion.div
                        key={post.id}
                        variants={{
                            ...PRESETS.staggerItem,
                            ...PRESETS.listItemHover
                        }}
                        whileHover="hover"
                    >
                        <Link
                            href={`/post/${post.id}`}
                            className="group flex gap-4 items-start relative"
                        >
                            <div className="relative">
                                <div className="text-2xl font-bold text-muted-foreground/10 group-hover:text-primary transition-all duration-200">
                                    {post.rank}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-[13.5px] font-semibold text-foreground leading-snug group-hover:text-primary transition-all duration-200 line-clamp-2 mb-1.5 tracking-tight">
                                    {post.title}
                                </h4>
                                <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-semibold">
                                    <span className="hover:text-foreground transition-colors">{post.author}</span>
                                    <span className="opacity-30">•</span>
                                    <span className="flex items-center gap-1 group-hover:text-orange-500 transition-colors">
                                        <TrendingUp className="h-3 w-3" />
                                        {post.views}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <Button variant="secondary" className="w-full mt-8 h-11 rounded-xl text-xs font-bold text-primary bg-secondary/50 dark:bg-secondary/30 hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/20 transition-all uppercase tracking-widest">
                Khám phá thêm
            </Button>
        </div>
    );
}
