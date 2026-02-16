"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/post/PostCard";
import Sidebar from "@/components/layout/Sidebar";
import Pagination from "@/components/common/Pagination";
import { usePosts } from "@/hooks/use-data";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Clock, Flame, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { PageTransition } from "@/components/common/PageTransition";

const filterTabs = [
    { id: "newest", label: "Mới nhất", icon: Clock },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "editors", label: "Editors' Choice", icon: Award },
    { id: "hot", label: "Nổi bật", icon: Flame },
];

export default function HomePageClient() {
    const { data: posts, isLoading, error } = usePosts();

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">Error loading posts: {error.message}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Header />

            <main className="flex-1 border-y border-border">
                <PageTransition>
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 py-8 sm:py-12 w-full">
                            {/* Header & Filters */}
                            <div className="mb-8 sm:mb-10 bg-card p-5 sm:p-8 rounded-xl border border-border shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-6 bg-primary rounded-full transition-all" />
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                                            Bài viết mới nhất
                                        </h2>
                                    </div>
                                    <div className="inline-flex">
                                        <span className="text-[11px] text-neutral-500 font-bold uppercase tracking-widest bg-secondary/30 px-3 py-1 rounded-lg border border-border/50">
                                            {posts ? `${posts.length} bài viết` : '0 bài viết'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                                    {filterTabs.map((tab, index) => (
                                        <Button
                                            key={tab.id}
                                            variant={index === 0 ? "default" : "secondary"}
                                            size="sm"
                                            className={cn(
                                                "h-9 sm:h-10 px-4 sm:px-5 rounded-lg text-[13px] sm:text-sm font-bold transition-all gap-2",
                                                index === 0
                                                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                                    : "bg-secondary/50 dark:bg-secondary/30 text-neutral-500 dark:text-secondary-foreground hover:bg-secondary dark:hover:bg-secondary/50 hover:text-primary border-transparent"
                                            )}
                                        >
                                            <tab.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                            {tab.label}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                {isLoading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <div key={i} className="bg-card p-6 rounded-xl h-48 animate-pulse border border-border">
                                            <Skeleton className="h-5 w-3/4 mb-5 rounded-md" />
                                            <Skeleton className="h-4 w-1/2 mb-4 rounded-md" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-full rounded-md" />
                                                <Skeleton className="h-4 w-full rounded-md" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    posts?.map((article) => (
                                        <ArticleCard key={article.id} article={article} hideThumbnail={true} />
                                    ))
                                )}

                                {/* Pagination */}
                                <div className="pt-6 sm:pt-8 border-t border-border/40 mt-10">
                                    <Pagination currentPage={1} totalPages={10} />
                                </div>
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
