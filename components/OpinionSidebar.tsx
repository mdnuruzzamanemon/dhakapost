'use client';

import React from 'react';
import SectionHeading from './SectionHeading';

interface OpinionSidebarProps {
    articles: string[];
}

export default function OpinionSidebar({ articles }: OpinionSidebarProps) {
    return (
        <div className="bg-white p-5 shadow-sm">
            <SectionHeading title="Opinion" />
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
