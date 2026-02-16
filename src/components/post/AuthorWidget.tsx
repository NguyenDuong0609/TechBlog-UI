"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, PencilLine } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AuthorWidgetProps {
    author: {
        name: string;
        username: string;
        avatar: string;
        bio?: string;
    };
}

export default function AuthorWidget({ author }: AuthorWidgetProps) {
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <div className="bg-card rounded-xl border border-border p-8 mb-8 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:bg-primary/[0.06] transition-colors" />
            <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                    <Avatar className="h-16 w-16 border-2 border-primary/10 transition-transform duration-500 group-hover:scale-110">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback className="bg-primary/5 text-primary text-xl font-black">{author.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-card h-4 w-4 rounded-full" title="Online" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-black text-lg text-foreground truncate group-hover:text-primary transition-colors leading-tight">{author.name}</h3>
                    <p className="text-sm text-muted-foreground/60 truncate font-medium">@{author.username}</p>
                </div>
            </div>

            {author.bio && (
                <div className="relative mb-6">
                    <p className="text-sm text-muted-foreground/80 line-clamp-3 leading-relaxed font-medium italic pl-4 border-l-2 border-primary/20">
                        "{author.bio}"
                    </p>
                </div>
            )}

            <div className="grid grid-cols-3 gap-2 mb-8 relative z-10">
                <div className="text-center p-3 rounded-xl bg-secondary/50 dark:bg-secondary/30 border border-border/50 transition-all hover:bg-secondary">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1">
                        Followers
                    </div>
                    <div className="font-bold text-foreground text-sm">1.2K</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary/50 dark:bg-secondary/30 border border-border/50 transition-all hover:bg-secondary">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1">
                        Following
                    </div>
                    <div className="font-bold text-foreground text-sm">84</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-secondary/50 dark:bg-secondary/30 border border-border/50 transition-all hover:bg-secondary">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-1" >
                        Posts
                    </div>
                    <div className="font-bold text-foreground text-sm">42</div>
                </div>
            </div>

            <Button
                variant={isFollowing ? "outline" : "default"}
                className={cn(
                    "w-full gap-2 font-bold rounded-xl h-12 transition-all duration-300 relative z-10",
                    !isFollowing && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20 active:scale-95"
                )}
                onClick={() => setIsFollowing(!isFollowing)}
            >
                {isFollowing ? (
                    <>Đã theo dõi</>
                ) : (
                    <>
                        <UserPlus className="h-4 w-4 stroke-[3]" />
                        Theo dõi
                    </>
                )}
            </Button>
        </div>
    );
}
