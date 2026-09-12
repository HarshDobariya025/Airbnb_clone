'use client';

import React from 'react';

interface CompactBarProps {
  isVisible?: boolean;
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
  pricing?: {
    formattedTotalPrice?: string;
    nights?: number;
  };
  rating?: number | string;
  reviewCount?: number;
  onReserve?: () => void;
}

export function CompactBar({
  isVisible = false,
  activeSection = 'photos',
  onSectionClick,
  pricing = { formattedTotalPrice: '₹28,499', nights: 5 },
  rating = 4.95,
  reviewCount = 19,
  onReserve,
}: CompactBarProps) {
  const sections = [
    { id: 'photos', label: 'Photos' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
  ];

  const handleClick = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      aria-label="Listing section navigation"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 font-cereal ${
        isVisible
          ? 'translate-y-0 opacity-100 shadow-[0_2px_4px_rgba(0,0,0,0.06)]'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-40 h-[65px] flex items-center justify-between">
        {/* Tabs on left */}
        <div className="flex items-center gap-6">
          {sections.map((section) => {
            const isCurrent = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleClick(section.id)}
                className={`text-[14px] font-medium py-5 border-b-2 transition-colors cursor-pointer select-none ${
                  isCurrent
                    ? 'border-[#222222] text-[#222222]'
                    : 'border-transparent text-[#717171] hover:text-[#222222]'
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>

        {/* Right price & CTA */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-1">
              <span className="text-[16px] font-medium text-[#222222]">
                {pricing.formattedTotalPrice}
              </span>
              <span className="text-[14px] text-[#222222] font-normal">
                for {pricing.nights} nights
              </span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-[#222222] font-medium">
              <span>★</span>
              <span>{typeof rating === 'number' ? rating.toFixed(2) : rating}</span>
              <span>·</span>
              <span className="text-[#717171]">{reviewCount} reviews</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onReserve}
            className="bg-[#E00B41] hover:bg-[#D70466] active:scale-95 text-white font-medium text-[16px] px-6 py-3 rounded-lg transition-all cursor-pointer shadow-sm"
          >
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
