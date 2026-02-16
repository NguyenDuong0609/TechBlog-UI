"use client";

import Link from "next/link";
import {
    Facebook,
    Twitter,
    Github,
    Rss,
    Heart,
    Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { PRESETS } from "@/lib/motion-presets";

const footerLinks = {
    about: [
        { id: "footer-about", label: "Giới thiệu", href: "/about" },
        { id: "footer-contact", label: "Liên hệ", href: "/contact" },
        { id: "footer-careers", label: "Tuyển dụng", href: "/careers" },
        { id: "footer-faq", label: "FAQ", href: "/faq" },
    ],
    community: [
        { id: "footer-newest", label: "Bài viết", href: "/newest" },
        { id: "footer-questions", label: "Hỏi đáp", href: "/questions" },
        { id: "footer-discussion", label: "Thảo luận", href: "/discussion" },
        { id: "footer-series", label: "Series", href: "/series" },
    ],
    resources: [
        { id: "footer-writing", label: "Hướng dẫn viết bài", href: "/writing-guide" },
        { id: "footer-markdown", label: "Markdown Guide", href: "/markdown" },
        { id: "footer-api", label: "API Docs", href: "/api-docs" },
        { id: "footer-rss", label: "RSS Feed", href: "/rss" },
    ],
    legal: [
        { id: "footer-terms", label: "Điều khoản", href: "/terms" },
        { id: "footer-privacy", label: "Chính sách bảo mật", href: "/privacy" },
        { id: "footer-conduct", label: "Quy tắc ứng xử", href: "/code-of-conduct" },
    ],
};

const socialLinks = [
    { id: "social-facebook", icon: Facebook, href: "https://facebook.com/nd", label: "Facebook" },
    { id: "social-twitter", icon: Twitter, href: "https://twitter.com/nd", label: "Twitter" },
    { id: "social-github", icon: Github, href: "https://github.com/nd", label: "GitHub" },
    { id: "social-rss", icon: Rss, href: "/rss", label: "RSS Feed" },
    { id: "social-mail", icon: Mail, href: "mailto:contact@nd.asia", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-200 py-12 sm:py-16 border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="flex px-3 h-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl uppercase tracking-tighter shadow-sm">
                                ND
                            </div>
                            <span className="text-2xl font-bold tracking-tight">ND</span>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-sm">
                            Nền tảng chia sẻ kiến thức công nghệ hàng đầu Việt Nam. Nơi các developer cùng nhau học hỏi và phát triển mỗi ngày.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.id}
                                    href={social.href}
                                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary text-white transition-all border border-white/5 hover:border-primary shadow-sm"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Về ND</h3>
                        <ul className="space-y-3">
                            {footerLinks.about.map((link) => (
                                <li key={link.id}>
                                    <motion.div variants={PRESETS.listItemHover} whileHover="hover">
                                        <Link href={link.href} className="text-[13px] text-neutral-400 hover:text-white transition-colors py-1 inline-block">
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Cộng đồng</h3>
                        <ul className="space-y-3">
                            {footerLinks.community.map((link) => (
                                <li key={link.id}>
                                    <motion.div variants={PRESETS.listItemHover} whileHover="hover">
                                        <Link href={link.href} className="text-[13px] text-neutral-400 hover:text-white transition-colors py-1 inline-block">
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Tài nguyên</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.id}>
                                    <motion.div variants={PRESETS.listItemHover} whileHover="hover">
                                        <Link href={link.href} className="text-[13px] text-neutral-400 hover:text-white transition-colors py-1 inline-block">
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-[13px] text-neutral-500">
                            © 2026 ND. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            {footerLinks.legal.map((link) => (
                                <Link key={link.id} href={link.href} className="text-[12px] text-neutral-500 hover:text-white transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-neutral-500">
                        Phát triển với <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 mx-1" /> bởi ND Team
                    </div>
                </div>
            </div>
        </footer>
    );
}
