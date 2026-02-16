import ArticleCardSkeleton from "@/components/common/Skeleton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F3F4F6]">
            <Header />
            <main className="flex-1 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6 h-32 animate-pulse" />
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <ArticleCardSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 h-96 bg-gray-200 rounded-xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
