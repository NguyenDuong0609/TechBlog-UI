import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import Database from 'better-sqlite3';
// Inlined normalizeSlug to avoid import issues during seeding
function normalizeSlug(slug: string): string {
    if (!slug) return '';
    return slug
        .toString()
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/-+$/, '')
        .replace(/^-+/, '');
}

const adapter = new PrismaBetterSqlite3({ url: './prisma/dev.db' });
const prisma = new PrismaClient({ adapter });

const AUTHORS = [
    {
        name: 'Tran Duc Thang',
        username: 'thangtd90',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thang',
        bio: 'Senior DevOps Engineer. Passionate about Kubernetes, Docker and Cloud Native technologies.',
    },
    {
        name: 'Alice Developer',
        username: 'alice_dev',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        bio: 'Fullstack Developer. Love React, Next.js and TypeScript.',
    },
];

const CATEGORIES = [
    { name: 'DevOps', slug: 'devops' },
    { name: 'Backend', slug: 'backend' },
    { name: 'Kubernetes', slug: 'kubernetes' },
    { name: 'Frontend', slug: 'frontend' },
    { name: 'Cloud', slug: 'cloud' },
];

const SERIES = [
    {
        title: 'K8s Basic',
        slug: 'k8s-basic',
        description: 'Học Kubernetes từ cơ bản đến nâng cao qua các ví dụ thực tế.',
        authorIndex: 0,
    }
];

const POSTS = [
    {
        title: 'K8s Basic: Giới thiệu về Kubernetes',
        slug: 'k8s-basic-intro',
        excerpt: 'Kubernetes là gì? Tại sao chúng ta lại cần nó? Cùng tìm hiểu trong bài viết này.',
        content: `
# K8s Basic: Giới thiệu về Kubernetes

Kubernetes (K8s) là một nền tảng mã nguồn mở, có khả năng mở rộng để quản lý các ứng dụng được đóng gói (containerized applications).

## Lịch sử ra đời
Kubernetes được Google giới thiệu vào năm 2014, dựa trên kinh nghiệm vận hành hệ thống Borg của họ.

## Các thành phần chính
- **Control Plane**: Quản lý toàn bộ cluster.
- **Nodes**: Nơi chạy các ứng dụng.
- **Pods**: Đơn vị nhỏ nhất trong Kubernetes.
        `,
        readTime: 5,
        views: 3200,
        authorIndex: 0,
        categoryIndex: 2,
        seriesIndex: 0,
    },
    {
        title: 'K8s Basic: Kubernetes Services',
        slug: 'k8s-basic-kubernetes-services-7ymJXKZa4kq',
        excerpt: 'Tìm hiểu về Kubernetes Service, các loại Service và cách thức hoạt động của chúng trong hệ Cluster.',
        content: `
# K8s Basic: Kubernetes Services

Trong Kubernetes, Service là một phương thức trừu tượng để hiển thị một ứng dụng chạy trên một tập hợp các Pods dưới dạng tài nguyên mạng.

## Tại sao cần Kubernetes Service?

Pods trong Kubernetes có vòng đời tạm thời. Khi một Pod chết, nó sẽ được thay thế bởi một Pod mới với IP khác. Điều này gây khó khăn cho việc kết nối giữa các thành phần trong hệ thống. Service giải quyết vấn đề này bằng cách cung cấp một IP tĩnh và tên DNS duy nhất cho tập hợp các Pods.

## Các loại Service chính

### 1. ClusterIP (Default)
Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster.

### 2. NodePort
Exposes the Service on each Node's IP at a static port (the NodePort). A ClusterIP Service, to which the NodePort Service routes, is automatically created. You'll be able to contact the NodePort Service, from outside the cluster, by requesting <NodeIP>:<NodePort>.

### 3. LoadBalancer
Exposes the Service externally using a cloud provider's load balancer. NodePort and ClusterIP Services, to which the external load balancer routes, are automatically created.

### 4. ExternalName
Maps the Service to the contents of the externalName field (e.g. foo.bar.example.com), by returning a CNAME record with its value. No proxying of any kind is established.

## Service Selector

Service sử dụng label selectors để xác định tập hợp Pods mà nó sẽ điều hướng traffic tới.

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app.kubernetes.io/name: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
\`\`\`

## Kết luận

Kubernetes Service là thành phần thiết yếu để xây dựng hệ thống microservices ổn định và có khả năng mở rộng cao trên K8s.
        `,
        readTime: 12,
        views: 4500,
        authorIndex: 0,
        categoryIndex: 2,
        seriesIndex: 0,
    },
    {
        title: 'K8s Basic: Kubernetes Deployments',
        slug: 'k8s-basic-deployments',
        excerpt: 'Cách quản lý ứng dụng một cách khai báo (declarative) với Deployment trong K8s.',
        content: `
# K8s Basic: Kubernetes Deployments

Deployment cung cấp khả năng cập nhật khai báo cho Pods và ReplicaSets.

## Tính năng chính
- **Cập nhật không downtime**: Sử dụng Rolling Updates.
- **Rollback**: Quay lại phiên bản cũ nếu có lỗi.
- **Scaling**: Thay đổi số lượng Pods một cách dễ dàng.
        `,
        readTime: 8,
        views: 2800,
        authorIndex: 0,
        categoryIndex: 2,
        seriesIndex: 0,
    },
    {
        title: 'Optimizing Next.js Performance',
        slug: 'optimizing-nextjs-performance',
        excerpt: 'Best practices for improving your Next.js application speed and Core Web Vitals.',
        content: `
# Optimizing Next.js Performance

Performance is key for user experience and SEO.

## Image Optimization

Use the \`next/image\` component to automatically optimize images.

## Dynamic Imports

Use \`next/dynamic\` to lazy load components.
    `,
        readTime: 6,
        views: 890,
        authorIndex: 0,
        categoryIndex: 3,
    },
    {
        title: 'PostgreSQL vs MySQL: Which one to choose?',
        slug: 'postgresql-vs-mysql',
        excerpt: 'Comparing the two most popular open-source relational databases.',
        content: `
# PostgreSQL vs MySQL

Both are great, but they have different strengths.

## PostgreSQL

Known for advanced features, reliability, and standards compliance.

## MySQL

Known for speed and simplicity.
    `,
        readTime: 10,
        views: 2100,
        authorIndex: 1,
        categoryIndex: 1,
    },
];

