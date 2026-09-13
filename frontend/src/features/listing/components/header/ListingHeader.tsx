'use client';

import React, { useState } from 'react';
import { Share, Heart } from 'lucide-react';

import type { Listing } from '../../types';

interface ListingHeaderProps {
  listing?: Listing;
  title?: string;
}

export function ListingHeader({
  listing,
  title,
}: ListingHeaderProps) {
  const displayTitle = listing?.title || title || 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10';
  const [isSaved, setIsSaved] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem('airbnb_saved_listing') === 'true';
    } catch {
      return false;
    }
  });
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const handleSave = () => {
    setIsSaved((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('airbnb_saved_listing', String(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };

  const handleShare = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-end justify-between mb-7 font-cereal">
      <h1 className="text-[26px] font-medium text-[#222222]">{displayTitle}</h1>
      <div className="flex items-center gap-4 text-[#222222] font-medium text-[14px]">
        {/* Share button */}
        <button
          type="button"
          onClick={handleShare}
          aria-label="Share listing"
          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors cursor-pointer relative active:scale-95 select-none"
        >
          <Share size={16} />
          <span className="underline">Share</span>
          {showCopied && (
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2.5 py-1 rounded whitespace-nowrap shadow-md z-20">
              Link copied!
            </span>
          )}
        </button>

        {/* Save button */}
        <button
          type="button"
          onClick={handleSave}
          aria-label={isSaved ? 'Saved to wishlist' : 'Save to wishlist'}
          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors cursor-pointer active:scale-95 select-none"
        >
          <Heart
            size={16}
            className={`transition-colors duration-200 ${
              isSaved ? 'text-[#FF385C] fill-[#FF385C]' : 'text-[#222222]'
            }`}
          />
          <span className="underline">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </div>
  );
}
