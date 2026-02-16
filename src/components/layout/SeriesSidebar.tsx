import Link from "next/link";
import { Series } from "@/types/article";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PRESETS } from "@/lib/motion-presets";

interface SeriesSidebarProps {
    series: Series;
    currentArticleId: string;
}

export default function SeriesSidebar({ series, currentArticleId }: SeriesSidebarProps) {
    const totalArticles = series.articles.length;
    const currentIndex = series.articles.findIndex(a => a.id === currentArticleId) + 1;

    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-4 bg-primary rounded-full transition-colors" />
                    <h3 className="text-[11px] font-bold tracking-tech text-foreground flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5" />
                        Series bài viết
                    </h3>
                </div>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    {currentIndex} / {totalArticles}
                </span>
            </div>

            <div className="">
                <p className="text-sm font-bold text-foreground line-clamp-2 leading-tight">
                    {series.title}
                </p>
            </div>

            <div className="max-h-[400px] overflow-y-auto custom-scrollbar -mx-6">
                <motion.div
                    className="divide-y divide-border/50"
                    variants={PRESETS.staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {series.articles.map((article, index) => {
                        const isActive = article.id === currentArticleId;
                        return (
                            <motion.div
                                key={article.id}
                                variants={{
                                    ...PRESETS.staggerItem,
                                    ...PRESETS.listItemHover
                                }}
                                whileHover="hover"
                            >
                                <Link
                                    href={`/post/${article.slug}`}
                                    className={cn(
                                        "flex gap-4 p-5 transition-colors group relative",
                                        isActive ? "bg-primary/5" : "hover:bg-secondary/50"
                                    )}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />
                                    )}
                                    <div className="text-xs font-bold text-neutral-300 dark:text-neutral-700 mt-0.5 w-4 shrink-0 text-center">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={cn(
                                            "text-sm leading-tight line-clamp-2 transition-colors",
                                            isActive ? "text-primary font-bold" : "text-foreground group-hover:text-primary font-medium"
                                        )}>
                                            {article.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-2 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                                            <span>Bài số {index + 1}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <div className="pt-2 border-t border-border/40">
                <Button variant="ghost" size="sm" className="w-full text-[11px] font-bold text-primary hover:bg-primary/5 border border-primary/10 rounded-lg h-8">
                    Xem toàn bộ series
                </Button>
            </div>
        </div>
    );
}
