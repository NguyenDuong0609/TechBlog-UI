"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/types/article";
import Tag from "@/components/common/Tag";
import { cn } from "@/lib/utils";
import { PRESETS } from "@/lib/motion-presets";

interface ArticleCardProps {
    article: Article;
    hideThumbnail?: boolean;
}

export default function ArticleCard({ article, hideThumbnail = false }: ArticleCardProps) {
    if (!article || !article.slug) return null;

    return (
        <motion.article
            className="group bg-card rounded-xl border border-border transition-all duration-300 overflow-hidden will-change-transform hover:bg-primary/[0.02] hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5"
            variants={{
                ...PRESETS.reveal,
                hover: PRESETS.postCardProfessional.hover,
                tap: PRESETS.postCardProfessional.tap
            }}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="flex flex-col md:flex-row">
                {/* Article Image */}
                {!hideThumbnail && (
                    <Link href={`/post/${article.slug}`} className="md:w-1/3 overflow-hidden">
                        <div className="aspect-[4/3] md:h-full relative overflow-hidden bg-muted">
                            <img
                                src={article.thumbnail}
                                alt={article.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </Link>
                )}

                {/* Article Content */}
                <div className={cn("p-5 sm:p-6 flex flex-col justify-between", hideThumbnail ? "w-full" : "md:w-2/3")}>
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Link
                                href={`/user/${article.author.username}`}
                                className="flex items-center gap-2 group/author"
                            >
                                <img
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    className="w-5 h-5 rounded-full border border-border transition-all group-hover/author:border-primary/40"
                                />
                                <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 group-hover/author:text-primary transition-colors">
                                    {article.author.name}
                                </span>
                            </Link>
                            <span className="text-neutral-300 dark:text-neutral-700 text-xs">•</span>
                            <span className="text-[13px] font-medium text-neutral-500">
                                {new Date(article.publishedAt).toLocaleDateString("vi-VN", {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>

                        <Link href={`/post/${article.slug}`}>
                            <motion.h2
                                className="text-[20px] md:text-[24px] font-bold text-foreground mb-3 line-clamp-2 leading-[1.3] transition-colors group-hover:text-primary"
                                variants={PRESETS.postTitleHover}
                                initial="initial"
                                whileHover="hover"
                            >
                                {article.title}
                            </motion.h2>
                        </Link>

                        <p className="text-secondary-foreground text-[15px] line-clamp-2 mb-4 leading-relaxed">
                            {article.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {article.tags.slice(0, 3).map((tagName) => (
                                <Tag
                                    key={tagName}
                                    name={tagName}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-3 text-neutral-400">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-medium">{article.views}</span>
                                <span className="text-[11px] font-medium opacity-70">lượt xem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
