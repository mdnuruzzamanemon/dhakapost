'use client';

import React from 'react';

interface ArticleCardProps {
    variant?: 'featured' | 'standard' | 'sidebar';
    category?: string;
    categoryColor?: string;
    title: string;
    author?: string;
    date?: string;
    excerpt?: string;
    image: string;
    commentCount?: number;
    showReadMore?: boolean;
    coAuthors?: string;
}

export default function ArticleCard({
    variant = 'standard',
    category,
    categoryColor,
    title,
    author,
    date,
    excerpt,
    image,
    commentCount,
    showReadMore = false,
    coAuthors
}: ArticleCardProps) {
    const getCategoryStyle = () => {
        if (!categoryColor) return {};

        // For badge-style categories (OPINION, LIFESTYLE)
        if (categoryColor.startsWith('bg-')) {
            return { backgroundColor: categoryColor.replace('bg-', '') };
        }

        // For text-only categories
        return { color: categoryColor };
    };

    if (variant === 'featured') {
        return (
            <article className="bg-white mb-6 lg:mb-8">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 lg:h-96 object-cover"
                />
                <div className="p-5 lg:p-8">
                    {category && (
                        <span
                            className="text-xs font-bold tracking-wider uppercase"
                            style={getCategoryStyle()}
                        >
                            {category}
                        </span>
                    )}
                    <h2 className="text-xl lg:text-4xl font-bold mt-2 lg:mt-3 mb-3 lg:mb-4 leading-tight" style={{ color: '#010101' }}>
                        {title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-xs lg:text-sm text-gray-500 mb-3 lg:mb-4">
                        {author && (
                            <>
                                <span>
                                    by <span className="font-bold" style={{ color: '#010101' }}>{author}</span>
                                </span>
                                {coAuthors && (
                                    <>
                                        <span className="hidden lg:inline">and <span className="italic">{coAuthors}</span></span>
                                        <span className="hidden lg:inline">•</span>
                                    </>
                                )}
                            </>
                        )}
                        {date && <span>{date}</span>}
                        {commentCount !== undefined && (
                            <>
                                <span>•</span>
                                <span>💬 {commentCount}</span>
                            </>
                        )}
                    </div>
                    {excerpt && (
                        <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 lg:mb-6">
                            {excerpt}
                        </p>
                    )}
                    {showReadMore && (
                        <button
                            className="border px-5 py-2 text-xs font-bold hover:bg-gray-50 tracking-wide transition-colors"
                            style={{ borderColor: '#bfbfbf', color: '#010101' }}
                        >
                            READ MORE
                        </button>
                    )}
                </div>
            </article>
        );
    }

    if (variant === 'sidebar') {
        return (
            <article className="bg-white overflow-hidden">
                <div className="relative">
                    <img src={image} alt={title} className="w-full h-48 lg:h-56 object-cover" />
                    {category && categoryColor?.startsWith('#') && (
                        <span
                            className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1"
                            style={{ backgroundColor: categoryColor }}
                        >
                            {category}
                        </span>
                    )}
                </div>
                <div className="p-5 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold mb-3 leading-tight hover:opacity-60 cursor-pointer transition-opacity" style={{ color: '#010101' }}>
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
                        {author && (
                            <>
                                <span>
                                    by <span className="font-bold" style={{ color: '#010101' }}>{author}</span>
                                </span>
                                <span>•</span>
                            </>
                        )}
                        {date && <span>{date}</span>}
                    </div>
                    {excerpt && (
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {excerpt}
                        </p>
                    )}
                </div>
            </article>
        );
    }

    // Standard variant
    return (
        <article className="bg-white">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 lg:p-5">
                {category && (
                    <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={getCategoryStyle()}
                    >
                        {category}
                    </span>
                )}
                <h3 className="font-bold text-base lg:text-lg leading-tight mt-2 hover:opacity-60 cursor-pointer transition-opacity" style={{ color: '#010101' }}>
                    {title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    {author && (
                        <>
                            <span>
                                by <span className="font-bold" style={{ color: '#010101' }}>{author}</span>
                            </span>
                            <span>•</span>
                        </>
                    )}
                    {date && <span>{date}</span>}
                </div>
            </div>
        </article>
    );
}
