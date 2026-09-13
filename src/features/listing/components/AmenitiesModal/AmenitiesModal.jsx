import { useEffect, useRef } from 'react';
import './AmenitiesModal.css';
import { CloseIcon } from '../../../../components/Icons.jsx';

/* ── Inline SVG icon map keyed by amenity label ── */
const AmenityIcon = ({ label }) => {
  const s = { display: 'block', width: 24, height: 24, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, overflow: 'visible' };

  const icons = {
    // Bathroom
    'Hairdryer': (
      <svg viewBox="0 0 32 32" style={s}><path d="M8 6c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4h-4l-4 8H8l4-8c-2.21 0-4-1.79-4-4V6z"/><circle cx="22" cy="8" r="1" fill="currentColor" stroke="none"/></svg>
    ),
    'Cleaning products': (
      <svg viewBox="0 0 32 32" style={s}><path d="M12 4h8v6H12zm-2 6h12l2 16H8zm5-6V2m2 2h4"/></svg>
    ),
    'Shampoo': (
      <svg viewBox="0 0 32 32" style={s}><rect x="10" y="6" width="12" height="20" rx="3"/><path d="M13 6V3h6v3"/><path d="M14 12h4m-4 4h4"/></svg>
    ),
    'Hot water': (
      <svg viewBox="0 0 32 32" style={s}><path d="M8 28c0-4 4-6 4-10s-4-6-4-10M16 28c0-4 4-6 4-10s-4-6-4-10M24 28c0-4 4-6 4-10s-4-6-4-10" strokeLinecap="round"/></svg>
    ),
    'Shower gel': (
      <svg viewBox="0 0 32 32" style={s}><rect x="10" y="6" width="12" height="20" rx="3"/><path d="M13 6V3h6v3"/><path d="M14 16c0-1.1.9-2 2-2s2 .9 2 2"/></svg>
    ),
    // Bedroom & laundry
    'Washing machine': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="4" width="24" height="24" rx="2"/><circle cx="16" cy="18" r="6"/><circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none"/><path d="M12 9h6"/></svg>
    ),
    'Hangers': (
      <svg viewBox="0 0 32 32" style={s}><path d="M16 8a3 3 0 1 0-3-3"/><path d="M16 8L4 22h24L16 8z" strokeLinejoin="round"/></svg>
    ),
    'Bed linen': (
      <svg viewBox="0 0 32 32" style={s}><rect x="2" y="16" width="28" height="12" rx="2"/><path d="M2 20h28M6 16v-4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4"/></svg>
    ),
    'Room-darkening blinds': (
      <svg viewBox="0 0 32 32" style={s}><rect x="3" y="3" width="26" height="26" rx="1"/><path d="M3 9h26M3 15h26M3 21h26"/></svg>
    ),
    'Iron': (
      <svg viewBox="0 0 32 32" style={s}><path d="M4 20h18l6-8H10a6 6 0 0 0-6 6v2z"/><path d="M10 20v4"/></svg>
    ),
    'Clothes storage': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="6" width="24" height="20" rx="1"/><path d="M4 13h24M13 6v20m6-20v20"/></svg>
    ),
    'Cot': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="12" width="24" height="12" rx="1"/><path d="M4 18h24M8 12V8m16 4V8M6 24v4m20-4v4"/></svg>
    ),
    // Entertainment
    'TV': (
      <svg viewBox="0 0 32 32" style={s}><rect x="2" y="6" width="28" height="18" rx="2"/><path d="M11 28h10M16 24v4"/></svg>
    ),
    // Heating & cooling
    'Air conditioning': (
      <svg viewBox="0 0 32 32" style={s}><rect x="2" y="8" width="28" height="10" rx="2"/><path d="M8 18v6m4-6v6m4-6v6m4-6v6M8 8V4m4 4V4m4 4V4m4 4V4" strokeLinecap="round"/></svg>
    ),
    'Ceiling fan': (
      <svg viewBox="0 0 32 32" style={s}><circle cx="16" cy="16" r="2"/><path d="M16 14V4a4 4 0 0 1 4-4"/><path d="M18 16h10a4 4 0 0 1 4 4"/><path d="M16 18v10a4 4 0 0 1-4 4"/><path d="M14 16H4a4 4 0 0 1-4-4"/></svg>
    ),
    // Home safety
    'Exterior security cameras on property': (
      <svg viewBox="0 0 32 32" style={s}><path d="M2 12l10-4 14 6-4 2v8H6v-8L2 12z" strokeLinejoin="round"/><circle cx="10" cy="18" r="2"/></svg>
    ),
    'Carbon monoxide alarm': (
      <svg viewBox="0 0 32 32" style={s}><circle cx="16" cy="16" r="12"/><path d="M16 10v6l4 4" strokeLinecap="round"/></svg>
    ),
    'Smoke alarm': (
      <svg viewBox="0 0 32 32" style={s}><circle cx="16" cy="20" r="8"/><path d="M8 20h16M16 12V6M10 8l2 3M22 8l-2 3" strokeLinecap="round"/></svg>
    ),
    // Internet
    'Wifi': (
      <svg viewBox="0 0 32 32" style={s}><path d="M1 9a22 22 0 0 1 30 0M6 15a15 15 0 0 1 20 0M11 21a8 8 0 0 1 10 0" strokeLinecap="round"/><circle cx="16" cy="27" r="2" fill="currentColor" stroke="none"/></svg>
    ),
    'Dedicated workspace': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="8" width="24" height="16" rx="1"/><path d="M2 24h28M12 28h8"/></svg>
    ),
    // Kitchen
    'Kitchen': (
      <svg viewBox="0 0 32 32" style={s}><path d="M6 4v28M6 4c0 6 8 6 8 12S6 22 6 28M22 4v10m0 0a4 4 0 0 1-4 4v10m0 0h8M26 4v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    'Fridge': (
      <svg viewBox="0 0 32 32" style={s}><rect x="8" y="2" width="16" height="28" rx="2"/><path d="M8 14h16M14 7v4M14 19v4"/></svg>
    ),
    'Freezer': (
      <svg viewBox="0 0 32 32" style={s}><rect x="8" y="2" width="16" height="12" rx="1"/><path d="M14 5v6"/></svg>
    ),
    'Microwave': (
      <svg viewBox="0 0 32 32" style={s}><rect x="2" y="8" width="28" height="16" rx="2"/><rect x="6" y="12" width="16" height="8" rx="1"/><circle cx="26" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="26" cy="18" r="1" fill="currentColor" stroke="none"/></svg>
    ),
    'Cooking basics': (
      <svg viewBox="0 0 32 32" style={s}><path d="M8 12a8 8 0 0 1 16 0v2H8v-2z"/><path d="M6 14h20v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2z"/><path d="M11 18l-2 8h14l-2-8"/></svg>
    ),
    'Crockery and cutlery': (
      <svg viewBox="0 0 32 32" style={s}><path d="M10 4v10a4 4 0 0 0 4 4v10M18 4v24M22 4c0 4-4 6-4 10" strokeLinecap="round"/></svg>
    ),
    'Kettle': (
      <svg viewBox="0 0 32 32" style={s}><path d="M8 10h16l-2 14H10L8 10z"/><path d="M8 10a4 4 0 0 1 0-6"/><path d="M6 24h20"/><path d="M20 10l4-4" strokeLinecap="round"/></svg>
    ),
    'Coffee': (
      <svg viewBox="0 0 32 32" style={s}><path d="M6 14h14v8a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6v-8z"/><path d="M20 16h2a4 4 0 0 1 0 8h-2"/><path d="M10 10V6m4 4V6m4 4V6" strokeLinecap="round"/></svg>
    ),
    'Wine glasses': (
      <svg viewBox="0 0 32 32" style={s}><path d="M10 4h12l-2 10a4 4 0 0 1-8 0L10 4z"/><path d="M16 18v10M11 28h10"/></svg>
    ),
    'Toaster': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="12" width="24" height="14" rx="2"/><path d="M11 12V6m10 6V6M8 26v2m16-2v2"/></svg>
    ),
    'Blender': (
      <svg viewBox="0 0 32 32" style={s}><path d="M10 4h12l2 16H8L10 4z"/><path d="M8 20h16l-2 8H10L8 20z"/><path d="M22 4l2 2"/></svg>
    ),
    'Cooker': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="8" width="24" height="20" rx="2"/><path d="M4 14h24"/><circle cx="10" cy="11" r="2"/><circle cx="22" cy="11" r="2"/><rect x="12" y="18" width="8" height="6" rx="1"/></svg>
    ),
    // Location
    'Private entrance': (
      <svg viewBox="0 0 32 32" style={s}><rect x="6" y="4" width="20" height="24" rx="1"/><circle cx="20" cy="16" r="2" fill="currentColor" stroke="none"/><path d="M14 4v24"/></svg>
    ),
    // Outdoor
    'Patio or balcony': (
      <svg viewBox="0 0 32 32" style={s}><path d="M4 20h24v6H4z"/><path d="M4 20V10l12-6 12 10v10"/><path d="M12 26v-6h8v6"/></svg>
    ),
    'Outdoor dining area': (
      <svg viewBox="0 0 32 32" style={s}><path d="M4 14h24M8 14l-2 12m20-12-2 12M16 14V6"/><ellipse cx="16" cy="14" rx="12" ry="3"/></svg>
    ),
    // Parking
    'Free parking on premises': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="4" width="24" height="24" rx="2"/><path d="M12 8h7a5 5 0 0 1 0 10h-7V8zm0 10v6" strokeLinecap="round"/></svg>
    ),
    'Pool': (
      <svg viewBox="0 0 32 32" style={s}><path d="M2 22c2 0 4-2 6-2s4 2 6 2 4-2 6-2 4 2 6 2M2 27c2 0 4-2 6-2s4 2 6 2 4-2 6-2 4 2 6 2" strokeLinecap="round"/><path d="M16 4v14M12 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    'Hot tub': (
      <svg viewBox="0 0 32 32" style={s}><path d="M4 22h24v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z"/><path d="M4 22c0-4 4-6 4-10M12 22c0-4 4-6 4-10M20 22c0-4 4-6 4-10" strokeLinecap="round"/></svg>
    ),
    'Gym': (
      <svg viewBox="0 0 32 32" style={s}><path d="M4 16h24M8 10v12M24 10v12M2 13v6M30 13v6" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    // Services
    'Pets allowed': (
      <svg viewBox="0 0 32 32" style={s}><circle cx="9" cy="8" r="3"/><circle cx="23" cy="8" r="3"/><circle cx="5" cy="17" r="3"/><circle cx="27" cy="17" r="3"/><path d="M16 14c-4 0-9 4-7 10 1 3 4 4 7 4s6-1 7-4c2-6-3-10-7-10z"/></svg>
    ),
    'Cleaning available during stay': (
      <svg viewBox="0 0 32 32" style={s}><path d="M14 4l-8 16h6v8l10-16h-6l4-8h-6z" strokeLinejoin="round"/></svg>
    ),
    'Long-term stays allowed': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="6" width="24" height="22" rx="2"/><path d="M4 12h24M10 4v4m12-4v4M10 18h4m2 0h6M10 23h3m3 0h7"/></svg>
    ),
    'Self check-in': (
      <svg viewBox="0 0 32 32" style={s}><rect x="4" y="4" width="20" height="24" rx="1"/><circle cx="18" cy="16" r="2" fill="currentColor" stroke="none"/><path d="M24 10l6 6-6 6"/><path d="M24 16H14"/></svg>
    ),
  };

  const icon = icons[label.replace('*', '')];
  if (!icon) {
    return (
      <svg viewBox="0 0 32 32" style={s}><circle cx="16" cy="16" r="10"/></svg>
    );
  }
  return icon;
};

export default function AmenitiesModal({ allAmenities, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    modalRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="am-overlay" aria-hidden="false" onClick={e => e.target === e.currentTarget && onClose()}>
      <div
        className="am-modal"
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        ref={modalRef}
        tabIndex={-1}
      >
        <div className="am-modal__header">
          <button
            className="am-modal__close"
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <span className="am-modal__close-icon"><CloseIcon /></span>
          </button>
        </div>

        <div className="am-modal__body" id="amenBody">
          <h2 className="am-modal__title">What this place offers</h2>
          {Object.entries(allAmenities).map(([category, items]) => (
            <div className="am-modal__group" key={category}>
              <h3 className="am-modal__group-title">{category}</h3>
              <div className="am-modal__items">
                {items.map((item, i) => {
                  const isCrossed = item.endsWith('*');
                  const label = item.replace('*', '');
                  return (
                    <div key={i}>
                      <div className={`am-modal__item ${isCrossed ? 'am-modal__item--crossed' : ''}`}>
                        <span className="am-modal__item-icon">
                          <AmenityIcon label={label} />
                        </span>
                        <span className="am-modal__item-label">{label}</span>
                      </div>
                      {i < items.length - 1 && <div className="am-modal__item-divider" />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
