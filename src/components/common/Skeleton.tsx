import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleCardSkeleton() {
    return (
        <div className="flex flex-col gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Header: Avatar + Name + Date */}
            <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                </div>
            </div>

            {/* Title */}
            <Skeleton className="h-6 w-3/4 my-1" />

            {/* Excerpt */}
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>

            {/* Footer: Tags + Stats */}
            <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded" />
                    <Skeleton className="h-6 w-16 rounded" />
                </div>
                <div className="flex gap-3">
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-8" />
                </div>
            </div>
        </div>
    );
}
