import { useEffect, useCallback } from 'react';
import './Lightbox.css';
import { GridIcon, CloseIcon, PrevLargeIcon, NextLargeIcon } from '../../../../components/Icons.jsx';

export default function Lightbox({ images, currentIndex, onClose, onNavigate, onPhotoTour, imageRoomNames }) {
  const total = images.length;

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, total, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  const currentSrc = images[currentIndex];

  return (
    <div className="lb" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
      {/* Header */}
      <header className="lb__header">
        <button className="lb__header-btn" type="button" aria-label="Show all photos" id="lbGrid" onClick={onPhotoTour}>
          <span className="lb__header-icon"><GridIcon /></span>
        </button>
        <div className="lb__room-name" id="lbRoomName">
          {imageRoomNames ? imageRoomNames[currentIndex] : ''}
        </div>
        <div className="lb__header-right">
          <span className="lb__counter" id="lbCounter">
            {currentIndex + 1} of {total}
          </span>
          <button
            className="lb__header-btn lb__close"
            type="button"
            aria-label="Close"
            id="lbClose"
            onClick={onPhotoTour}
          >
            <span className="lb__header-icon"><CloseIcon /></span>
          </button>
        </div>
      </header>

      {/* Prev button */}
      <button
        className="lb__nav lb__nav--prev"
        type="button"
        aria-label="Previous"
        id="lbPrev"
        onClick={goPrev}
        disabled={currentIndex === 0}
      >
        <span className="lb__nav-icon"><PrevLargeIcon /></span>
      </button>

      {/* Image stage */}
      <div className="lb__stage" id="lbStage">
        <img
          key={currentIndex}
          src={currentSrc}
          alt={`Photo ${currentIndex + 1}`}
          className="lb__img"
        />
      </div>

      {/* Next button */}
      <button
        className="lb__nav lb__nav--next"
        type="button"
        aria-label="Next"
        id="lbNext"
        onClick={goNext}
        disabled={currentIndex === total - 1}
      >
        <span className="lb__nav-icon"><NextLargeIcon /></span>
      </button>
    </div>
  );
}
