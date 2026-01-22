'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

interface AuthorDateInfoProps {
    author: string;
    date: string;
}

export default function AuthorDateInfo({ author, date }: AuthorDateInfoProps) {
    return (
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span>
                by{' '}
                <span className="font-bold" style={{ color: '#010101' }}>
                    {author}
                </span>
            </span>
            <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
            </div>
        </div>
    );
}
