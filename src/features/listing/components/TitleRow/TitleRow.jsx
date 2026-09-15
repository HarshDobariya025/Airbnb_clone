import { useState } from 'react';
import './TitleRow.css';
import { ShareIcon, HeartIcon } from '../../../../components/Icons.jsx';

export default function TitleRow({ title }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className="title-row" id="photos">
      <h1 className="title-row__title">{title}</h1>
      <div className="title-row__actions">
        <button className="title-row__action-btn" type="button" id="shareBtn">
          <span className="title-row__action-icon"><ShareIcon /></span>
          <span className="title-row__action-label">Share</span>
        </button>
        <button
          className="title-row__action-btn"
          type="button"
          id="saveBtn"
          onClick={() => setIsSaved((prev) => !prev)}
          aria-label={isSaved ? 'Saved to wishlist' : 'Save to wishlist'}
        >
          <span className="title-row__action-icon">
            <HeartIcon filled={isSaved} />
          </span>
          <span className="title-row__action-label">{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </section>
  );
}
