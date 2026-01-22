'use client';

import React from 'react';
import AuthorDateInfo from './AuthorDateInfo';

interface CompactArticleCardProps {
    category: string;
    categoryColor: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    image: string;
    badgePosition?: 'top-left' | 'bottom-center';
}

export default function CompactArticleCard({
    category,
    categoryColor,
    title,
    author,
    date,
    excerpt,
    image,
    badgePosition = 'bottom-center'
}: CompactArticleCardProps) {
    const badgeClasses = badgePosition === 'top-left' 
        ? 'absolute top-3 left-3 px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-white z-10'
        : 'absolute bottom-0 left-1/2 -translate-x-1/2 px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-white z-10';

    return (
        <article className="bg-white overflow-hidden shadow-sm">
            <div className="flex flex-col">
                {/* Image Section with Category Badge Overlay */}
                <div className="relative w-full">
                    <div className="relative w-full aspect-[350/250]">
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Category Badge Overlaid on Image */}
                        <span
                            className={badgeClasses}
                            style={{ backgroundColor: categoryColor }}
                        >
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 lg:p-6 flex flex-col justify-start">
                    {/* Title */}
                    <h3
                        className="text-lg lg:text-xl font-bold leading-tight mb-3 hover:opacity-60 transition-opacity cursor-pointer"
                        style={{ color: '#010101' }}
                    >
                        {title}
                    </h3>

                    {/* Author and Date */}
                    <div className="mb-3">
                        <AuthorDateInfo author={author} date={date} />
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {excerpt}
                    </p>
                </div>
            </div>
        </article>
    );
}
