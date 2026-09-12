'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

export interface ReviewItem {
  id: string | number;
  author: string;
  avatarType?: 'image' | 'initials';
  avatar?: string | null;
  avatarBg?: string;
  avatarText?: string;
  tenure?: string;
  rating: number;
  date: string;
  content: string;
  tags?: string[];
}

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    author = 'Guest',
    avatarType = 'image',
    avatar = null,
    avatarBg = 'bg-gray-200 text-gray-700',
    avatarText = author.charAt(0),
    tenure = 'Guest on Airbnb',
    rating = 5,
    date = 'Recently',
    content = '',
  } = review;

  const isLong = content.length > 170;
  const displayContent = !isExpanded && isLong ? `${content.slice(0, 170)}...` : content;

  return (
    <div className="flex flex-col gap-3 font-cereal">
      {/* Author header */}
      <div className="flex items-center gap-3">
        {avatarType === 'image' && avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-11 h-11 rounded-full object-cover shrink-0"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[16px] shrink-0 ${avatarBg}`}
          >
            {avatarText || author.charAt(0)}
          </div>
        )}

        <div className="flex flex-col justify-center">
          <h4 className="text-[15px] font-semibold text-[#222222] leading-snug">
            {author}
          </h4>
          <p className="text-[13px] text-[#717171] leading-tight">
            {tenure}
          </p>
        </div>
      </div>

      {/* Rating stars & date */}
      <div className="flex items-center gap-2 mt-0.5">
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, idx) => (
            <Star key={idx} size={12} className="fill-[#222222] text-[#222222]" />
          ))}
        </div>
        <span className="text-[14px] text-[#222222] font-medium">·</span>
        <span className="text-[14px] font-medium text-[#222222]">{date}</span>
      </div>

      {/* Review content */}
      <div className="text-[15px] text-[#222222] leading-relaxed">
        <p className="whitespace-pre-line">{displayContent}</p>
        {isLong && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 font-semibold underline text-[#222222] hover:text-black cursor-pointer inline-flex items-center gap-1 focus:outline-none"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </div>
  );
}
