"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TableOfContents from "@/components/toc/TableOfContents";
import SeriesSidebar from "@/components/layout/SeriesSidebar";
import StickySidebar from "@/components/layout/StickySidebar";
import RelatedArticlesRow from "@/components/post/RelatedArticlesRow";
import AuthorArticlesRow from "@/components/post/AuthorArticlesRow";
import ScrollProgress from "@/components/common/ProgressBar";
import StickyActionBar from "@/components/common/StickyActions";
import ArticleEnhancer from "@/components/common/ContinueReading";
import ArticleNavigation from "@/components/post/PostNavigation";
import CodeBlockEnhancer from "@/components/common/CodeEnhancer";
import { PageTransition } from "@/components/common/PageTransition";
import AuthorWidget from "@/components/post/AuthorWidget";
import TrendingWidget from "@/components/post/TrendingWidget";
import TopicTagsWidget from "@/components/post/TopicTagsWidget";
import Tag from "@/components/common/Tag";
import SidebarMetadata from "@/components/post/SidebarMetadata";
import SidebarActions from "@/components/post/SidebarActions";
import AuthorBox from "@/components/post/AuthorBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Clock,
    Eye,
    MessageCircle,
    Bookmark,
    Share2,
    ThumbsUp,
    MoreHorizontal
} from "lucide-react";
import { usePost, useCategoryPosts, useAuthorPosts } from "@/hooks/use-data";
import { Skeleton } from "@/components/ui/skeleton";
import { normalizeSlug } from "@/lib/slug";
import { motion } from "framer-motion";

interface PostPageClientProps {
    slug: string;
}

