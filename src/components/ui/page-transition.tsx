"use client";

import { motion } from "framer-motion";
import { PRESETS } from "@/lib/motion-presets";
import { usePathname } from "next/navigation";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            variants={PRESETS.pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
