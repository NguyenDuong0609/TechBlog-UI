import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { trendingTags, topAuthors } from "@/data/mock-articles";
import { normalizeSlug } from "@/lib/slug";
import { TrendingUp, Users, Mail } from "lucide-react";
import Tag from "@/components/common/Tag";

export default function Sidebar() {
    return (
        <aside className="space-y-6 group/sidebar">
            {/* Trending Topics */}
            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-4 bg-primary rounded-full transition-colors" />
                    <h3 className="text-[11px] font-bold tracking-tech text-foreground flex items-center gap-2">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Trending Topics
                    </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {trendingTags.map((tag) => (
                        <Tag key={tag} name={tag} />
                    ))}
                </div>
            </div>

            {/* Top Authors */}
            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-4 bg-primary rounded-full transition-colors" />
                    <h3 className="text-[11px] font-bold tracking-tech text-foreground flex items-center gap-2">
                        <Users className="h-3.5 w-3.5" />
                        Top Authors
                    </h3>
                </div>
                <ul className="space-y-1">
                    {topAuthors.map((author, index) => (
                        <li key={author.username}>
                            <Link
                                href={`/user/${author.username}`}
                                className="flex items-center gap-3 p-1.5 sm:p-2 rounded-xl hover:bg-secondary/50 transition-colors group/author smooth-lift"
                            >
                                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-lg bg-secondary/80 text-[10px] font-bold text-neutral-400 border border-border">
                                    {index + 1}
                                </span>
                                <Avatar className="h-8 w-8 sm:h-9 sm:w-9 border border-border transition-all group-hover/author:border-primary/40">
                                    <AvatarImage src={author.avatar} alt={author.name} />
                                    <AvatarFallback className="bg-primary text-white text-xs font-bold">
                                        {author.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[13px] sm:text-sm font-bold text-foreground truncate group-hover/author:text-primary transition-colors">
                                        {author.name}
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-neutral-500 font-medium">
                                        {author.posts} bài viết
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="text-[11px] font-bold tracking-tech text-primary">Newsletter</h3>
                    </div>
                    <p className="text-xs text-neutral-500 mb-5 font-medium leading-relaxed">
                        Nhận tin công nghệ mới nhất mỗi tuần trực tiếp vào inbox.
                    </p>
                    <div className="space-y-3">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full px-4 py-2.5 text-xs bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground font-medium"
                        />
                        <button className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg shadow-sm shadow-primary/20 transition-all active:scale-[0.97] hover:shadow-lg hover:shadow-primary/30">
                            Theo dõi
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
