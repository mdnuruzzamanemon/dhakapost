'use client';

import React, { useState, useEffect } from 'react';

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

    // Auto-play functionality - moves one item at a time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % articles.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [articles.length]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
    };

    // Get visible items based on screen size
    const getVisibleItems = () => {
        const visibleItems = [];

        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % articles.length;
            visibleItems.push(articles[index]);
        }

        return visibleItems;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="bg-white p-4 lg:p-6 mb-6 lg:mb-8 shadow-sm">
            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="text-2xl flex-shrink-0 transition-colors border hover:bg-gray-50 self-stretch"
                    style={{
                        color: '#010101',
                        borderColor: '#bfbfbf',
                        width: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0'
                    }}
                    aria-label="Previous"
                >
                    ‹
                </button>

                {/* Carousel Items Container */}
                <div className="flex gap-4 md:gap-5 lg:gap-6 overflow-hidden flex-1">
                    {visibleItems.map((article, index) => (
                        <div
                            key={`${article.id}-${currentIndex}-${index}`}
                            className={`flex gap-3 min-w-0 flex-1 ${index === 0 ? 'flex' : 'hidden md:flex'
                                } ${index === 2 ? 'hidden lg:flex' : ''}`}
                            style={{
                                animation: 'slideInFromRight 0.5s ease-out'
                            }}
                        >
                            <img
                                src={article.image}
                                alt=""
                                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover flex-shrink-0"
                            />
                            <p
                                className="text-xs lg:text-sm leading-tight line-clamp-4 font-normal"
                                style={{ color: '#010101' }}
                            >
                                {article.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="text-2xl flex-shrink-0 transition-colors border hover:bg-gray-50 self-stretch"
                    style={{
                        color: '#010101',
                        borderColor: '#bfbfbf',
                        width: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0'
                    }}
                    aria-label="Next"
                >
                    ›
                </button>
            </div>

            {/* CSS Animation - Only transform, no opacity */}
            <style jsx>{`
                @keyframes slideInFromRight {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}
