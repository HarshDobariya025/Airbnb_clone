import React from 'react';

export interface KeywordTag {
  id: string;
  label: string;
  count: number;
  emoji: string;
}

interface KeywordTagsProps {
  tags?: KeywordTag[];
  selectedTag?: string | null;
  onSelectTag?: (tagId: string | null) => void;
}

export function KeywordTags({
  tags = [],
  selectedTag = null,
  onSelectTag,
}: KeywordTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="w-full pt-1 pb-4 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2.5 min-w-max py-0.5">
        {tags.map((tag) => {
          const isSelected = selectedTag === tag.id;
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => onSelectTag && onSelectTag(isSelected ? null : tag.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-[14px] border transition-all duration-150 cursor-pointer select-none active:scale-[0.98] ${
                isSelected
                  ? 'bg-[#222222] text-white border-[#222222] shadow-xs'
                  : 'bg-white text-[#222222] border-[#DDDDDD] hover:border-[#222222] hover:bg-[#F7F7F7]'
              }`}
            >
              <span className="text-[16px] leading-none shrink-0" role="img" aria-label={tag.label}>
                {tag.emoji}
              </span>
              <span className={`font-semibold ${isSelected ? 'text-white' : 'text-[#222222]'}`}>
                {tag.label}
              </span>
              <span className={`text-[14px] font-normal ${isSelected ? 'text-gray-300' : 'text-[#717171]'}`}>
                {tag.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
