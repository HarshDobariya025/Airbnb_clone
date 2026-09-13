import './App.css';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import listing from './data/listing.json';

import Header from './components/Header/Header.jsx';
import StickyNav from './components/StickyNav/StickyNav.jsx';
import HeroGrid from './features/listing/components/HeroGrid/HeroGrid.jsx';
import PropertyDetails from './features/listing/components/PropertyDetails/PropertyDetails.jsx';
import BookingWidget from './features/booking/components/BookingWidget/BookingWidget.jsx';
import Reviews from './features/reviews/components/Reviews/Reviews.jsx';
import Location from './features/listing/components/Location/Location.jsx';
import HostProfile from './features/host/components/HostProfile/HostProfile.jsx';
import ThingsToKnow from './features/listing/components/ThingsToKnow/ThingsToKnow.jsx';
import SimilarListings from './features/explore/components/SimilarListings/SimilarListings.jsx';
import PhotoTour from './features/listing/components/PhotoTour/PhotoTour.jsx';
import Lightbox from './features/listing/components/Lightbox/Lightbox.jsx';
import AmenitiesModal from './features/listing/components/AmenitiesModal/AmenitiesModal.jsx';
import TitleRow from './features/listing/components/TitleRow/TitleRow.jsx';

// Flatten all photo tour images into a single array for the lightbox
function flattenImages(photoTour) {
  return photoTour.flatMap(room => room.images);
}

export default function App() {
  const navigate = useNavigate();
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const allImages = useMemo(() => flattenImages(listing.photoTour), []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openPhotoTourAndLightbox = (index) => {
    setPhotoTourOpen(true);
    openLightbox(index);
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <Header />
      <StickyNav
        rating={listing.rating}
        reviewCount={listing.reviewCount}
        price={listing.price}
        pricePeriod={listing.pricePeriod}
        onReserve={() => {}}
      />

      <main id="main">
        <div className="page-content">
          {/* Title above hero */}
          <TitleRow title={listing.title} />

          {/* Hero Grid */}
          <HeroGrid
            images={listing.heroImages}
            title={listing.title}
            onImageClick={(i) => openPhotoTourAndLightbox(i)}
            onShowAll={() => setPhotoTourOpen(true)}
          />

          {/* Main two-column layout */}
          <div className="listing-layout">
            <PropertyDetails
              data={listing}
              onShowAmenities={() => setAmenitiesOpen(true)}
              onImageClick={(i) => openPhotoTourAndLightbox(i)}
            />
            <BookingWidget
              data={listing}
              onReserve={() => {}}
            />
          </div>

          {/* Wide sections */}
          <div className="wide-sections">
            <Reviews data={listing} />
            <Location data={listing.location} />
            <HostProfile data={listing} />
            <ThingsToKnow />
            <SimilarListings listings={listing.similarListings} />
          </div>
        </div>
      </main>

      {/* Overlays */}
      {photoTourOpen && (
        <PhotoTour
          photoTour={listing.photoTour}
          title={listing.title}
          onClose={() => setPhotoTourOpen(false)}
          onImageClick={(i) => openLightbox(i)}
        />
      )}

      {lightboxOpen && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
          onPhotoTour={() => navigate('/photo-tour')}
        />
      )}

      {amenitiesOpen && (
        <AmenitiesModal
          allAmenities={listing.allAmenities}
          onClose={() => setAmenitiesOpen(false)}
        />
      )}
    </>
  );
}
