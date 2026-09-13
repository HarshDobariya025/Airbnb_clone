import { useState } from 'react';
import './SimilarListings.css';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '../../../../components/Icons.jsx';

const VISIBLE = 3;

export default function SimilarListings({ listings }) {
  const [offset, setOffset] = useState(0);
  const maxOffset = listings.length - VISIBLE;
  const pageInfo = `${offset + 1} / ${Math.ceil(listings.length / VISIBLE)}`;

  const prev = () => setOffset(o => Math.max(0, o - 1));
  const next = () => setOffset(o => Math.min(maxOffset, o + 1));

  return (
    <section className="sim">
      <div className="sim__header">
        <h2 className="sim__title">More stays nearby</h2>
        <div className="sim__controls">
          <span className="sim__page-info">{pageInfo}</span>
          <button
            className="sim__nav-btn"
            onClick={prev}
            disabled={offset === 0}
            id="simPrev"
            aria-label="Previous"
          >
            <span className="sim__nav-icon"><ChevronLeftIcon /></span>
          </button>
          <button
            className="sim__nav-btn"
            onClick={next}
            disabled={offset >= maxOffset}
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
          style={{ transform: `translateX(calc(-${offset} * (100% / ${VISIBLE} + 8px)))` }}
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