export default function PostPageClient({ slug }: PostPageClientProps) {
    const { data: article, isLoading } = usePost(slug);

    // Hooks must be at top level
    const categorySlug = article?.tags?.[0] ? normalizeSlug(article.tags[0]) : '';
    const categoryQuery = useCategoryPosts(categorySlug);
    const authorQuery = useAuthorPosts(article?.author?.username || '');

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background font-sans">
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-8" />
                    <Skeleton className="h-[400px] w-full" />
                </div>
            </div>
        )
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-background font-sans">
                <Header />
                <main className="container mx-auto px-4 py-24 text-center">
                    <div className="max-w-md mx-auto bg-card p-10 rounded-xl border border-border">
                        <div className="text-6xl mb-4">🔍</div>
                        <h1 className="text-2xl font-bold text-foreground mb-2">Không tìm thấy bài viết</h1>
                        <p className="text-muted-foreground mb-6">Xin lỗi, bài viết với đường dẫn <code className="bg-muted px-1.5 py-0.5 rounded text-primary">/post/{slug}</code> không tồn tại hoặc đã bị gỡ bỏ.</p>
                        <Link href="/">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                                Quay lại trang chủ
                            </Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Now article is guaranteed to be defined
    const post = article;

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/10 selection:text-primary">
            <Header />

            <main className="border-y border-border">
                <PageTransition>
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 py-8 sm:py-12 flex justify-center lg:justify-end">
                            <article className="w-full max-w-[760px]">
                                {/* Article Container */}
                                <div className="bg-card rounded-xl px-5 sm:px-10 py-8 sm:py-12 border border-border relative overflow-hidden shadow-sm">
                                    {/* Subtle decorative background element */}
                                    <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl opacity-30 select-none pointer-events-none" />

                                    {/* Meta Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                                        <div className="flex items-center gap-4">
                                            <Link href={`/user/${post.author.username}`}>
                                                <Avatar className="h-10 w-10 sm:h-11 sm:w-11 border border-border cursor-pointer transition-all hover:border-primary/40">
                                                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                                    <AvatarFallback className="bg-secondary text-primary font-bold">
                                                        {post.author.name.substring(0, 2)}
                                                    </AvatarFallback>
                                                </Avatar>
                                            </Link>
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={`/user/${post.author.username}`}
                                                        className="font-bold text-foreground hover:text-primary text-sm sm:text-base transition-colors"
                                                    >
                                                        {post.author.name}
                                                    </Link>
                                                    <span className="text-neutral-300 dark:text-neutral-700 text-xs text-[10px]">•</span>
                                                    <Button variant="ghost" size="sm" className="h-6 sm:h-7 text-primary text-[11px] px-2 sm:px-3 hover:bg-primary/5 font-bold rounded-lg transition-colors">
                                                        Theo dõi
                                                    </Button>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-[13px] text-neutral-500 dark:text-secondary-foreground mt-0.5 font-medium">
                                                    <span title={new Date(post.publishedAt).toLocaleString()}>
                                                        {new Date(post.publishedAt).toLocaleDateString("vi-VN", { day: 'numeric', month: 'short', year: 'numeric' })}
                                                    </span>
                                                    <span className="text-neutral-300 dark:text-neutral-700">•</span>
                                                    <span className="flex items-center gap-1 sm:gap-1.5 transition-colors">
                                                        <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                                        {post.readTime} phút đọc
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all">
                                                <Bookmark className="h-4.5 w-4.5" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all">
                                                <MoreHorizontal className="h-4.5 w-4.5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-foreground dark:text-neutral-50 mb-8 sm:mb-10 leading-[1.3] tracking-tight">
                                        {post.title}
                                    </h1>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-10 sm:mb-14">
                                        {post.tags.map((tagName) => (
                                            <Tag
                                                key={tagName}
                                                name={tagName}
                                                className="px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-[13px]"
                                            />
                                        ))}
                                    </div>

                                    {/* In-page TOC for testing */}
                                    <div className="mb-10 sm:mb-12">
                                        <TableOfContents items={post.tableOfContents} />
                                    </div>

                                    {/* Content Body */}
                                    <div
                                        id="article-content"
                                        className="prose prose-blue dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:font-medium hover:prose-a:underline prose-code:text-primary prose-code:bg-secondary/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-lg prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl prose-img:border prose-img:border-border shadow-none"
                                        style={{ lineHeight: '1.8' }}
                                        dangerouslySetInnerHTML={{ __html: post.content || "" }}
                                    />
                                </div>

                                {/* Interaction Bar */}
                                <div className="flex items-center justify-between bg-card rounded-xl px-5 sm:px-8 py-4 sm:py-5 mt-8 sm:mt-10 border border-border shadow-sm">
                                    <div className="flex gap-2 sm:gap-3">
                                        <Button variant="outline" className="gap-2 border-border text-neutral-500 dark:text-secondary-foreground hover:text-primary hover:border-primary/30 h-10 sm:h-11 rounded-lg px-4 sm:px-6 font-bold transition-all hover:bg-primary/5">
                                            <ThumbsUp className="h-4 w-4" />
                                            <span className="text-sm sm:text-base">{post.bookmarks}</span>
                                        </Button>
                                        <Button variant="outline" className="gap-2 border-border text-neutral-500 dark:text-secondary-foreground hover:text-primary hover:border-primary/30 h-10 sm:h-11 rounded-lg px-4 sm:px-6 font-bold transition-all hover:bg-primary/5">
                                            <MessageCircle className="h-4 w-4" />
                                            <span className="text-sm sm:text-base">{post.comments}</span>
                                        </Button>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary h-10 sm:h-11 rounded-xl px-4 sm:px-6 font-bold transition-all hover:bg-primary/5">
                                            <Share2 className="h-4 w-4" />
                                            <span className="hidden sm:inline text-xs uppercase tracking-wider">Chia sẻ</span>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <ArticleNavigation
                                        prev={{ title: "Previous Article", slug: "prev" }}
                                        next={{ title: "Next Article", slug: "next" }}
                                    />
                                </div>
                            </article>
                        </div>

                        {/* Sidebar Column */}
                        <div className="hidden lg:block lg:col-span-4">
                            <div className="sticky top-24 py-8 sm:py-12">
                                <motion.aside
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="space-y-6"
                                >
                                    {/* Series bài viết (highlight bài hiện tại) */}
                                    {post.series && (
                                        <SeriesSidebar
                                            series={post.series}
                                            currentArticleId={post.id}
                                        />
                                    )}

                                    {/* Mục lục bài viết (TOC) */}
                                    <TableOfContents items={post.tableOfContents} />

                                    {/* Bài viết nổi bật / đang thịnh hành */}
                                    <TrendingWidget />

                                    {/* Chủ đề phổ biến (tags) */}
                                    <TopicTagsWidget />
                                </motion.aside>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-16 border-t border-border/60 container mx-auto px-4 max-w-6xl space-y-20">
                        <AuthorBox author={post.author} />
                        <div className="space-y-16">
                            <RelatedArticlesRow articles={categoryQuery.data || []} />
                            <AuthorArticlesRow authorName={post.author.name} articles={authorQuery.data || []} />
                        </div>
                    </div>
                </PageTransition>
            </main>

            <Footer />
            <ScrollProgress />
            <CodeBlockEnhancer />
            <StickyActionBar likes={post.bookmarks} comments={post.comments} />
            <ArticleEnhancer slug={post.slug} />
        </div>
    );
}
