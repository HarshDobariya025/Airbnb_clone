import './Location.css';

export default function Location({ data }) {
  return (
    <section className="loc" id="location">
      <h2 className="loc__title">Where you'll be</h2>
      <div className="loc__place">{data.label}</div>
      <div className="loc__map-wrap">
        {/* Map area */}
        <div className="loc__map">
          {/* Embedded map via iframe — uses OpenStreetMap to avoid API key requirement */}
          <iframe
            title="Property location map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            style={{ border: 0, borderRadius: 'var(--radius-md)' }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.7570%2C15.5100%2C73.7670%2C15.5200&layer=mapnik&marker=15.5155%2C73.7620"
          />
        </div>
        {/* Search button overlay */}
        <button className="loc__search-btn" aria-label="Search area">
          <svg viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
            <circle cx="14" cy="14" r="9"/><path d="M21 21l7 7"/>
          </svg>
        </button>
        {/* Zoom controls */}
        <div className="loc__zoom">
          <button aria-label="Zoom in" className="loc__zoom-btn">
            <svg viewBox="0 0 32 32" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M16 6v20M6 16h20"/>
            </svg>
          </button>
          <button aria-label="Zoom out" className="loc__zoom-btn">
            <svg viewBox="0 0 32 32" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
              <path d="M6 16h20"/>
            </svg>
          </button>
        </div>
        {/* Home pin indicator */}
        <div className="loc__home-pin">
          <svg viewBox="0 0 32 32" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
            <path d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"/>
          </svg>
        </div>
      </div>
      <div className="loc__disclaimer">Exact location will be provided after booking.</div>
      <div className="loc__highlight-title">Neighbourhood highlights</div>
      <div className="loc__highlight-text">{data.description}</div>
      <button className="loc__show-more">
        Show more{' '}
        <span className="loc__chevron">
          <svg viewBox="0 0 18 18" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"/>
          </svg>
        </span>
      </button>
    </section>
  );
}
