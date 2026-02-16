"use client";

import Link from "next/link";
import { Hash, Tag } from "lucide-react";
import { normalizeSlug } from "@/lib/slug";

const TOPICS = [
    "JavaScript", "React", "Next.js", "TypeScript",
    "Web Development", "Backend", "UI/UX", "Database"
];

export default function TopicTagsWidget() {
    return (
        <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-70 mb-6">
                <Tag className="h-4 w-4 text-primary" />
                Chủ đề phổ biến
            </h3>

            <div className="flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                    <Link
                        key={topic}
                        href={`/tag/${normalizeSlug(topic)}`}
                        className="flex items-center gap-1.5 bg-secondary/50 dark:bg-secondary/30 hover:bg-primary/10 text-neutral-500 dark:text-secondary-foreground hover:text-primary px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border border-transparent hover:border-primary/20"
                    >
                        <Hash className="h-3 w-3 opacity-40" />
                        {topic}
                    </Link>
                ))}
            </div>
        </div>
    );
}
