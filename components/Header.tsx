'use client';

import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';

interface HeaderProps {
    onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
    const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

    return (
        <header className="bg-white" style={{ fontFamily: 'var(--font-roboto-condensed), "Roboto Condensed", Helvetica, Arial, sans-serif' }}>
            {/* Top Bar with Logo */}
            <div style={{ borderBottom: '1px solid #bfbfbf' }}>
                <div className="max-w-7xl mx-auto px-4 py-5 lg:py-6 flex items-center justify-between lg:justify-center">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuToggle}
                        className="lg:hidden p-2"
                        aria-label="Menu"
                        style={{ color: '#010101' }}
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo - Different layout for mobile and desktop */}
                    <div className="flex-1 lg:flex-none text-center">
                        {/* Mobile/Tablet Logo (stacked) */}
                        <div className="inline-block lg:hidden" style={{ color: '#010101' }}>
                            <div className="text-xs tracking-[0.2em] font-bold mb-0.5" style={{ letterSpacing: '0.15em' }}>THE</div>
                            <div className="text-[28px] font-bold tracking-tight leading-none" style={{ letterSpacing: '0.02em' }}>DOWNTOWN</div>
                        </div>

                        {/* Desktop Logo (inline, same size) */}
                        <div className="hidden lg:inline-block" style={{ color: '#010101' }}>
                            <span className="text-[32px] font-bold tracking-tight leading-none" style={{ letterSpacing: '0.02em' }}>THE DOWNTOWN</span>
                        </div>
                    </div>

                    {/* Search Icon - Only on mobile/tablet */}
                    <button className="lg:hidden p-2" aria-label="Search" style={{ color: '#010101' }}>
                        <Search size={24} />
                    </button>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav
                className="hidden lg:block bg-white relative"
                style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                    borderBottom: '1px solid #f5f5f5'
                }}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center justify-center space-x-6 py-3.5 text-[14px] font-bold tracking-wide" style={{ color: '#010101' }}>
                        {/* HOME with Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setHomeDropdownOpen(true)}
                            onMouseLeave={() => setHomeDropdownOpen(false)}
                        >
                            <a
                                href="#"
                                className="flex items-center gap-1 relative pb-1"
                            >
                                HOME
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="currentColor" className="mt-0.5">
                                    <path d="M0 0L4 5L8 0H0Z" />
                                </svg>
                                {/* Animated bottom border */}
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>

                            {/* Dropdown Menu */}
                            {homeDropdownOpen && (
                                <div
                                    className="absolute left-0 top-full mt-0 bg-white shadow-lg z-50"
                                    style={{
                                        minWidth: '200px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                    }}
                                >
                                    <ul className="py-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-5 py-2.5 text-[13px] hover:bg-gray-50 transition-colors"
                                                style={{ color: '#010101' }}
                                            >
                                                Homepage Layout 1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-5 py-2.5 text-[13px] hover:bg-gray-50 transition-colors"
                                                style={{ color: '#010101' }}
                                            >
                                                Homepage Layout 2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-5 py-2.5 text-[13px] hover:bg-gray-50 transition-colors"
                                                style={{ color: '#010101' }}
                                            >
                                                Homepage Layout 3
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                NEWS
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                POLITICS
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                BUSINESS
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                NATIONAL
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                CULTURE
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                OPINION
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                LIFESTYLE
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#" className="relative pb-1 block">
                                SPORTS
                                <span className="absolute bottom-0 left-0 w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#010101', height: '1.5px' }}></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
