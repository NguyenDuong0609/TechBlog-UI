import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/post/PostCard";
import Sidebar from "@/components/layout/Sidebar";
import Pagination from "@/components/common/Pagination";
import CategoryFilters from "@/components/common/CategoryFilters";
import { Article } from "@/types/article";
import { postService } from "@/services/post.service";
import { PageTransition } from "@/components/common/PageTransition";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;

    // Safety check for slug
    if (!slug) return null;

    let posts: Article[] = [];
    try {
        posts = await postService.getPostsByCategory(slug);
    } catch (error) {
        console.error(`[CategoryPage] Error loading posts for ${slug}:`, error);
        // Fallback to empty list instead of crashing
        posts = [];
    }

    // Format slug to title (e.g., "devops" -> "DevOps")
    const formatTitle = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const title = formatTitle(slug);

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Header />

            <main className="flex-1 border-y border-border">
                <PageTransition>
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8 py-8 sm:py-12 w-full">
                            {/* Category Header */}
                            <div className="bg-card p-6 sm:p-8 rounded-xl border border-border mb-8 sm:mb-10 shadow-sm relative overflow-hidden">
                                {/* Subtle decorative background element */}
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-50" />

                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className="w-1 h-7 sm:h-8 bg-primary rounded-full" />
                                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                                        {title}
                                    </h1>
                                </div>
                                <p className="text-neutral-500 dark:text-secondary-foreground leading-relaxed text-base sm:text-lg max-w-2xl relative z-10">
                                    Tổng hợp các bài viết, kiến thức, và chia sẻ mới nhất về {title} từ cộng đồng công nghệ.
                                </p>
                                <div className="mt-8 pt-6 sm:pt-8 border-t border-border/40 relative z-10">
                                    <CategoryFilters />
                                </div>
                            </div>

                            {/* Article List */}
                            <div className="space-y-6">
                                {posts && posts.length > 0 ? (
                                    <>
                                        {posts.map((article, index) => (
                                            article && article.slug ? (
                                                <ArticleCard key={article.id || `post-${index}`} article={article} hideThumbnail={true} />
                                            ) : null
                                        ))}

                                        <div className="pt-6 sm:pt-8 border-t border-border/40 mt-10">
                                            <Pagination currentPage={1} totalPages={1} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="bg-card p-10 sm:p-12 rounded-xl border border-border text-center shadow-sm">
                                        <p className="text-muted-foreground text-sm sm:text-base">Chưa có bài viết nào trong danh mục này.</p>
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
