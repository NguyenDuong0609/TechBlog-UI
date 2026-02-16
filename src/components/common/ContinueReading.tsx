"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ArticleEnhancerProps {
    slug: string;
}

export default function ArticleEnhancer({ slug }: ArticleEnhancerProps) {
    const [showResume, setShowResume] = useState(false);
    const [resumePos, setResumePos] = useState(0);

    // 1. Heading Anchors
    useEffect(() => {
        const article = document.querySelector('article');
        if (!article) return;

        const headings = article.querySelectorAll('h2, h3');
        headings.forEach((heading) => {
            if (!heading.id) return;

            // Check if link already exists
            if (heading.querySelector('.anchor-link')) return;

            const link = document.createElement('a');
            link.className = 'anchor-link ml-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer no-underline';
            link.innerHTML = '#';
            link.href = `#${heading.id}`;
            link.onclick = (e) => {
                e.preventDefault();
                history.pushState(null, '', `#${heading.id}`);
                const yOffset = -100; // Header height offset
                const element = document.getElementById(heading.id);
                if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
                navigator.clipboard.writeText(window.location.href);
            };

            // Make heading relative group to show anchor on hover
            heading.classList.add('group', 'relative', 'flex', 'items-center');
            heading.appendChild(link);
        });
    }, []);

    // 2. Continue Reading
    useEffect(() => {
        const key = `viblo-reading-progress-${slug}`;
        const saved = localStorage.getItem(key);

        if (saved) {
            const pos = parseInt(saved, 10);
            const docHeight = document.documentElement.scrollHeight;

            // Only show if progress > 200px and not at bottom
            if (pos > 500 && pos < docHeight - 1000) {
                setResumePos(pos);
                setShowResume(true);
            }
        }

        const handleScroll = () => {
            // Debounce save?
            if (Math.random() > 0.1) return; // Simple throttle
            localStorage.setItem(key, window.scrollY.toString());
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    const handleResume = () => {
        window.scrollTo({ top: resumePos, behavior: 'smooth' });
        setShowResume(false);
    };

    if (!showResume) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-4 max-w-sm">
                <div className="flex-1">
                    <p className="text-sm font-medium">Tiếp tục đọc?</p>
                    <p className="text-xs text-gray-400">Bạn đã đọc đến đoạn này trước đó.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 text-xs font-semibold"
                        onClick={handleResume}
                    >
                        Đến đó
                    </Button>
                    <button onClick={() => setShowResume(false)} className="text-gray-400 hover:text-white">
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
