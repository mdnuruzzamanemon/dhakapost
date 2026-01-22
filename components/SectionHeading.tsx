'use client';

import React from 'react';

interface SectionHeadingProps {
    title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <div className="relative mb-4 ">
            <h2
                className="text-base font-bold pb-2 inline-block relative z-10"
                style={{
                    color: '#010101'
                }}
            >
                {title}
            </h2>
            {/* Full-width lighter border */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{
                    backgroundColor: 'rgba(47, 47, 47, 0.2)',
                    zIndex: 1
                }}
            />
            {/* Bold solid border on top - 30px width */}
            <div
                className="absolute bottom-0 left-0 h-[3px]"
                style={{
                    width: '30px',
                    backgroundColor: '#2f2f2f',
                    zIndex: 2
                }}
            />
        </div>
    );
}
