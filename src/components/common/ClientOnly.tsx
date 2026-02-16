"use client";

import { useEffect, useState, ReactNode } from "react";

interface ClientOnlyProps {
    children: ReactNode;
    fallback?: ReactNode;
    className?: string; // Optional className if wrapping in a div is needed, but we usually return fragment
}

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}
