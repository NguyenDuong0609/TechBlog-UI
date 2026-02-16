"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/lib/store/theme.store";

export function ThemeToggle() {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const { setTheme: setStoreTheme } = useThemeStore();
    const [mounted, setMounted] = React.useState(false);

    // Sync Zustand with next-themes on mount and change
    React.useEffect(() => {
        setMounted(true);
        if (theme) setStoreTheme(theme as any);
    }, [theme, setStoreTheme]);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full opacity-0"
                disabled
            />
        );
    }

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        setStoreTheme(nextTheme as any);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative h-9 w-9 overflow-hidden rounded-full hover:bg-accent transition-colors duration-200"
        >
            <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === "dark" ? (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, rotate: 90, opacity: 0 }}
                        animate={{ y: 0, rotate: 0, opacity: 1 }}
                        exit={{ y: -20, rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, rotate: 90, opacity: 0 }}
                        animate={{ y: 0, rotate: 0, opacity: 1 }}
                        exit={{ y: -20, rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex items-center justify-center"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500" />
                    </motion.div>
                )}
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