async function main() {
    console.log('Start seeding ...');

    // Authors
    const authors = [];
    for (const a of AUTHORS) {
        const author = await prisma.author.upsert({
            where: { username: a.username },
            update: {},
            create: a,
        });
        authors.push(author);
    }

    // Categories
    const categories = [];
    for (const c of CATEGORIES) {
        const normalizedCategorySlug = normalizeSlug(c.slug || c.name);
        const category = await prisma.category.upsert({
            where: { slug: normalizedCategorySlug },
            update: {
                name: c.name,
            },
            create: {
                name: c.name,
                slug: normalizedCategorySlug
            },
        });
        categories.push(category);
    }

    // Series
    const series = [];
    for (const s of SERIES) {
        const author = authors[s.authorIndex % authors.length];
        const normalizedSeriesSlug = normalizeSlug(s.slug || s.title);
        const res = await prisma.series.upsert({
            where: { slug: normalizedSeriesSlug },
            update: {
                title: s.title,
                description: s.description,
                authorId: author.id,
            },
            create: {
                title: s.title,
                slug: normalizedSeriesSlug,
                description: s.description,
                authorId: author.id,
            },
        });
        series.push(res);
    }

    // Posts
    for (const p of POSTS) {
        try {
            const { authorIndex, categoryIndex, seriesIndex, ...postData } = p as any;
            const author = authors[authorIndex % authors.length];
            const category = categories[categoryIndex % categories.length];
            const currentSeries = seriesIndex !== undefined ? series[seriesIndex % series.length] : null;

            if (!author || !category) {
                console.error(`Missing author or category for post: ${postData.title}`);
                continue;
            }

            const normalizedPostSlug = normalizeSlug(postData.slug || postData.title);
            const fullContent = postData.content.trim() + '\n\n' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(20);

            console.log(`Seeding post: ${postData.title} (Slug: ${normalizedPostSlug})`);

            await prisma.post.upsert({
                where: { slug: normalizedPostSlug },
                update: {
                    title: postData.title,
                    excerpt: postData.excerpt,
                    content: fullContent,
                    readTime: postData.readTime,
                    views: postData.views,
                    authorId: author.id,
                    categoryId: category.id,
                    seriesId: currentSeries?.id || null,
                    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60',
                },
                create: {
                    title: postData.title,
                    slug: normalizedPostSlug,
                    excerpt: postData.excerpt,
                    content: fullContent,
                    readTime: postData.readTime,
                    views: postData.views,
                    authorId: author.id,
                    categoryId: category.id,
                    seriesId: currentSeries?.id || null,
                    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60',
                },
            });
        } catch (postError) {
            console.error(`Failed to seed post "${p.title}":`, postError);
        }
    }

    console.log('Seeding finished.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
