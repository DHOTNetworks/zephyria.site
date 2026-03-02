import fs from 'fs';
import path from 'path';
import { SdkLayout } from './SdkLayout';
import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Zephyria SDK Guide | Write Smart Contracts in Zig',
    description: 'Comprehensive guide to writing ultra-fast, highly-concurrent smart contracts in Zig for the Zephyria blockchain.',
};

export default async function SdkPage() {
    // Read SDK.md from the root directory
    const filePath = path.join(process.cwd(), 'SDK.md');
    let fileContent = '';
    try {
        fileContent = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        fileContent = '# Error\nCould not load SDK documentation.';
        console.error('Failed to read SDK.md:', error);
    }

    // Parse headings (h2 and h3) for the sidebar navigation
    const headings = fileContent
        .split('\n')
        .filter((line) => line.startsWith('##') || line.startsWith('###'))
        .map((line) => {
            const match = line.match(/^(#{2,3})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const text = match[2].trim();
                // The ID generation here must match the logic in MarkdownRenderer
                const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                return { id, text, level };
            }
            return null;
        })
        .filter(Boolean) as { id: string; text: string; level: number }[];

    return (
        <SdkLayout headings={headings}>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                <MarkdownRenderer content={fileContent} />
            </div>
        </SdkLayout>
    );
}
