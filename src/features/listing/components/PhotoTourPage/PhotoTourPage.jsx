import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhotoTourPage.css';
import listing from '../../../../data/listing.json';
import { ShareIcon, HeartIcon } from '../../../../components/Icons.jsx';

// ─── Lightbox (inline, scoped for the page) ─────────────────────────────────

function Lightbox({ images, currentIndex, onClose, onNavigate, roomLabel }) {
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

  return (
    <div className="ptp-lb" role="dialog" aria-modal="true" aria-label="Photo viewer">
      {/* Header */}
      <header className="ptp-lb__header">
        <button
          className="ptp-lb__header-btn"
          type="button"
          aria-label="Show grid"
          id="ptpLbGrid"
          onClick={onClose}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" fill="currentColor">
            <path d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
          </svg>
        </button>
        <div className="ptp-lb__title">{roomLabel}</div>
        <div className="ptp-lb__counter" id="ptpLbCounter">
          {currentIndex + 1} of {total}
        </div>
        <button
          className="ptp-lb__header-btn ptp-lb__close"
          type="button"
          aria-label="Close"
          id="ptpLbClose"
          onClick={onClose}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M6 6 L26 26 M6 26 L26 6"/>
          </svg>
        </button>
      </header>

      {/* Prev button */}
      <button
        className="ptp-lb__nav ptp-lb__nav--prev"
        type="button"
        aria-label="Previous"
        id="ptpLbPrev"
        onClick={goPrev}
        disabled={currentIndex === 0}
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M20 4L8 16l12 12"/>
        </svg>
      </button>

      {/* Image stage */}
      <div className="ptp-lb__stage" id="ptpLbStage">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="ptp-lb__img"
        />
      </div>

      {/* Next button */}
      <button
        className="ptp-lb__nav ptp-lb__nav--next"
        type="button"
        aria-label="Next"
        id="ptpLbNext"
        onClick={goNext}
        disabled={currentIndex === total - 1}
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M12 4l12 12-12 12"/>
        </svg>
      </button>
    </div>
  );
}

// ─── Main PhotoTourPage ───────────────────────────────────────────────────────

export default function PhotoTourPage() {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxRoom, setLightboxRoom] = useState('');

  const photoTour = listing.photoTour;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = '';
  }, []);

  // Smooth scroll to section when category thumbnail clicked
  const scrollToSection = (idx) => {
    const el = sectionRefs.current[idx];
    if (el) {
      const yOffset = -90; // account for sticky bars
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Open lightbox with the images of this room
  const openLightbox = (roomImages, imgIdx, roomName) => {
    setLightboxImages(roomImages);
    setLightboxIndex(imgIdx);
    setLightboxRoom(roomName);
    setLightboxOpen(true);
  };

  return (
    <div className="ptp" id="photoTourPage">
      {/* ── Sticky top bar ── */}
      <header className="ptp__bar" id="ptpBar">
        <button
          className="ptp__bar-btn"
          type="button"
          aria-label="Back"
          id="ptpBack"
          onClick={() => navigate(-1)}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 4L8 16l12 12"/>
          </svg>
        </button>
        <h1 className="ptp__bar-title">Photo tour</h1>
        <div className="ptp__bar-actions">
          <button className="ptp__bar-btn" type="button" aria-label="Share" id="ptpShare">
            <span style={{ display: 'flex', width: 16, height: 16, color: '#717171' }}>
              <ShareIcon />
            </span>
          </button>
          <button className="ptp__bar-btn" type="button" aria-label="Save" id="ptpSave">
            <span style={{ display: 'flex', width: 16, height: 16, color: '#717171' }}>
              <HeartIcon />
            </span>
          </button>
        </div>
      </header>

      {/* ── Category thumbnail nav (horizontal scroll row) ── */}
      <nav className="ptp__categories" id="ptpCategories" aria-label="Photo categories">
        {photoTour.map((room, i) => (
          <button
            key={i}
            className="ptp__cat-btn"
            type="button"
            aria-label={room.room}
            onClick={() => scrollToSection(i)}
            id={`ptpCat${i}`}
          >
            <div className="ptp__cat-thumb-wrap">
              <img
                loading="lazy"
                alt=""
                src={room.images[0]}
                className="ptp__cat-thumb"
              />
            </div>
            <span className="ptp__cat-label">{room.room}</span>
          </button>
        ))}
      </nav>

      {/* ── Room sections ── */}
      <div className="ptp__sections" id="ptpSections">
        {photoTour.map((room, roomIdx) => {
          const imgs = room.images;

          // Build photo grid: alternating single/double rows
          const chunks = [];
          let i = 0;
          let isFull = true;
          while (i < imgs.length) {
            if (isFull) {
              chunks.push({ type: 'single', imgs: [imgs[i]], startIdx: i });
              i++;
            } else {
              const pair = imgs.slice(i, i + 2);
              chunks.push({ type: 'double', imgs: pair, startIdx: i });
              i += 2;
            }
            isFull = !isFull;
          }

          return (
            <section
              key={roomIdx}
              className="ptp__section"
              id={`ptpSection${roomIdx}`}
              ref={(el) => { sectionRefs.current[roomIdx] = el; }}
            >
              {/* Left: room info */}
              <div className="ptp__section-info">
                <h2 className="ptp__section-name">{room.room}</h2>
                {room.subtitle && (
                  <p className="ptp__section-sub">{room.subtitle}</p>
                )}
              </div>

              {/* Right: photo grid */}
              <div className="ptp__section-photos">
                {chunks.map((chunk, ci) =>
                  chunk.type === 'single' ? (
                    <div className="ptp__img-row ptp__img-row--single" key={ci}>
                      <button
                        className="ptp__img-btn"
                        type="button"
                        onClick={() => openLightbox(imgs, chunk.startIdx, room.room)}
                        aria-label={`${room.room} photo ${chunk.startIdx + 1}`}
                      >
                        <img loading="lazy" alt={room.room} src={chunk.imgs[0]} />
                      </button>
                    </div>
                  ) : (
                    <div className="ptp__img-row ptp__img-row--double" key={ci}>
                      {chunk.imgs.map((src, ii) => src && (
                        <button
                          key={ii}
                          className="ptp__img-btn"
                          type="button"
                          onClick={() => openLightbox(imgs, chunk.startIdx + ii, room.room)}
                          aria-label={`${room.room} photo ${chunk.startIdx + ii + 1}`}
                        >
                          <img loading="lazy" alt={room.room} src={src} />
                        </button>
                      ))}
                    </div>
                  )
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
          roomLabel={lightboxRoom}
        />
      )}
    </div>
  );
}
