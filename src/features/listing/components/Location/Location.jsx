import './Location.css';

export default function Location({ data }) {
  return (
    <section className="loc" id="location">
      <h2 className="loc__title">Where you'll be</h2>
      <div className="loc__place">{data.label}</div>

      {/* Static mock map — no live API needed */}
      <div className="loc__map-wrap">
        {/* SVG map background: water left, land right */}
        <svg
          className="loc__map-bg"
          viewBox="0 0 860 380"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Land background */}
          <rect width="860" height="380" fill="#e8f0e4" />
          {/* Water area (left) */}
          <path d="M0 0 L320 0 L260 140 L310 200 L260 280 L300 380 L0 380 Z" fill="#b8d4e8" />
          {/* Subtle grid lines */}
          {[1,2,3,4,5,6,7,8].map(i => (
            <line key={`v${i}`} x1={i*110} y1="0" x2={i*110} y2="380" stroke="#d8e8d4" strokeWidth="1" />
          ))}
          {[1,2,3].map(i => (
            <line key={`h${i}`} x1="0" y1={i*95} x2="860" y2={i*95} stroke="#d8e8d4" strokeWidth="1" />
          ))}
          {/* Faint circle overlays (radius indicators) */}
          <circle cx="490" cy="195" r="70" fill="#c8dfc4" fillOpacity="0.5" />
          <circle cx="600" cy="240" r="90" fill="#c8dfc4" fillOpacity="0.35" />
        </svg>

        {/* House marker pin — center */}
        <div className="loc__pin">
          <svg viewBox="0 0 32 32" fill="white" aria-hidden="true">
            <path d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Search icon — top left */}
        <button className="loc__search-btn" aria-label="Search area">
          <svg viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
            <circle cx="14" cy="14" r="9"/><path d="M21 21l7 7"/>
          </svg>
        </button>

        {/* Zoom controls — top right */}
        <div className="loc__zoom">
          <button aria-label="Zoom in" className="loc__zoom-btn">
            <svg viewBox="0 0 32 32" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
              <path d="M16 6v20M6 16h20"/>
            </svg>
          </button>
          <button aria-label="Zoom out" className="loc__zoom-btn">
            <svg viewBox="0 0 32 32" style={{ display: 'block', height: '100%', width: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5 }}>
              <path d="M6 16h20"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="loc__disclaimer">
        Exact location will be provided after booking.
      </div>
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
