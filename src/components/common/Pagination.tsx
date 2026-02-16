"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages && onPageChange) {
            onPageChange(page);
        }
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const showEllipsisStart = currentPage > 3;
        const showEllipsisEnd = currentPage < totalPages - 2;

        if (totalPages <= 7) {
            // Show all pages if total is 7 or less
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (showEllipsisStart) {
                pages.push("...");
            }

            // Calculate range around current page
            const start = showEllipsisStart ? Math.max(2, currentPage - 1) : 2;
            const end = showEllipsisEnd ? Math.min(totalPages - 1, currentPage + 1) : totalPages - 1;

            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) {
                    pages.push(i);
                }
            }

            if (showEllipsisEnd) {
                pages.push("...");
            }

            // Always show last page
            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <nav className="flex items-center justify-center gap-1 sm:gap-2 py-8" aria-label="Pagination">
            {/* Previous Button */}
            <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-border hover:bg-accent hover:border-primary/30 hover:text-primary disabled:opacity-50 disabled:hover:bg-transparent transition-all"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
                {pageNumbers.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="flex h-10 w-10 items-center justify-center text-muted-foreground/30"
                            >
                                <MoreHorizontal className="h-4 w-4" />
                            </span>
                        );
                    }

                    const pageNum = page as number;
                    const isActive = pageNum === currentPage;

                    return (
                        <Button
                            key={pageNum}
                            variant={isActive ? "default" : "secondary"}
                            size="icon"
                            className={cn(
                                "h-10 w-10 text-xs font-bold transition-all rounded-lg",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                    : "bg-secondary/50 dark:bg-secondary/30 text-neutral-500 dark:text-secondary-foreground hover:bg-secondary dark:hover:bg-secondary/50 hover:text-primary border-transparent"
                            )}
                            onClick={() => handlePageChange(pageNum)}
                            aria-label={`Page ${pageNum}`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {pageNum}
                        </Button>
                    );
                })}
            </div>

            {/* Next Button */}
            <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-border hover:bg-accent hover:border-primary/30 hover:text-primary disabled:opacity-50 disabled:hover:bg-transparent transition-all"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </nav>
    );
}
