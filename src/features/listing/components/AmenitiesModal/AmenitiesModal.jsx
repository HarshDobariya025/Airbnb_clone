import { useEffect, useRef } from 'react';
import './AmenitiesModal.css';
import { CloseIcon } from '../../../../components/Icons.jsx';

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
                {items.map((item, i) => (
                  <div
                    className={`am-modal__item ${item.endsWith('*') ? 'am-modal__item--crossed' : ''}`}
                    key={i}
                  >
                    <span className="am-modal__item-dot" />
                    {item.replace('*', '')}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
