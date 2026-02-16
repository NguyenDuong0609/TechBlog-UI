import { Article } from "@/types/article";

export const fullArticle: Article = {
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
    tags: ["System Design", "Architecture", "Microservices", "High Performance"],
    publishedAt: "2026-02-02T10:00:00Z",
    readTime: 15,
    views: 1250,
    comments: 23,
    bookmarks: 89,
    series: {
        id: "s1",
        title: "System Design for High Scale Applications",
        slug: "system-design-high-scale",
        articles: [
            { id: "0", title: "Introduction to System Design", slug: "introduction-system-design" },
            { id: "1", title: "System Architecture of a Sports Betting Platform", slug: "system-architecture-of-a-sports-betting-platform" },
            { id: "2", title: "Database Sharding Strategies", slug: "database-sharding-strategies" },
            { id: "3", title: "Caching Patterns in Distributed Systems", slug: "caching-patterns" },
            { id: "4", title: "Message Queues: Kafka vs RabbitMQ", slug: "message-queues-kafka-rabbitmq" },
        ]
    },
    content: `
    <p>Xây dựng một nền tảng cá cược thể thao quy mô lớn như 1xBet hay Bet365 là một thách thức kỹ thuật to lớn. Hệ thống phải xử lý hàng triệu giao dịch mỗi giây, cập nhật tỷ lệ cược theo thời gian thực (real-time odds), và đảm bảo tính toàn vẹn của dữ liệu tài chính. Trong bài viết này, chúng ta sẽ đi sâu vào kiến trúc high-level và các component quan trọng.</p>

    <h2 id="core-challenges">1. Core Challenges (Thách thức cốt lõi)</h2>
    <p>Khi thiết kế hệ thống này, chúng ta phải đối mặt với 3 bài toán chính:</p>
    <ul>
      <li><strong>High Concurrency:</strong> Hàng triệu người dùng đặt cược cùng lúc trong các sự kiện lớn (World Cup, Super Bowl).</li>
      <li><strong>Real-time Data Update:</strong> Tỷ lệ cược thay đổi liên tục từng giây, cần push xuống client với độ trễ thấp nhất.</li>
      <li><strong>Transactional Integrity:</strong> Không được phép sai sót trong tính toán tiền cược và số dư ví.</l>
    </ul>

    <h2 id="high-level-architecture">2. High-Level Architecture</h2>
    <p>Hệ thống được chia thành các microservices chính sau đây:</p>
    
    <h3 id="user-service">User Service</h3>
    <p>Quản lý thông tin người dùng, xác thực (Authentication/Authorization), KYC. Sử dụng Redis để cache session và PostgreSQL để lưu profile.</p>

    <h3 id="wallet-service">Wallet Service</h3>
    <p>Đây là trái tim của hệ thống. Xử lý nạp/rút tiền, khóa tiền khi đặt cược (hold fund) và cộng tiền khi thắng. Sử dụng mô hình <strong>Double-Entry Bookkeeping</strong> để đảm bảo chính xác tuyệt đối.</p>
    <pre><code class="language-typescript">
// Example transaction structure
interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW' | 'BET' | 'WIN';
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: Date;
}
    </code></pre>

    <h3 id="betting-engine">Betting Engine</h3>
    <p>Xử lý logic đặt cược: kiểm tra tỷ lệ, validate vé cược, tính toán tiền thắng. Service này cần throughput cực cao, thường được viết bằng Go hoặc Rust.</p>

    <h2 id="real-time-subsystem">3. Real-time Subsystem (Hệ thống thời gian thực)</h2>
    <p>Để cập nhật tỷ lệ cược (odds) xuống client, chúng ta không thể dùng REST API polling truyền thống. Thay vào đó, WebSocket là lựa chọn bắt buộc.</p>

    <h3 id="push-architecture">Push Architecture</h3>
    <p>Luồng dữ liệu đi như sau:</p>
    <ol>
      <li>Odds Provider gửi cập nhật mới vào Kafka topic \`odds-updates\`.</li>
      <li>Socket Service consume từ Kafka.</li>
      <li>Socket Service broadcast update tới hàng triệu client đang connect.</li>
    </ol>

    <h2 id="database-design">4. Database Strategy</h2>
    <p>Chúng ta sử dụng chiến lược Polyglot Persistence:</p>
    <ul>
      <li><strong>PostgreSQL:</strong> Cho dữ liệu quan trọng cần ACID (User, Wallet, Bet History).</li>
      <li><strong>MongoDB:</strong> Cho dữ liệu events, logs, audit trails.</li>
      <li><strong>Redis:</strong> Caching hot data (Active Odds, User Session).</li>
      <li><strong>ClickHouse:</strong> Analytics và Reports theo thời gian thực.</li>
    </ul>

    <h2 id="scaling-reliability">5. Scaling & Reliability</h2>
    <p>Để đảm bảo 99.99% uptime:</p>
    <h3 id="load-balancing">Load Balancing</h3>
    <p>Sử dụng Nginx hoặc Cloud Load Balancer để phân tải. Sticky session có thể cần thiết cho WebSocket connections.</p>

    <h3 id="circuit-breaker">Circuit Breaker</h3>
    <p>Áp dụng pattern Circuit Breaker ngăn chặn cascading failures khi một service bị down.</p>

    <h2 id="conclusion">Kết luận</h2>
    <p>Xây dựng hệ thống cá cược đòi hỏi kiến thức sâu rộng về distributed systems. Hy vọng bài viết này mang lại cái nhìn tổng quan hữu ích cho các bạn.</p>
  `,
    tableOfContents: [
        { id: "core-challenges", text: "1. Core Challenges (Thách thức cốt lõi)", level: 2 },
        { id: "high-level-architecture", text: "2. High-Level Architecture", level: 2 },
        { id: "user-service", text: "User Service", level: 3 },
        { id: "wallet-service", text: "Wallet Service", level: 3 },
        { id: "betting-engine", text: "Betting Engine", level: 3 },
        { id: "real-time-subsystem", text: "3. Real-time Subsystem (Hệ thống thời gian thực)", level: 2 },
        { id: "push-architecture", text: "Push Architecture", level: 3 },
        { id: "database-design", text: "4. Database Strategy", level: 2 },
        { id: "scaling-reliability", text: "5. Scaling & Reliability", level: 2 },
        { id: "load-balancing", text: "Load Balancing", level: 3 },
        { id: "circuit-breaker", text: "Circuit Breaker", level: 3 },
        { id: "conclusion", text: "Kết luận", level: 2 },
    ]
};

