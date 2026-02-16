"use client";

import { useEffect } from "react";

export default function CodeBlockEnhancer() {
    useEffect(() => {
        const enhanceCodeBlocks = () => {
            const codeBlocks = document.querySelectorAll("pre code");

            codeBlocks.forEach((code) => {
                const pre = code.parentElement;
                if (!pre || pre.dataset.enhanced === "true") return;

                pre.style.position = "relative";
                pre.className = "group " + (pre.className || "");
                pre.dataset.enhanced = "true";

                // Extract language from class (e.g., language-js)
                const langClass = Array.from(code.classList).find(c => c.startsWith("language-"));
                const lang = langClass ? langClass.replace("language-", "").toUpperCase() : "";

                // Create Container for Controls
                const controls = document.createElement("div");
                controls.className = "absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10";

                // Language Label
                if (lang) {
                    const langLabel = document.createElement("span");
                    langLabel.className = "text-[10px] font-bold tracking-widest text-neutral-500 uppercase bg-secondary/80 px-2 py-0.5 rounded border border-border/50";
                    langLabel.innerText = lang;
                    controls.appendChild(langLabel);
                }

                // Copy Button
                const copyBtn = document.createElement("button");
                copyBtn.className = "p-1.5 rounded-lg bg-secondary/80 border border-border/50 text-neutral-500 hover:text-primary hover:border-primary/30 transition-all active:scale-90";
                copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

                copyBtn.onclick = async () => {
                    const text = code.textContent || "";
                    await navigator.clipboard.writeText(text);

                    const originalHTML = copyBtn.innerHTML;
                    copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>`;
                    copyBtn.classList.add("text-primary", "border-primary/30");

                    setTimeout(() => {
                        copyBtn.innerHTML = originalHTML;
                        copyBtn.classList.remove("text-primary", "border-primary/30");
                    }, 2000);
                };

                controls.appendChild(copyBtn);
                pre.appendChild(controls);
            });
        };

        // Initial enhancement
        enhanceCodeBlocks();

        // Re-run if content changes (for dynamic loading)
        const observer = new MutationObserver(enhanceCodeBlocks);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return null;
}
