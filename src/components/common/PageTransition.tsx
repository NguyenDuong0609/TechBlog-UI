"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { PRESETS } from "@/lib/motion-presets";

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            variants={PRESETS.pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