export const relatedArticles = [
    {
        id: "2",
        title: "Hiểu đúng về logging trong Kubernetes cho người mới",
        slug: "hieu-dung-ve-logging-trong-kubernetes",
        readTime: 10,
        publishedAt: "2026-02-02",
        thumbnail: "",
        author: { name: "Tran Thi B", avatar: "", username: "tranthib" },
        tags: [],
        excerpt: "",
        views: 0,
        comments: 0,
        bookmarks: 0
    },
    {
        id: "3",
        title: "Backend Truyền thống vs. Backend có AI",
        slug: "backend-truyen-thong-vs-backend-co-ai",
        readTime: 12,
        publishedAt: "2026-02-01",
        thumbnail: "",
        author: { name: "Le Van C", avatar: "", username: "levanc" },
        tags: [],
        excerpt: "",
        views: 0,
        comments: 0,
        bookmarks: 0
    },
    {
        id: "4",
        title: "Tìm hiểu về ConfigMap và Secret trong K8s",
        slug: "tim-hieu-ve-configmap-va-secret-trong-k8s",
        readTime: 8,
        publishedAt: "2026-02-01",
        thumbnail: "",
        author: { name: "Pham Thi D", avatar: "", username: "phamthid" },
        tags: [],
        excerpt: "",
        views: 0,
        comments: 0,
        bookmarks: 0
    }
];

export const authorArticles = [
    {
        id: "20",
        title: "Understanding Microservices Patterns",
        slug: "understanding-microservices-patterns",
        readTime: 7,
        publishedAt: "2026-01-20"
    },
    {
        id: "21",
        title: "Database Indexing 101",
        slug: "database-indexing-101",
        readTime: 5,
        publishedAt: "2026-01-15"
    },
    {
        id: "22",
        title: "Why Rust is the Future of Systems Programming",
        slug: "why-rust-is-future",
        readTime: 10,
        publishedAt: "2026-01-10"
    }
];
