"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { PRESETS } from "@/lib/motion-presets";

interface MotionCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function MotionCard({ children, className, ...props }: MotionCardProps) {
    return (
        <motion.div
            className={cn("bg-card text-card-foreground rounded-xl border bg-white dark:bg-gray-800 shadow-sm transition-colors", className)}
            variants={PRESETS.hoverCard}
            initial="rest"
            whileHover="hover"
            {...props}
        >
            {children}
        </motion.div>
    );
}
