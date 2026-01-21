'use client';

import React from 'react';
import { Menu, Search } from 'lucide-react';

interface HeaderProps {
    onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
    return (
        <header className="bg-white" style={{ borderBottom: '1px solid #bfbfbf' }}>
            {/* Top Bar with Logo */}
            <div style={{ borderBottom: '1px solid #bfbfbf' }}>
                <div className="max-w-7xl mx-auto px-4 py-4 lg:py-6 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuToggle}
                        className="lg:hidden p-2"
                        aria-label="Menu"
                        style={{ color: '#010101' }}
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo */}
                    <div className="flex-1 lg:flex-none text-center lg:text-left">
                        <div className="inline-block" style={{ color: '#010101' }}>
                            <div className="text-xs tracking-widest mb-1">THE</div>
                            <div className="text-2xl lg:text-3xl font-bold tracking-wide">DOWNTOWN</div>
                        </div>
                    </div>

                    {/* Search Icon */}
                    <button className="p-2" aria-label="Search" style={{ color: '#010101' }}>
                        <Search size={24} />
                    </button>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center justify-center space-x-6 xl:space-x-8 py-3 text-xs font-bold tracking-wide" style={{ color: '#010101' }}>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">HOME</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">NEWS</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">POLITICS</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">BUSINESS</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">NATIONAL</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">CULTURE</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">OPINION</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">LIFESTYLE</a></li>
                        <li><a href="#" className="hover:opacity-60 transition-opacity">SPORTS</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
