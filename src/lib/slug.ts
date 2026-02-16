export function normalizeSlug(slug: string): string {
    if (!slug) return '';

    return slug
        .toString()
        .toLowerCase()
        .trim()
        .normalize('NFD') // Normalize to decomposed form for handling accents
        .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
        .replace(/[đĐ]/g, 'd') // Specifically handle Vietnamese 'đ'
        .replace(/[^a-z0-9 -]/g, '') // Remove non-alphanumeric except space and dash
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/-+/g, '-') // Replace multiple dashes with single dash
        .replace(/^-+/, '') // Trim dashes from start
        .replace(/-+$/, ''); // Trim dashes from end
}
