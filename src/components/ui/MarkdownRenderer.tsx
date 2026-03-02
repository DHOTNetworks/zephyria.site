import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

interface MarkdownRendererProps {
    content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    return (
        <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-accent-cyan hover:prose-a:text-accent-orange transition-colors duration-300 max-w-none w-full prose-strong:text-white prose-strong:font-semibold">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    h1: ({ ...props }) => <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 mt-12 bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-2xl" {...props} />,
                    h2: ({ ...props }) => {
                        const childrenText = props.children ? props.children.toString() : '';
                        const id = childrenText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                        return (
                            <div className="mt-16 mb-6">
                                <div className="w-8 h-[2px] bg-accent-cyan mb-4 shadow-[0_0_15px_var(--accent-cyan)]"></div>
                                <h2 id={id} className="text-3xl font-light tracking-tight scroll-mt-32 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70" {...props} />
                            </div>
                        )
                    },
                    h3: ({ ...props }) => <h3 className="text-2xl font-semibold mb-4 mt-10 tracking-tight text-white/90" {...props} />,
                    code: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"code"> & { className?: string, children?: React.ReactNode }) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const isInline = !match;
                        return isInline ? (
                            <code className="bg-white/5 text-accent-cyan px-1.5 py-0.5 rounded border border-white/10 font-mono text-xs" {...props}>
                                {children}
                            </code>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                    pre: ({ ...props }) => (
                        <div className="relative group my-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                            <pre className="glass-panel p-5 rounded-xl overflow-x-auto shadow-2xl relative z-10 custom-scrollbar text-sm" {...props} />
                        </div>
                    ),
                    blockquote: ({ ...props }) => (
                        <div className="relative my-8 overflow-hidden rounded-r-xl">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-orange shadow-[0_0_10px_var(--accent-orange)] z-10" />
                            <blockquote className="pl-6 py-4 bg-white/5 border border-white/5 italic text-white/80 font-light" {...props} />
                        </div>
                    ),
                    table: ({ ...props }) => (
                        <div className="overflow-x-auto my-10 border border-white/10 rounded-xl glass-panel">
                            <table className="w-full text-left border-collapse" {...props} />
                        </div>
                    ),
                    th: ({ ...props }) => <th className="border-b border-white/10 bg-black/40 p-4 text-[10px] uppercase tracking-widest text-white/50 font-medium" {...props} />,
                    td: ({ ...props }) => <td className="border-b border-white/5 p-4 text-white/70 font-mono text-sm hover:text-white transition-colors" {...props} />,
                    tr: ({ ...props }) => <tr className="group" {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};
