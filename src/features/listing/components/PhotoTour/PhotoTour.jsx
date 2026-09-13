import { useEffect, useRef } from 'react';
import './PhotoTour.css';
import { BackArrowIcon, ShareIcon, HeartIcon, CloseIcon } from '../../../../components/Icons.jsx';

export default function PhotoTour({ photoTour, title, onClose, onImageClick }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const scrollToRoom = (idx) => {
    const el = document.getElementById(`tour-room-${idx}`);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  // Flatten all images with global index
  let globalIdx = 0;
  const roomsWithIdx = photoTour.map(room => {
    const images = room.images.map(src => ({ src, globalIdx: globalIdx++ }));
    return { ...room, images };
  });

  return (
    <div className="pt" id="_KpcKWX" aria-label="Photo tour" role="dialog" aria-modal="true">
      {/* Top bar */}
      <header className="pt__bar" id="tourBar">
        <button className="pt__bar-btn" type="button" aria-label="Back" id="tourBack" onClick={onClose}>
          <span className="pt__bar-btn-icon"><BackArrowIcon /></span>
        </button>
        <h2 className="pt__bar-title">Photo tour</h2>
        <div className="pt__bar-actions">
          <button className="pt__bar-btn" type="button" aria-label="Share">
            <span className="pt__bar-btn-icon"><ShareIcon /></span>
          </button>
          <button className="pt__bar-btn" type="button" aria-label="Save">
            <span className="pt__bar-btn-icon"><HeartIcon /></span>
          </button>
        </div>
      </header>

      <div className="pt__body" id="tourScroll" ref={scrollRef}>
        {/* Left sidebar nav */}
        <nav className="pt__nav" id="tourNav" aria-label="Photo categories">
          {roomsWithIdx.map((room, i) => (
            <button
              key={i}
              className="pt__nav-btn"
              type="button"
              aria-label={room.room}
              onClick={() => scrollToRoom(i)}
            >
              <img loading="lazy" alt="" src={room.images[0]?.src} className="pt__nav-thumb" />
              <span className="pt__nav-label">{room.room}</span>
            </button>
          ))}
        </nav>

        {/* Main scroll area */}
        <div className="pt__rooms" id="tourRooms">
          {roomsWithIdx.map((room, roomIdx) => {
            const imgs = room.images;
            // Alternate layout: 1+2, 1+2 etc.
            const chunks = [];
            let i = 0;
            let bigFirst = true;
            while (i < imgs.length) {
              if (bigFirst) {
                chunks.push({ type: 'single', img: imgs[i] });
                i++;
              } else {
                chunks.push({ type: 'double', imgs: imgs.slice(i, i + 2) });
                i += 2;
              }
              bigFirst = !bigFirst;
            }

            return (
              <section className="pt__room" id={`tour-room-${roomIdx}`} key={roomIdx}>
                <div className="pt__room-header">
                  <div className="pt__room-name">{room.room}</div>
                  {room.subtitle && <div className="pt__room-sub">{room.subtitle}</div>}
                </div>
                <div className="pt__room-images">
                  {chunks.map((chunk, ci) =>
                    chunk.type === 'single'
                      ? (
                        <div className="pt__img-row pt__img-row--single" key={ci}>
                          <button
                            className="pt__img-btn"
                            type="button"
                            data-idx={chunk.img.globalIdx}
                            onClick={() => onImageClick(chunk.img.globalIdx)}
                            aria-label={`${title} image ${chunk.img.globalIdx + 1}`}
                          >
                            <img loading="lazy" alt={room.room} src={chunk.img.src} />
                          </button>
                        </div>
                      ) : (
                        <div className="pt__img-row pt__img-row--double" key={ci}>
                          {chunk.imgs.map((img, ii) => img && (
                            <button
                              key={ii}
                              className="pt__img-btn"
                              type="button"
                              data-idx={img.globalIdx}
                              onClick={() => onImageClick(img.globalIdx)}
                              aria-label={`${title} image ${img.globalIdx + 1}`}
                            >
                              <img loading="lazy" alt={room.room} src={img.src} />
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
      </div>
    </div>
  );
}
