'use client';

import React from 'react';
import SectionHeading from './SectionHeading';

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
        <div className="bg-white p-5 mb-6 shadow-lg">
            <SectionHeading title="The Latest" />
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
