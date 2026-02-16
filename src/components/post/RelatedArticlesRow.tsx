"use client";

import { Article } from "@/types/article";
import PostSlider from "./PostSlider";

interface RelatedArticlesRowProps {
    articles: Partial<Article>[];
}

export default function RelatedArticlesRow({ articles }: RelatedArticlesRowProps) {
    if (!articles.length) return null;

    const titleContent = (
        <h3 className="text-lg font-black text-foreground uppercase tracking-widest opacity-80">
            Bài viết liên quan
        </h3>
    );

    return (
        <PostSlider
            articles={articles}
            titleContent={titleContent}
        />
    );
}
