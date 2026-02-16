
import { setTimeout } from 'timers/promises';

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
];

export class Fetcher {
  private async delay(ms: number) {
    await setTimeout(ms);
  }

  private getRandomUserAgent() {
    return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
  }

  async getHtml(url: string, retries = 3): Promise<string | null> {
    for (let i = 0; i < retries; i++) {
        try {
            // Random delay between 500ms and 1500ms to be polite
            await this.delay(500 + Math.random() * 1000);

            const response = await fetch(url, {
                headers: {
                    'User-Agent': this.getRandomUserAgent(),
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.5',
                },
                next: { revalidate: 0 } // Disable Next.js cache for crawler
            });

            if (response.status === 404) return null;
            if (!response.ok) throw new Error(`Status ${response.status}`);

            return await response.text();
        } catch (error) {
            console.error(`Attempt ${i + 1} failed for ${url}:`, error);
            if (i === retries - 1) throw error;
            await this.delay(2000 * (i + 1)); // Exponential backoff
        }
    }
    return null;
  }
}

export const fetcher = new Fetcher();
