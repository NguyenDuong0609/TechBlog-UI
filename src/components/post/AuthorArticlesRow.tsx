"use client";

import { ArrowRight } from "lucide-react";
import PostSlider from "./PostSlider";

interface SimpleArticle {
    id: string;
    title: string;
    slug: string;
    readTime: number;
    publishedAt: string;
}

interface AuthorArticlesRowProps {
    authorName: string;
    articles: SimpleArticle[];
}

export default function AuthorArticlesRow({ authorName, articles }: AuthorArticlesRowProps) {
    if (!articles.length) return null;

    const titleContent = (
        <h3 className="text-lg font-black text-foreground uppercase tracking-widest opacity-80">
            Bài viết cùng <span className="text-primary">{authorName}</span>
        </h3>
    );

    return (
        <PostSlider
            articles={articles}
            titleContent={titleContent}
            viewAllLink="#"
        />
    );
}
