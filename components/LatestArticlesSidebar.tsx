'use client';

import React from 'react';

interface LatestArticle {
    id: number;
    image: string;
    title: string;
}

interface LatestArticlesSidebarProps {
    articles: LatestArticle[];
}

export default function LatestArticlesSidebar({ articles }: LatestArticlesSidebarProps) {
    return (
        <div className="bg-white p-5 mb-6">
            <div className="relative mb-4 pb-[2px]">
                <h2
                    className="text-base font-bold pb-2 inline-block relative z-10"
                    style={{
                        color: '#010101'
                    }}
                >
                    The Latest
                </h2>
                {/* Full-width lighter border */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{
                        backgroundColor: 'rgba(47, 47, 47, 0.2)'
                    }}
                />
                {/* Bold solid border on top - 30px width */}
                <div
                    className="absolute left-0 h-[2px]"
                    style={{
                        width: '30px',
                        backgroundColor: '#2f2f2f',
                        bottom: '0px'
                    }}
                />
            </div>
            <div className="space-y-4 mt-6">
                {articles.map(article => (
                    <div key={article.id} className="flex gap-3">
                        <img
                            src={article.image}
                            alt=""
                            className="w-20 h-14 object-cover flex-shrink-0"
                        />
                        <h3 className="text-sm font-semibold leading-tight hover:opacity-60 cursor-pointer transition-opacity" style={{ color: '#010101' }}>
                            {article.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
