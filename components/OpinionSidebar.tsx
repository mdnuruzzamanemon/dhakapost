'use client';

import React from 'react';

interface OpinionSidebarProps {
    articles: string[];
}

export default function OpinionSidebar({ articles }: OpinionSidebarProps) {
    return (
        <div className="bg-white p-5">
            <div className="relative mb-4 pb-[2px]">
                <h2
                    className="text-base font-bold pb-2 inline-block relative z-10"
                    style={{
                        color: '#010101'
                    }}
                >
                    Opinion
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
            <ul className="mt-6">
                {articles.map((article, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-2 py-3"
                        style={{
                            borderBottom: index < articles.length - 1 ? '1px solid rgba(47, 47, 47, 0.15)' : 'none'
                        }}
                    >
                        <span className="mt-1 font-bold" style={{ color: '#010101' }}>▸</span>
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
