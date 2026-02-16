"use client";

import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Award, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const filterTabs = [
    { id: "newest", label: "Mới nhất", icon: Clock },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "editors", label: "Editors' Choice", icon: Award },
    { id: "hot", label: "Nổi bật", icon: Flame },
];

export default function CategoryFilters() {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {filterTabs.map((tab) => {
                const isActive = tab.id === "newest"; // Mock active state
                return (
                    <Button
                        key={tab.id}
                        variant={isActive ? "default" : "secondary"}
                        className={cn(
                            "h-9 px-5 rounded-lg text-sm font-bold transition-all gap-2 hover:-translate-y-1",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                : "bg-secondary/50 dark:bg-secondary/30 text-neutral-500 dark:text-secondary-foreground hover:bg-secondary dark:hover:bg-secondary/50 hover:text-primary border-transparent"
                        )}
                    >
                        <tab.icon className="h-4 w-4" />
                        {tab.label}
                    </Button>
                );
            })}
        </div>
    );
}
