import { useState } from 'react';
import './SimilarListings.css';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '../../../../components/Icons.jsx';

const VISIBLE = 5;
const GAP = 16; // px gap between cards

export default function SimilarListings({ listings }) {
  const [page, setPage] = useState(0);
  const maxOffset = Math.max(0, listings.length - VISIBLE);
  const totalPages = Math.ceil(listings.length / VISIBLE);

  // Cap offset so the last page always fills VISIBLE cards (no blank space)
  const offset = Math.min(page * VISIBLE, maxOffset);

  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(totalPages - 1, p + 1));

  return (
    <section className="sim">
      <div className="sim__header">
        <h2 className="sim__title">More stays nearby</h2>
        <div className="sim__controls">
          <span className="sim__page-info">{page + 1}/{totalPages}</span>
          <button
            className="sim__nav-btn"
            onClick={prev}
            disabled={page === 0}
            id="simPrev"
            aria-label="Previous"
          >
            <span className="sim__nav-icon"><ChevronLeftIcon /></span>
          </button>
          <button
            className="sim__nav-btn"
            onClick={next}
            disabled={page >= totalPages - 1}
            id="simNext"
            aria-label="Next"
          >
            <span className="sim__nav-icon"><ChevronRightIcon /></span>
          </button>
        </div>
      </div>

      <div className="sim__track-wrap">
        <div
          className="sim__track"
          id="simTrack"
          style={{
            // Each card step = (containerWidth + GAP) / VISIBLE
            transform: `translateX(calc(-${offset} * ((100% + ${GAP}px) / ${VISIBLE})))`
          }}
        >
          {listings.map((item, i) => (
            <div className="sim__card" key={i}>
              <img className="sim__card-img" src={item.image} alt={item.title} loading="lazy" />
              <div className="sim__card-title">{item.title}</div>
              <div className="sim__card-price">
                {item.price}{' '}
                <span className="sim__card-star">
                  <StarIcon size={11} />
                </span>{' '}
                {item.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
