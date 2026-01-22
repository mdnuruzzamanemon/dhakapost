'use client';

import React from 'react';

interface BannerAdProps {
    image: string;
    title?: string;
}

export default function BannerAd({ image, title = 'Banner Image' }: BannerAdProps) {
    return (
        <div className=" flex justify-center shadow-lg">
            <div className="relative w-full max-w-[345px] aspect-square">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}