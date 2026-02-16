import { Article } from "@/types/article";

export const mockArticles: Article[] = [
    {
        id: "1",
        title: "System Architecture of a Sports Betting Platform Comparable to 1xBet",
        slug: "system-architecture-of-a-sports-betting-platform",
        excerpt: "Trong bài viết này, chúng ta sẽ tìm hiểu về kiến trúc hệ thống của một nền tảng cá cược thể thao quy mô lớn, bao gồm các thành phần chính như load balancer, microservices, message queue và caching...",
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
        author: {
            name: "Nguyen Van A",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenVanA",
            username: "nguyenvana"
        },
        tags: ["System Design", "Architecture", "Microservices"],
        publishedAt: "2026-02-02T10:00:00Z",
        readTime: 15,
        views: 1250,
        comments: 23,
        bookmarks: 89
    },
    {
        id: "2",
        title: "Hiểu đúng về logging trong Kubernetes cho người mới",
        slug: "hieu-dung-ve-logging-trong-kubernetes",
        excerpt: "Logging là một phần quan trọng trong việc vận hành hệ thống Kubernetes. Bài viết này sẽ giúp bạn hiểu rõ về các khái niệm cơ bản và cách triển khai logging hiệu quả...",
        thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
        author: {
            name: "Tran Thi B",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranThiB",
            username: "tranthib"
        },
        tags: ["Kubernetes", "DevOps", "Logging"],
        publishedAt: "2026-02-02T08:30:00Z",
        readTime: 10,
        views: 856,
        comments: 15,
        bookmarks: 42
    },
    {
        id: "3",
        title: "Backend Truyền thống vs. Backend có AI: Cuộc chiến của tư duy hệ thống",
        slug: "backend-truyen-thong-vs-backend-co-ai",
        excerpt: "AI đang thay đổi cách chúng ta xây dựng và vận hành hệ thống backend. Hãy cùng tìm hiểu những điểm khác biệt cơ bản giữa hai cách tiếp cận này...",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        author: {
            name: "Le Van C",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeVanC",
            username: "levanc"
        },
        tags: ["AI", "Backend", "System Design"],
        publishedAt: "2026-02-01T14:00:00Z",
        readTime: 12,
        views: 2340,
        comments: 45,
        bookmarks: 156
    },
    {
        id: "4",
        title: "Tìm hiểu về ConfigMap và Secret trong K8s",
        slug: "tim-hieu-ve-configmap-va-secret-trong-k8s",
        excerpt: "ConfigMap và Secret là hai resources quan trọng trong Kubernetes để quản lý cấu hình và thông tin nhạy cảm. Bài viết này sẽ hướng dẫn bạn cách sử dụng chúng hiệu quả...",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        author: {
            name: "Pham Thi D",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PhamThiD",
            username: "phamthid"
        },
        tags: ["Kubernetes", "ConfigMap", "Secret"],
        publishedAt: "2026-02-01T09:00:00Z",
        readTime: 8,
        views: 567,
        comments: 12,
        bookmarks: 34
    },
    {
        id: "5",
        title: "Cross-Site Scripting (XSS) - Hiểu và phòng chống",
        slug: "cross-site-scripting-xss",
        excerpt: "XSS là một trong những lỗ hổng bảo mật phổ biến nhất trên web. Bài viết này sẽ giúp bạn hiểu rõ về các loại XSS và cách phòng chống chúng...",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
        author: {
            name: "Hoang Van E",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HoangVanE",
            username: "hoangvane"
        },
        tags: ["Security", "XSS", "Web Security"],
        publishedAt: "2026-01-31T16:00:00Z",
        readTime: 11,
        views: 1890,
        comments: 28,
        bookmarks: 95
    },
    {
        id: "6",
        title: "7 công cụ thực dụng giúp năng suất Dev lên hương năm 2026",
        slug: "7-cong-cu-thuc-dung-giup-nang-suat-dev",
        excerpt: "Khám phá những công cụ hữu ích nhất giúp tăng năng suất làm việc cho developer trong năm 2026. Từ IDE plugins đến AI assistants...",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
        author: {
            name: "Nguyen Thi F",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenThiF",
            username: "nguyenthif"
        },
        tags: ["Productivity", "Tools", "Developer"],
        publishedAt: "2026-01-31T10:00:00Z",
        readTime: 7,
        views: 3450,
        comments: 67,
        bookmarks: 234
    },
    {
        id: "7",
        title: "Android WebSocket: Xây dựng ứng dụng Chat Real-time với Spring Boot",
        slug: "android-websocket-xay-dung-ung-dung-chat",
        excerpt: "Học cách xây dựng một ứng dụng chat real-time sử dụng Android và Spring Boot WebSocket. Từ setup project đến deploy production...",
        thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop",
        author: {
            name: "Tran Van G",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranVanG",
            username: "tranvang"
        },
        tags: ["Android", "WebSocket", "Spring Boot"],
        publishedAt: "2026-01-30T14:00:00Z",
        readTime: 20,
        views: 789,
        comments: 19,
        bookmarks: 56
    },
    {
        id: "8",
        title: "MongoDB Indexing Best Practices trong môi trường SaaS",
        slug: "mongodb-indexing-best-practices-saas",
        excerpt: "Tối ưu hóa hiệu suất MongoDB trong môi trường SaaS với các chiến lược indexing phù hợp. Compound indexes, partial indexes và hơn thế nữa...",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        author: {
            name: "Le Thi H",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeThiH",
            username: "lethih"
        },
        tags: ["MongoDB", "Database", "SaaS"],
        publishedAt: "2026-01-30T08:00:00Z",
        readTime: 14,
        views: 1234,
        comments: 21,
        bookmarks: 78
    },
    {
        id: "9",
        title: "PaperQA - Công cụ đánh bại ảo giác trong nghiên cứu khoa học",
        slug: "paperqa-cong-cu-danh-bai-ao-giac",
        excerpt: "PaperQA là một công cụ AI giúp các nhà nghiên cứu tìm kiếm và phân tích tài liệu khoa học một cách chính xác hơn, giảm thiểu hallucination...",
        thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
        author: {
            name: "Pham Van I",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PhamVanI",
            username: "phamvani"
        },
        tags: ["AI", "Research", "Tools"],
        publishedAt: "2026-01-29T11:00:00Z",
        readTime: 9,
        views: 2100,
        comments: 35,
        bookmarks: 120
    },
    {
        id: "10",
        title: "Choosing an LMS: The Ultimate 2026 Strategic Guide",
        slug: "choosing-an-lms-ultimate-2026-guide",
        excerpt: "A comprehensive guide to selecting the right Learning Management System for your organization in 2026. From features to pricing to integration capabilities...",
        thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
        author: {
            name: "Hoang Thi K",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HoangThiK",
            username: "hoangthik"
        },
        tags: ["LMS", "EdTech", "Guide"],
        publishedAt: "2026-01-28T15:00:00Z",
        readTime: 18,
        views: 945,
        comments: 14,
        bookmarks: 67
    }
];

export const trendingTags = [
    "JavaScript", "React", "Next.js", "TypeScript", "Node.js",
    "Python", "DevOps", "Kubernetes", "Docker", "AI",
    "Machine Learning", "AWS", "Database", "Security"
];

export const topAuthors = [
    { name: "Nguyen Van A", username: "nguyenvana", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenVanA", posts: 156 },
    { name: "Tran Thi B", username: "tranthib", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TranThiB", posts: 123 },
    { name: "Le Van C", username: "levanc", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LeVanC", posts: 98 },
    { name: "Pham Thi D", username: "phamthid", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PhamThiD", posts: 87 },
];
