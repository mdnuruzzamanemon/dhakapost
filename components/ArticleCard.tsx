'use client';

import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

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
        return categoryColor.startsWith('#') ? { color: categoryColor } : {};
    };

    /* =========================
       FEATURED VARIANT (FIXED)
       ========================= */
    if (variant === 'featured') {
        return (
            <article className="relative mb-8 bg-white shadow-lg">
                {/* Image */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* OVERLAPPING CONTENT */}
                <div className="relative -mt-20 lg:-mt-28 mx-4 lg:mx-8 bg-white ">
                    <div className="p-5 lg:p-6">
                        {category && (
                            <span
                                className="text-xs font-bold tracking-wider uppercase text-gray-500"
                                style={getCategoryStyle()}
                            >
                                {category}
                            </span>
                        )}

                        <h2
                            className="mt-2 mb-4 text-xl lg:text-3xl font-bold leading-tight"
                            style={{ color: '#010101' }}
                        >
                            {title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-2 text-[11px] lg:text-xs text-gray-500 mb-4">
                            {author && (
                                <>
                                    <span>
                                        by{' '}
                                        <span className="font-bold" style={{ color: '#010101' }}>
                                            {author}
                                        </span>
                                    </span>

                                    {coAuthors && (
                                        <span>
                                            and <span>{coAuthors}</span>
                                        </span>
                                    )}
                                </>
                            )}

                            {date && (
                                <div className='flex'>
                                    
                                    <Calendar className="w-3 h-3" />
                                    <span>{date}</span>
                                </div>
                            )}

                            {commentCount !== undefined && (
                                <div className='flex'>
                                    
                                    <MessageCircle className="w-3 h-3" />
                                    <span>{commentCount}</span>
                                </div>
                            )}
                        </div>

                        {excerpt && (
                            <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-5">
                                {excerpt}
                            </p>
                        )}

                        {showReadMore && (
                            <button
                                className="border border-[#d1d1d1] text-[#555555] px-6 py-2.5 text-xs  tracking-wider uppercase transition-colors shadow-lg hover:bg-black hover:text-white"
                            >

                                READ MORE
                            </button>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    /* =========================
       SIDEBAR VARIANT
       ========================= */
    if (variant === 'sidebar') {
        return (
            <article className="bg-white overflow-hidden">
                <div className="relative aspect-[2/1]">
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                <div className="p-5 lg:p-6">
                    <h3
                        className="text-lg lg:text-xl font-bold mb-3 leading-tight hover:opacity-60 transition-opacity cursor-pointer"
                        style={{ color: '#010101' }}
                    >
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        {author && (
                            <>
                                <span>
                                    by{' '}
                                    <span className="font-bold" style={{ color: '#010101' }}>
                                        {author}
                                    </span>
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

    /* =========================
       STANDARD VARIANT
       ========================= */
    return (
        <article className="bg-white">
            <div className="relative aspect-[2/1]">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="p-4 lg:p-5">
                {category && (
                    <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={getCategoryStyle()}
                    >
                        {category}
                    </span>
                )}

                <h3
                    className="mt-2 text-base lg:text-lg font-bold leading-tight hover:opacity-60 transition-opacity cursor-pointer"
                    style={{ color: '#010101' }}
                >
                    {title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    {author && (
                        <>
                            <span>
                                by{' '}
                                <span className="font-bold" style={{ color: '#010101' }}>
                                    {author}
                                </span>
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
