import './HostProfile.css';
import { VerifiedIcon, ShieldIcon } from '../../../../components/Icons.jsx';

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"/>
  </svg>
);
const SchoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
    <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z"/>
  </svg>
);

export default function HostProfile({ data }) {
  const { host, coHosts } = data;

  return (
    <section className="hp" aria-label="Meet your host">
      <h2 className="hp__section-title">Meet your host</h2>

      <div className="hp__layout">
        <div className="hp__main-card">
          {/* Host info */}
          <div className="hp__host-info">
            <div className="hp__avatar-wrap">
              <img className="hp__avatar" src={host.avatar} alt={host.name} />
              <span className="hp__verified-badge"><VerifiedIcon /></span>
            </div>
            <div className="hp__name">{host.name}</div>
            <div className="hp__role">Host</div>
          </div>
          {/* Stats */}
          <div className="hp__stats">
            <div className="hp__stat">
              <div className="hp__stat-val">{host.reviews.toLocaleString()}</div>
              <div className="hp__stat-label">Reviews</div>
            </div>
            <div className="hp__stat">
              <div className="hp__stat-val">{host.rating}★</div>
              <div className="hp__stat-label">Rating</div>
            </div>
            <div className="hp__stat">
              <div className="hp__stat-val">{host.years}</div>
              <div className="hp__stat-label">Years hosting</div>
            </div>
          </div>
        </div>

        <div className="hp__right">
          {/* Host details */}
          <div className="hp__details">
            <div className="hp__detail">
              <span className="hp__detail-icon"><PinIcon /></span>
              {host.bornIn}
            </div>
            <div className="hp__detail">
              <span className="hp__detail-icon"><SchoolIcon /></span>
              {host.school}
            </div>
          </div>

          {/* Co-hosts */}
          <div className="hp__cohost-title">Co-Hosts</div>
          <div className="hp__cohosts">
            {coHosts.map((c, i) => (
              <div className="hp__cohost" key={i}>
                {c.avatar
                  ? <img className="hp__cohost-avatar" src={c.avatar} alt={c.name} />
                  : <div className="hp__cohost-avatar hp__cohost-initial" style={{ background: c.bg, color: c.color }}>{c.initials}</div>
                }
                <span className="hp__cohost-name">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="hp__response-title">Host details</div>
          <div className="hp__response-text">
            Response rate: {host.responseRate}<br />
            Responds {host.responseTime}
          </div>

          <button className="hp__message-btn">Message host</button>

          <div className="hp__safety">
            <span className="hp__safety-icon"><ShieldIcon /></span>
            <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
