import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center gap-2 group", className)}>
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground font-black text-xl shadow-lg transition-all duration-300 group-hover:shadow-primary/25 group-hover:scale-105">
                {/* Minimalist "ND" design */}
                <span className="relative z-10">ND</span>

                {/* Subtle tech patterns / gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white/10 blur-sm" />
            </div>

            {showText && (
                <span className="hidden sm:block text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    ND
                </span>
            )}
        </Link>
    );
}
