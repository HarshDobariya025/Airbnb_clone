'use client';

import React from 'react';
import type { Photo } from '../../types';

interface PhotoGridProps {
  photos?: Photo[];
  onOpenPhotoTour?: () => void;
  onPhotoClick?: (startIndex: number) => void;
}

export function PhotoGrid({ photos, onOpenPhotoTour, onPhotoClick }: PhotoGridProps) {
  const handleClick = (index: number) => {
    if (onPhotoClick) {
      onPhotoClick(index);
    } else if (onOpenPhotoTour) {
      onOpenPhotoTour();
    }
  };

  const getSrc = (index: number, fallback: string) => {
    return photos?.[index]?.src || fallback;
  };

  const getAlt = (index: number, fallback: string) => {
    return photos?.[index]?.alt || fallback;
  };

  return (
    <div className="relative rounded-xl overflow-hidden flex h-[500px] gap-2 mt-6 font-cereal select-none">
      {/* 50% left: Hero photo */}
      <div
        className="w-1/2 h-full cursor-pointer overflow-hidden group relative"
        onClick={() => handleClick(0)}
      >
        <img
          src={getSrc(0, '/assets/additional-10-U6Fh-z-t.jpeg')}
          alt={getAlt(0, 'Living room 1')}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
      </div>

      {/* 50% right: 2x2 grid */}
      <div className="w-1/2 h-full flex flex-col gap-2">
        {/* Top row */}
        <div className="flex gap-2 h-[calc(50%-4px)]">
          <div
            className="w-1/2 h-full cursor-pointer overflow-hidden group relative"
            onClick={() => handleClick(1)}
          >
            <img
              src={getSrc(1, '/assets/living-room-2-3-D6DP_NhK.jpeg')}
              alt={getAlt(1, 'Living room 2')}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
          </div>

          <div
            className="w-1/2 h-full cursor-pointer overflow-hidden group relative"
            onClick={() => handleClick(2)}
          >
            <img
              src={getSrc(2, '/assets/living-room-2-2-kXn5mfy1.jpeg')}
              alt={getAlt(2, 'Living room 3')}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex gap-2 h-[calc(50%-4px)]">
          <div
            className="w-1/2 h-full cursor-pointer overflow-hidden group relative"
            onClick={() => handleClick(3)}
          >
            <img
              src={getSrc(3, '/assets/bedroom5-CkhgeWg2.jpeg')}
              alt={getAlt(3, 'Bedroom')}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
          </div>

          <div
            className="w-1/2 h-full cursor-pointer overflow-hidden group relative"
            onClick={() => handleClick(4)}
          >
            <img
              src={getSrc(4, '/assets/bathroom1-BTSBvkUh.jpeg')}
              alt={getAlt(4, 'Bathroom')}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Floating "Show all photos" button */}
      <button
        type="button"
        onClick={() => handleClick(0)}
        className="absolute bottom-6 right-6 bg-white border border-black text-[#222222] font-semibold text-[14px] px-4 py-[6px] rounded-lg flex items-center gap-2 transition-colors shadow-sm cursor-pointer hover:bg-neutral-50"
      >
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
          <circle cx="2" cy="2" r="1.5" />
          <circle cx="8" cy="2" r="1.5" />
          <circle cx="14" cy="2" r="1.5" />
          <circle cx="2" cy="8" r="1.5" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="14" cy="8" r="1.5" />
          <circle cx="2" cy="14" r="1.5" />
          <circle cx="8" cy="14" r="1.5" />
          <circle cx="14" cy="14" r="1.5" />
        </svg>
        <span>Show all photos</span>
      </button>
    </div>
  );
}
