"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StickySidebarProps {
    children: ReactNode;
    className?: string;
}

export default function StickySidebar({ children, className }: StickySidebarProps) {
    return (
        <aside
            className={cn(
                "sticky top-24 self-start space-y-6 pb-10",
                className
            )}
        >
            {children}
        </aside>
    );
}
