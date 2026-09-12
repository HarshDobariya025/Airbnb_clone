'use client';

import React from 'react';
import { Logo } from './Logo';
import { Search, Globe, Menu } from 'lucide-react';

interface HeaderProps {
  onScrollToTop?: () => void;
  onSearch?: () => void;
  onBecomeHost?: () => void;
  onLanguageSelect?: () => void;
  onLogin?: () => void;
  onSignUp?: () => void;
}

export function Header({
  onScrollToTop,
  onSearch,
  onBecomeHost,
  onLanguageSelect,
}: HeaderProps) {
  const handleScrollTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header role="banner" className="w-full bg-white border-b border-gray-200 font-cereal sticky top-0 z-30">
      <div className="max-w-[1760px] mx-auto h-20 px-10 pl-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={handleScrollTop}>
          <Logo />
        </div>

        {/* Center: Search pill */}
        <div
          onClick={onSearch}
          className="flex items-center bg-white border border-[#DDDDDD] rounded-full h-[48px] px-2 ml-[100px] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow duration-200 cursor-pointer select-none"
        >
          <div className="flex items-center justify-center px-2">
            <img
              src="/assets/searchbar-house-CaZZeLim.png"
              alt="Search Mode"
              className="w-[32px] h-[32px] object-contain"
            />
          </div>
          <div className="text-[15px] font-medium text-[#222222] px-2.5 whitespace-nowrap">
            Anywhere
          </div>
          <div className="w-px h-6 bg-[#DDDDDD] shrink-0" />
          <div className="text-[15px] font-medium text-[#222222] px-4 whitespace-nowrap">
            Anytime
          </div>
          <div className="w-px h-6 bg-[#DDDDDD] shrink-0" />
          <div className="text-[15px] text-[#717171] font-normal pl-4 pr-2 whitespace-nowrap">
            Add guests
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FF385C] hover:bg-[#E00B41] flex items-center justify-center ml-2 text-white transition-colors shrink-0">
            <Search size={15} className="text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 mr-2 select-none">
          <a
            href="#"
            onClick={onBecomeHost}
            className="text-[15px] font-medium text-[#171717] px-4 py-3 rounded-full hover:bg-[#F7F7F7] cursor-pointer transition-colors whitespace-nowrap"
          >
            Become a host
          </a>
          <button
            type="button"
            onClick={onLanguageSelect}
            aria-label="Language selector"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F2F2F2] hover:bg-gray-200 cursor-pointer transition-colors border-none p-0 shrink-0"
          >
            <Globe size={18} className="text-[#222222]" />
          </button>
          <button
            type="button"
            aria-label="Main menu"
            className="w-10 h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors border-none p-0 shrink-0"
          >
            <Menu size={18} className="text-[#222222]" />
          </button>
        </div>
      </div>
    </header>
  );
}
