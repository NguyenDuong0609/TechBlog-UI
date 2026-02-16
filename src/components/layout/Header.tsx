"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Search,
    Menu,
    X,
    ChevronDown,
    Globe,
    Bell,
    Edit
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Logo from "@/components/common/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { ClientOnly } from "@/components/common/ClientOnly";

const navLinks = [
    { id: "nav-home", href: "/", label: "Trang Chủ" },
    { id: "nav-newest", href: "/newest", label: "Bài Viết" },
    { id: "nav-series", href: "/series", label: "Series" },
    { id: "nav-devops", href: "/category/devops", label: "DevOps" },
    { id: "nav-backend", href: "/category/backend", label: "Backend" },
    { id: "nav-kubernetes", href: "/category/kubernetes", label: "Kubernetes" },
];

const vibloServices = [
    { id: "service-viblo", href: "#", label: "Viblo" },
    { id: "service-code", href: "#", label: "Viblo Code" },
    { id: "service-ctf", href: "#", label: "Viblo CTF" },
    { id: "service-learning", href: "#", label: "Viblo Learning" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isDesktop = window.innerWidth >= 1024;

            setIsScrolled(currentScrollY > 20);

            if (isDesktop) {
                setIsVisible(true);
            } else {
                if (currentScrollY < 50) {
                    setIsVisible(true);
                } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -64 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
                "sticky top-0 z-[1000] w-full border-b transition-all duration-300 h-16 flex items-center",
                isScrolled
                    ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                    : "bg-background border-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo and Main Nav */}
                    <div className="flex items-center gap-6">
                        <Logo />
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className={cn(
                                            "px-4 py-2 text-sm font-medium transition-colors relative group",
                                            isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-6">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
                            <Input
                                type="search"
                                placeholder="Tìm kiếm bài viết..."
                                className="w-full pl-10 pr-4 h-10 bg-secondary/50 dark:bg-secondary/30 border-transparent focus:bg-background focus:border-primary/30 focus:ring-0 transition-all rounded-lg text-sm"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden text-muted-foreground hover:text-primary hover:bg-accent"
                            onClick={() => setSearchOpen(!searchOpen)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>

                        <ClientOnly fallback={
                            <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground hover:bg-transparent hover:text-muted-foreground focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none active:bg-transparent gap-1 px-4 h-9 cursor-default shadow-none border-none">
                                <span className="text-sm">Services</span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        }>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="hidden sm:flex text-muted-foreground hover:bg-transparent hover:text-muted-foreground focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none active:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-muted-foreground gap-1 px-4 h-9 shadow-none border-none"
                                    >
                                        <span className="text-sm">Services</span>
                                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48 bg-popover text-popover-foreground border-border">
                                    {vibloServices.map((service) => (
                                        <DropdownMenuItem key={service.id} asChild className="focus:bg-primary/10 focus:text-primary transition-colors">
                                            <Link href={service.href} className="cursor-pointer w-full">
                                                {service.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ClientOnly>

                        <ClientOnly fallback={
                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent">
                                <Globe className="h-5 w-5" />
                            </Button>
                        }>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-accent">
                                        <Globe className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-popover text-popover-foreground border-border">
                                    <DropdownMenuItem className="cursor-pointer">
                                        <span className="mr-2">🇻🇳</span> Tiếng Việt
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <span className="mr-2">🇬🇧</span> English
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ClientOnly>

                        <ThemeToggle />

                        <Button variant="ghost" size="icon" className="hidden sm:flex text-muted-foreground hover:text-primary hover:bg-accent">
                            <Bell className="h-5 w-5" />
                        </Button>

                        <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-lg px-5 h-10 font-bold transition-all shadow-sm active:scale-95">
                            <Edit className="h-4 w-4" />
                            <span>Viết bài</span>
                        </Button>

                        <div className="hidden sm:flex items-center gap-2">
                            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors font-medium">
                                Đăng nhập
                            </Button>
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-10 px-5 font-bold shadow-sm active:scale-95">
                                Đăng ký
                            </Button>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-muted-foreground hover:text-primary hover:bg-accent"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                <AnimatePresence>
                    {searchOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden py-3 border-t border-border overflow-hidden"
                        >
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Tìm kiếm bài viết, câu hỏi..."
                                    className="w-full pl-10 pr-4 h-10 bg-muted border-input focus:bg-background rounded-full"
                                    autoFocus
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden py-4 border-t border-border space-y-2 overflow-hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-border space-y-2">
                                <Button variant="outline" className="w-full justify-center border-border text-foreground hover:bg-accent">
                                    Đăng nhập
                                </Button>
                                <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Đăng ký
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
