import './Location.css';

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function Location({ data }) {
  return (
    <section className="loc" id="location">
      <h2 className="loc__title">Where you'll be</h2>

      <div className="loc__place">
        {data.label}
      </div>

      {/* Static mock map — no live API needed */}
      <div className="loc__map-wrap">

        {/* Map background */}
        <svg
          className="loc__map-bg"
          viewBox="0 0 860 380"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Land */}
          <rect
            x="0"
            y="0"
            width="860"
            height="380"
            fill="#e8f0e4"
          />

          {/* Subtle map grid */}
          <defs>
            <pattern
              id="mapGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#d8e2d5"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>

          <rect
            x="0"
            y="0"
            width="860"
            height="380"
            fill="url(#mapGrid)"
            opacity="0.65"
          />

          {/* Water */}
          <path
            d="
              M0 0
              L332 0
              L282 140
              L320 200
              L282 280
              L305 380
              L0 380
              Z
            "
            fill="#a9cee7"
          />

          {/* Area indicator circles */}
          <circle
            cx="438"
            cy="156"
            r="38"
            fill="#c8dfc4"
            fillOpacity="0.72"
          />

          <circle
            cx="610"
            cy="232"
            r="52"
            fill="#c8dfc4"
            fillOpacity="0.62"
          />
        </svg>

        {/* House marker */}
        <div className="loc__pin">
          <HomeOutlinedIcon className="loc__pin-icon" />
        </div>

        {/* Search button */}
        <button
          className="loc__search-btn"
          aria-label="Search area"
          type="button"
        >
          <SearchIcon />
        </button>

        {/* Zoom controls */}
        <div className="loc__zoom">

          <button
            aria-label="Zoom in"
            className="loc__zoom-btn"
            type="button"
          >
            <AddIcon />
          </button>

          <button
            aria-label="Zoom out"
            className="loc__zoom-btn"
            type="button"
          >
            <RemoveIcon />
          </button>

        </div>
      </div>

      {/* Location disclaimer */}
      <div className="loc__disclaimer">
        Exact location will be provided after booking.
      </div>

      {/* Neighbourhood highlights */}
      <div className="loc__highlight-title">
        Neighbourhood highlights
      </div>

      <div className="loc__highlight-text">
        {data.description}
      </div>

      <button
        className="loc__show-more"
        type="button"
      >
        <span>Show more</span>

        <span className="loc__chevron">
          <svg
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <path
              d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </section>
  );
}