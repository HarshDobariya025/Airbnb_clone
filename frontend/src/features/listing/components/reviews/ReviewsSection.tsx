'use client';

import React, { useState } from 'react';
import { GuestFavouriteCenter } from './GuestFavouriteCenter';
import { RatingBars } from './RatingBars';
import { KeywordTags } from './KeywordTags';
import { ReviewCard } from './ReviewCard';
import { reviewsData } from '../../constants/listing-data';

interface ReviewsSectionProps {
  reviews?: any[];
  totalCount?: number;
  onShowAll?: () => void;
}

export function ReviewsSection({ reviews, totalCount, onShowAll }: ReviewsSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const {
    overallRating = 4.95,
    reviewCount = 19,
    guestFavouriteTagline = 'This home is a guest favourite based on ratings, reviews and reliability',
    ratingDistribution = [
      { stars: 5, percentage: 95 },
      { stars: 4, percentage: 5 },
      { stars: 3, percentage: 0 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 },
    ],
    categories = [],
    keywordTags = [],
    items = [],
  } = reviewsData;

  const filteredReviews = selectedTag
    ? items.filter((rev: any) => rev.tags && rev.tags.includes(selectedTag))
    : items.slice(0, 6);

  return (
    <section id="reviews" className="w-full py-8 scroll-mt-24 font-cereal">
      {/* 1. Center Guest Favourite Banner with 3D Laurel Wreaths */}
      <GuestFavouriteCenter
        rating={overallRating}
        tagline={guestFavouriteTagline}
        onHowReviewsWorkClick={onShowAll}
      />

      {/* 2. 7-Column Rating Bars */}
      <RatingBars
        ratingDistribution={ratingDistribution}
        categories={categories}
      />

      {/* 3. Keyword Tags with Emojis */}
      <KeywordTags
        tags={keywordTags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

      {/* 4. 2-Column Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mt-6 mb-10">
        {filteredReviews.map((review: any) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* 5. Show All Reviews Button */}
      <button
        type="button"
        onClick={onShowAll}
        className="border border-[#222222] text-[#222222] font-semibold text-[16px] px-6 py-3.5 rounded-lg hover:bg-[#F7F7F7] active:scale-[0.98] transition-all shadow-xs cursor-pointer select-none"
      >
        Show all {reviewCount} reviews
      </button>
    </section>
  );
}
