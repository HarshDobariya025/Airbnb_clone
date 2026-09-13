import { useState } from 'react';
import './Reviews.css';
import { StarIcon } from '../../../../components/Icons.jsx';

function Avatar({ review }) {
  if (review.avatar) {
    return <img className="rv__avatar rv__avatar--img" src={review.avatar} alt={review.name} />;
  }
  return (
    <div className="rv__avatar rv__avatar--initial" style={{ background: review.bg, color: review.color }}>
      {review.initials}
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 120;

  return (
    <div className="rv__card">
      <div className="rv__card-head">
        <Avatar review={review} />
        <div>
          <div className="rv__card-name">{review.name}</div>
          <div className="rv__card-meta">{review.duration}</div>
        </div>
      </div>
      <div className="rv__card-meta-row">
        <span className="rv__stars">
          {[1,2,3,4,5].map(i => <StarIcon key={i} size={11} />)}
        </span>
        <span>·</span>
        <span>{review.date}</span>
      </div>
      <div className={`rv__card-text ${isLong && !expanded ? 'rv__card-text--clamped' : ''}`}>
        {review.text}
      </div>
      {isLong && !expanded && (
        <button className="rv__show-more" onClick={() => setExpanded(true)}>Show more</button>
      )}
    </div>
  );
}

export default function Reviews({ data }) {
  const { ratings, reviewChips, reviews, reviewCount } = data;

  const ratingCategories = [
    { label: 'Cleanliness', score: ratings.cleanliness, icon: 'clean' },
    { label: 'Accuracy', score: ratings.accuracy, icon: 'check' },
    { label: 'Check-in', score: ratings.checkIn, icon: 'key' },
    { label: 'Communication', score: ratings.communication, icon: 'chat' },
    { label: 'Location', score: ratings.location, icon: 'map' },
    { label: 'Value', score: ratings.value, icon: 'tag' },
  ];

  return (
    <section className="rv" id="reviews">
      {/* Header — laurel + Guest favourite */}
      <div className="rv__header">
        <div className="rv__laurel">
          <img src="/assets/images/ui/laurel-left.png" alt="" />
          <div className="rv__laurel-score">{ratings.overall}</div>
          <img src="/assets/images/ui/laurel-right.png" alt="" />
        </div>
        <div className="rv__fav-label">Guest favourite</div>
        <div className="rv__fav-desc">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button className="rv__how-btn">How reviews work</button>
      </div>

      {/* Rating breakdown */}
      <div className="rv__breakdown">
        {/* Overall bars */}
        <div className="rv__bars">
          <div className="rv__bars-label">Overall rating</div>
          <div className="rv__bars-list">
            {[5,4,3,2,1].map(n => (
              <div className="rv__bar-row" key={n}>
                <span className="rv__bar-num">{n}</span>
                <div className="rv__bar-track">
                  <div className="rv__bar-fill" style={{ width: `${ratings.bars[n]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category scores */}
        {ratingCategories.map(cat => (
          <div className="rv__cat" key={cat.label}>
            <div className="rv__cat-label">{cat.label}</div>
            <div className="rv__cat-score">{cat.score.toFixed(1)}</div>
          </div>
        ))}
      </div>

      {/* Keyword chips */}
      <div className="rv__chips">
        {reviewChips.map(chip => (
          <button className="rv__chip" key={chip.label}>
            <img className="rv__chip-img" src={chip.image} alt="" aria-hidden="true" />
            {chip.label} <span className="rv__chip-count">{chip.count}</span>
          </button>
        ))}
      </div>

      {/* Review cards */}
      <div className="rv__cards">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>

      <button className="rv__show-all-btn">Show all {reviewCount} reviews</button>
    </section>
  );
}
