import React from 'react';

interface GuestFavouriteCenterProps {
  rating?: number;
  tagline?: string;
  onHowReviewsWorkClick?: () => void;
}

export function GuestFavouriteCenter({
  rating = 4.95,
  tagline = 'This home is a guest favourite based on ratings, reviews and reliability',
  onHowReviewsWorkClick,
}: GuestFavouriteCenterProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-2 pb-6">
      <div className="flex items-center justify-center gap-1 sm:gap-2 select-none">
        <img
          src="/assets/laurel-left-tTZ2KVHg.png"
          alt="Laurel left"
          className="h-20 sm:h-[88px] md:h-[96px] w-auto object-contain select-none pointer-events-none"
        />
        <span className="text-[56px] sm:text-[72px] md:text-[88px] font-bold text-[#222222] tracking-tighter leading-none px-1">
          {Number(rating).toFixed(2)}
        </span>
        <img
          src="/assets/laurel-right-DyXflTCi.png"
          alt="Laurel right"
          className="h-20 sm:h-[88px] md:h-[96px] w-auto object-contain select-none pointer-events-none"
        />
      </div>

      <h2 className="text-[18px] sm:text-[22px] font-semibold text-[#222222] mt-3 tracking-tight">
        Guest favourite
      </h2>
      <p className="text-[14px] sm:text-[16px] text-[#717171] max-w-[420px] mx-auto mt-2 leading-snug px-4">
        {tagline}
      </p>
      <button
        type="button"
        onClick={onHowReviewsWorkClick}
        className="mt-3 text-[14px] font-semibold text-[#222222] underline hover:text-black transition-colors cursor-pointer"
      >
        How reviews work
      </button>
    </div>
  );
}
