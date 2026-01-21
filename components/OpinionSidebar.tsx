'use client';

import React from 'react';

interface OpinionSidebarProps {
    articles: string[];
}

export default function OpinionSidebar({ articles }: OpinionSidebarProps) {
    return (
        <div className="bg-white p-5">
            <h2
                className="text-base font-bold mb-4 pb-2 inline-block"
                style={{
                    color: '#010101',
                    borderBottom: '2px solid #2f2f2f'
                }}
            >
                Opinion
            </h2>
            <ul className="space-y-3 mt-6">
                {articles.map((article, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 font-bold" style={{ color: '#ff6b35' }}>▸</span>
                        <a
                            href="#"
                            className="text-sm hover:opacity-60 leading-snug transition-opacity"
                            style={{ color: '#010101' }}
                        >
                            {article}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
