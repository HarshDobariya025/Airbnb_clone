import './HeroGrid.css';
import { GridIcon } from '../../../../components/Icons.jsx';
import { useNavigate } from 'react-router-dom';

export default function HeroGrid({ images, title, onImageClick, onShowAll }) {
  const navigate = useNavigate();

  const handleShowAll = () => {
    navigate('/photo-tour');
  };

  return (
    <section className="hero-section" id="photos" aria-label="Photos of this place">
      <div className="hero-grid" id="heroGrid">
        {images.map((src, i) => (
          <button
            key={i}
            className={`hero-grid__cell hero-grid__cell--${i}`}
            type="button"
            aria-label={`${title} image ${i + 1}`}
            onClick={() => onImageClick(i)}
          >
            <img
              src={src}
              alt=""
              decoding="async"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
        <button className="hero-grid__show-all" type="button" id="showAllPhotos" onClick={handleShowAll}>
          <span className="hero-grid__show-all-icon">
            <GridIcon />
          </span>
          Show all photos
        </button>
      </div>
    </section>
  );
}
