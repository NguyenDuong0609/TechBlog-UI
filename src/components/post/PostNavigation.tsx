import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavArticle {
    slug: string;
    title: string;
}

interface ArticleNavigationProps {
    prev?: NavArticle;
    next?: NavArticle;
}

export default function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
    if (!prev && !next) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 pt-8 border-t border-border/50">
            {prev ? (
                <Link
                    href={`/post/${prev.slug}`}
                    className="group flex flex-col items-start p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-accent/40 active:scale-[0.99] transition-all duration-300"
                >
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-foreground transition-colors">
                        <ArrowLeft className="h-3 w-3" /> Bài trước
                    </span>
                    <span className="font-bold text-foreground text-sm leading-snug line-clamp-2">
                        {prev.title}
                    </span>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link
                    href={`/post/${next.slug}`}
                    className="group flex flex-col items-end text-right p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-accent/40 active:scale-[0.99] transition-all duration-300"
                >
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2 group-hover:text-foreground transition-colors">
                        Bài tiếp theo <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="font-bold text-foreground text-sm leading-snug line-clamp-2">
                        {next.title}
                    </span>
                </Link>
            ) : (
                <div />
            )}
        </div>
    );
}
