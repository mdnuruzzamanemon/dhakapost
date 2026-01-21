'use client';

import React from 'react';

interface BannerAdProps {
    image: string;
    title?: string;
    buttonText?: string;
}

export default function BannerAd({ image, title = "Banner Ads", buttonText = "LEARN MORE" }: BannerAdProps) {
    return (
        <div className="bg-white">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-48 lg:h-56 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <div className="text-3xl lg:text-4xl font-bold mb-2">{title.split(' ')[0]}</div>
                        <div className="text-3xl lg:text-4xl font-bold mb-4">{title.split(' ')[1]}</div>
                        <button className="bg-black text-white px-4 py-2 text-xs font-bold tracking-wide hover:bg-gray-800 transition-colors">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
