"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { normalizeSlug } from "@/lib/slug";
import { PRESETS } from "@/lib/motion-presets";

interface TagProps {
    name: string;
    href?: string;
    className?: string;
    showHash?: boolean;
}

export default function Tag({
    name,
    href,
    className,
    showHash = true
}: TagProps) {
    const content = (
        <>
            {showHash && (
                <span className="text-neutral-400 group-hover:text-primary/60 transition-colors">
                    #
                </span>
            )}
            {name}
        </>
    );

    const baseStyles = cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 border border-transparent group active:scale-95",
        "bg-secondary/50 dark:bg-secondary/30 text-neutral-600 dark:text-neutral-200",
        "hover:bg-primary/10 hover:text-primary hover:border-primary/20",
        className
    );

    const MotionLink = motion.create(Link);

    if (href || name) {
        return (
            <MotionLink
                href={href || `/tag/${normalizeSlug(name)}`}
                className={baseStyles}
                variants={PRESETS.postTagHover}
                initial="initial"
                whileHover="hover"
            >
                {content}
            </MotionLink>
        );
    }

    return (
        <motion.span
            className={baseStyles}
            variants={PRESETS.postTagHover}
            initial="initial"
            whileHover="hover"
        >
            {content}
        </motion.span>
    );
}
