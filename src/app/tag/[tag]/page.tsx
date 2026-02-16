import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/post/PostCard";
import Sidebar from "@/components/layout/Sidebar";
import Pagination from "@/components/common/Pagination";
import { mockArticles, trendingTags } from "@/data/mock-articles";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Tag, ChevronLeft, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/common/PageTransition";

interface PageProps {
    params: Promise<{ tag: string }>;
}

function formatTagName(slug: string): string {
    return slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default async function TagPage({ params }: PageProps) {
    const { tag } = await params;
    const tagName = formatTagName(tag);

    // Filter articles by tag (case insensitive)
    const filteredArticles = mockArticles.filter(article =>
        article.tags.some(t =>
            t.toLowerCase().replace(/\s+/g, "-") === tag.toLowerCase()
        )
    );

    // If no exact match, show all articles as fallback
    const articles = filteredArticles.length > 0 ? filteredArticles : mockArticles;

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 border-y border-border">
                <PageTransition>
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 py-8 sm:py-12 w-full">
                            {/* Back link */}
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-primary mb-6 sm:mb-8 transition-colors text-[11px] font-bold uppercase tracking-widest"
                            >
                                <ChevronLeft className="h-3.5 w-3.5" />
                                Trang chủ
                            </Link>

                            {/* Tag Header */}
                            <div className="bg-card rounded-xl border border-border p-6 sm:p-8 relative overflow-hidden mb-8 sm:mb-10 shadow-sm">
                                {/* Subtle decorative background element */}
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-50" />

                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 relative z-10">
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-secondary dark:bg-secondary/50 border border-border">
                                            <Hash className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-[0.2em] bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                                                    Chủ đề
                                                </span>
                                            </div>
                                            <h1 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">{tagName}</h1>
                                        </div>
                                    </div>
                                    <div className="sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                                        <p className="text-xl sm:text-2xl font-bold text-foreground">{articles.length}</p>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Bài viết</p>
                                    </div>
                                </div>

                                <p className="mt-5 sm:mt-6 text-neutral-500 dark:text-secondary-foreground text-base sm:text-lg leading-relaxed max-w-2xl relative z-10">
                                    Khám phá các bài viết kỹ thuật, hướng dẫn và chia sẻ kinh nghiệm chuyên sâu về <strong>{tagName}</strong> từ cộng đồng chuyên gia.
                                </p>

                                {/* Related Tags */}
                                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-8 pt-6 sm:pt-8 border-t border-border/40 relative z-10">
                                    <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mr-1 sm:mr-2">Tags liên quan:</span>
                                    {trendingTags.slice(0, 5).map((relatedTag) => (
                                        <Link key={relatedTag} href={`/tag/${relatedTag.toLowerCase().replace(/\s+/g, "-")}`}>
                                            <Badge
                                                variant="secondary"
                                                className="bg-secondary/50 dark:bg-secondary/30 hover:bg-primary/10 text-neutral-600 dark:text-secondary-foreground hover:text-primary border-transparent cursor-pointer transition-all h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg text-[10px] sm:text-xs font-bold"
                                            >
                                                #{relatedTag}
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Articles List */}
                            <div className="space-y-6">
                                {articles.length > 0 ? (
                                    <>
                                        {articles.map((article) => (
                                            <PostCard key={article.id} article={article} />
                                        ))}
                                        <div className="pt-6 sm:pt-8 border-t border-border/40 mt-10">
                                            <Pagination currentPage={1} totalPages={1} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="bg-card rounded-xl border border-border p-10 sm:p-16 text-center shadow-sm">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Tag className="h-8 w-8 sm:h-10 sm:w-10 text-neutral-300" />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                                            Chưa có bài viết nào
                                        </h2>
                                        <p className="text-neutral-500 dark:text-secondary-foreground mb-8 max-w-md mx-auto text-sm sm:text-base line-height-relaxed">
                                            Chưa có bài viết nào về chủ đề &quot;{tagName}&quot;. Hãy là người đầu tiên chia sẻ kiến thức của bạn!
                                        </p>
                                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-11 sm:h-12 px-6 sm:px-8 font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                                            Viết bài ngay
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar Area */}
                        <div className="hidden lg:block lg:col-span-4">
                            <div className="sticky top-24 py-8 sm:py-12">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </PageTransition>
            </main>

            <Footer />
        </div>
    );
}
