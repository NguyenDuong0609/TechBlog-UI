"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Share2, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyActionBarProps {
    likes?: number;
    comments?: number;
}

export default function StickyActionBar({ likes = 0, comments = 0 }: StickyActionBarProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show when scrolled down a bit (e.g., passed the header/intro)
            // or maybe always visible?
            // "Sticky near bottom of viewport" implies it floats.
            // Let's fade it in after scrolling 300px.
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 pointer-events-none",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div className="bg-card/90 backdrop-blur-md border border-border shadow-2xl rounded-full px-6 py-2.5 flex items-center gap-4 pointer-events-auto ring-1 ring-border/50">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 rounded-full transition-all">
                    <ThumbsUp className="h-5 w-5" />
                    <span className="font-bold">{likes}</span>
                </Button>

                <div className="w-px h-6 bg-border/50" />

                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/5 px-2 rounded-full transition-all">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-bold">{comments}</span>
                </Button>

                <div className="w-px h-6 bg-border/50" />

                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full h-9 w-9 transition-all">
                    <Bookmark className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full h-9 w-9 transition-all">
                    <Share2 className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}
