import React from 'react';
import { renderRatingCategoryIcon } from '@/components/common/RatingCategoryIcons';

export interface RatingCategoryItem {
  id: string;
  name: string;
  score: string;
  icon: string;
}

export interface RatingDistributionItem {
  stars: number;
  percentage: number;
}

interface RatingBarsProps {
  ratingDistribution?: RatingDistributionItem[];
  categories?: RatingCategoryItem[];
}

export function RatingBars({
  ratingDistribution = [
    { stars: 5, percentage: 95 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ],
  categories = [
    { id: 'cleanliness', name: 'Cleanliness', score: '5.0', icon: 'cleanliness' },
    { id: 'accuracy', name: 'Accuracy', score: '5.0', icon: 'accuracy' },
    { id: 'checkin', name: 'Check-in', score: '5.0', icon: 'checkin' },
    { id: 'communication', name: 'Communication', score: '5.0', icon: 'communication' },
    { id: 'location', name: 'Location', score: '4.8', icon: 'location' },
    { id: 'value', name: 'Value', score: '4.8', icon: 'value' },
  ],
}: RatingBarsProps) {
  return (
    <div className="w-full my-7 overflow-x-auto no-scrollbar">
      <div className="grid grid-cols-7 divide-x divide-[#DDDDDD] min-w-[760px] py-1">
        {/* Overall rating column */}
        <div className="flex flex-col justify-between pr-6 h-[118px]">
          <span className="text-[15px] font-medium text-[#222222] leading-tight">
            Overall rating
          </span>
          <div className="flex flex-col gap-1.5 w-full max-w-[130px] mb-1">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <span className="text-[11px] text-[#222222] font-medium w-2 text-right shrink-0">
                  {item.stars}
                </span>
                <div className="flex-1 h-[3.5px] bg-[#EBEBEB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#222222] rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Category score columns */}
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col justify-between px-6 h-[118px]">
            <div>
              <span className="text-[14px] font-medium text-[#222222] block leading-tight">
                {cat.name}
              </span>
              <span className="text-[18px] font-medium text-[#222222] block mt-1">
                {cat.score}
              </span>
            </div>
            <div className="mt-auto flex items-center mb-0.5">
              {renderRatingCategoryIcon(cat.icon, 'w-8 h-8 text-[#222222]')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
