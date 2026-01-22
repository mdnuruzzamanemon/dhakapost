'use client';

import React from 'react';
import { X, Search } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300
                ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                bg-black/30 backdrop-blur-md
            `}
                onClick={onClose}
            />


            {/* Sidebar */}
            <div
                className={`fixed left-0 top-0 bottom-0 w-80 bg-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 h-full flex flex-col">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 p-2"
                        aria-label="Close"
                        style={{ color: '#010101' }}
                    >
                        <X size={24} />
                    </button>

                    {/* Search Box */}
                    <div className="mt-12 mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-gray-400"
                                style={{ borderColor: '#bfbfbf', color: '#010101' }}
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                        </div>
                    </div>

                    {/* Mobile Menu Items */}
                    <nav className="space-y-4 flex-1">
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Home</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Politics</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>News</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Business</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Culture</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>National</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Sports</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Lifestyle</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Travel</a>
                        <a href="#" className="block text-lg font-semibold hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>Opinion</a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:opacity-60 transition-opacity" style={{ color: '#010101' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.503 20.752c0 .251-.114.486-.317.637l-2.106 2.539v.349h5.974v-.349l-2.106-2.539c-.203-.151-.317-.386-.317-.637V9.054l6.797 14.832h.791l5.834-14.832v11.821c0 .175 0 .209-.114.323l-1.623 1.574v.349h7.878v-.349l-1.623-1.574c-.114-.114-.175-.148-.175-.323V5.743c0-.175.061-.209.175-.323l1.623-1.574V3.5h-5.563l-3.986 9.952L11.549 3.5H5.746v.349l1.89 2.285c.188.149.287.383.261.618v10.002z" />
                            </svg>
                        </a>
                    </div>

                    {/* Footer Text */}
                    <div className="text-xs text-gray-500">
                        © 2026 Md Nuruzzaman Emon
                    </div>
                </div>
            </div>
        </>
    );
}
