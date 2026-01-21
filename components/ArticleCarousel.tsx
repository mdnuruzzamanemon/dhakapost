'use client';

import React, { useState } from 'react';

interface CarouselArticle {
    id: number;
    image: string;
    title: string;
}

interface ArticleCarouselProps {
    articles: CarouselArticle[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : articles.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="bg-white p-4 lg:p-6 mb-6 lg:mb-8">
            <div className="flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    className="p-2 hover:bg-gray-100 text-2xl flex-shrink-0 transition-colors"
                    style={{ color: '#010101' }}
                >
                    ‹
                </button>

                <div className="flex gap-4 lg:gap-6 overflow-hidden flex-1 mx-2 lg:mx-4">
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className={`flex gap-3 min-w-0 flex-1 transition-opacity duration-300 ${index >= currentIndex && index < currentIndex + 3 ? 'opacity-100' : 'hidden lg:flex'
                                }`}
                        >
                            <img
                                src={article.image}
                                alt=""
                                className="w-16 h-16 lg:w-20 lg:h-20 object-cover flex-shrink-0"
                            />
                            <p className="text-xs lg:text-sm font-semibold leading-tight line-clamp-4" style={{ color: '#010101' }}>
                                {article.title}
                            </p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2 hover:bg-gray-100 text-2xl flex-shrink-0 transition-colors"
                    style={{ color: '#010101' }}
                >
                    ›
                </button>
            </div>
        </div>
    );
}
