"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 pointer-events-auto transition-all duration-300 animate-in fade-in zoom-in">
            <Button
                variant="default"
                size="icon"
                className="rounded-full bg-primary text-white shadow-lg hover:shadow-primary/20 hover:scale-110 active:scale-95 h-12 w-12 transition-all"
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <ArrowUp className="h-6 w-6" />
            </Button>
        </div>
    );
}
