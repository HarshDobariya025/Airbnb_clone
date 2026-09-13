import { useState } from 'react';
import './BookingWidget.css';
import { ChevronDownIcon, FlagIcon } from '../../../../components/Icons.jsx';

export default function BookingWidget({ data, onReserve }) {
  const [saved, setSaved] = useState(false);

  return (
    <aside className="bw" id="bookingSticky">
      {/* Discount banner */}
      <div className="bw__discount">
        <img className="bw__discount-icon" src="/assets/images/ui/discount.svg" alt="" aria-hidden="true" />
        <div className="bw__discount-text">
          Get 10% off your next stay.<br />
          <a href="#">Terms apply</a>
        </div>
        <button className="bw__discount-claim" type="button">Claim</button>
      </div>

      {/* Booking card */}
      <div className="bw__card">
        {/* Price */}
        <div className="bw__price-row">
          <span className="bw__price">{data.price}</span>
          <span className="bw__period">{data.pricePeriod}</span>
        </div>

        {/* Dates + Guests */}
        <div className="bw__form">
          <div className="bw__date-row">
            <div className="bw__date-cell">
              <div className="bw__field-label">CHECK-IN</div>
              <div className="bw__field-value">{data.checkIn}</div>
            </div>
            <div className="bw__date-cell bw__date-cell--right">
              <div className="bw__field-label">CHECKOUT</div>
              <div className="bw__field-value">{data.checkOut}</div>
            </div>
          </div>
          <div className="bw__guest-row">
            <div>
              <div className="bw__field-label">GUESTS</div>
              <div className="bw__field-value">{data.guests_count}</div>
            </div>
            <span className="bw__chevron"><ChevronDownIcon /></span>
          </div>
        </div>

        {/* Free cancellation */}
        <div className="bw__cancellation">
          Free cancellation before <b>{data.cancellationDate}</b>
        </div>

        {/* Reserve button */}
        <button
          className="bw__reserve-btn"
          type="button"
          id="reserveBtn"
          onClick={onReserve}
        >
          Reserve
        </button>

        <div className="bw__no-charge">You won't be charged yet</div>
      </div>

      {/* Report listing */}
      <div className="bw__report">
        <span className="bw__report-icon"><FlagIcon /></span>
        <a href="#">Report this listing</a>
      </div>
    </aside>
  );
}
