"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus, MessageSquare, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AuthorBoxProps {
    author: {
        name: string;
        username: string;
        avatar: string;
        bio?: string;
    };
}

export default function AuthorBox({ author }: AuthorBoxProps) {
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <div className="bg-card rounded-xl border border-border p-6 sm:p-10 relative overflow-hidden group shadow-sm transition-all duration-300 hover:border-primary/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/[0.08] transition-all duration-700" />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start relative z-10">
                <Link href={`/user/${author.username}`}>
                    <div className="relative">
                        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-2 border-border shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/20">
                            <AvatarImage src={author.avatar} alt={author.name} />
                            <AvatarFallback className="bg-primary/5 text-primary text-2xl sm:text-3xl font-black">
                                {author.name.substring(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 border-4 border-card h-6 w-6 sm:h-7 sm:w-7 rounded-full" />
                    </div>
                </Link>

                <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-5">
                        <div className="space-y-1">
                            <Link href={`/user/${author.username}`}>
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors tracking-tight">
                                    {author.name}
                                </h3>
                            </Link>
                            <p className="text-neutral-500 font-bold text-xs sm:text-sm tracking-tight">@{author.username}</p>
                        </div>
                        <div className="flex gap-2 justify-center">
                            <Button
                                variant={isFollowing ? "outline" : "default"}
                                className={cn(
                                    "px-6 sm:px-8 rounded-lg font-bold transition-all duration-300 h-9 sm:h-10 text-sm",
                                    !isFollowing && "bg-primary hover:bg-primary/90 hover:shadow-md px-8 sm:px-10"
                                )}
                                onClick={() => setIsFollowing(!isFollowing)}
                            >
                                {isFollowing ? "Đã theo dõi" : (
                                    <>
                                        <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                                        Theo dõi
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>

                    <p className="text-neutral-500 dark:text-secondary-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl font-medium text-[14px] sm:text-[15px]">
                        {author.bio || "Tác giả chưa cập nhật giới thiệu bản thân. Hãy theo dõi để nhận thông báo về những bài viết mới nhất!"}
                    </p>

                    <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center sm:justify-start">
                        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-foreground font-bold bg-secondary/50 dark:bg-secondary/30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-border/50">
                            <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            <span>124 Bài viết</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-foreground font-bold bg-secondary/50 dark:bg-secondary/30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-border/50">
                            <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            <span>89 Thảo luận</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
