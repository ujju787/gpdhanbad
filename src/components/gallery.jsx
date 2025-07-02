import React, { useState } from 'react';
import { Images } from './GalleryImages';
import './gallery.css';

export default function Gallery() {
  const gallery = Images.GalleryData;

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (img) => {
    setSelectedImage(typeof img === 'string' ? img : img.imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <>
    <div className="gallery-content">
      <h2>GALLERY</h2>
<p>
  Welcome to the vibrant visual journey of Government Polytechnic Dhanbad, where tradition blends seamlessly with innovation. Our campus is a thriving community where students from diverse backgrounds come together to learn, grow, and excel in their chosen fields.
  <br /><br />
  This gallery captures the heart and soul of our college life — from the excitement of freshers' welcome events and the intense focus during lab sessions to the colorful celebrations of cultural festivals and spirited sports competitions. Each image reflects the dedication, teamwork, and passion that drive our students to achieve their best.
  <br /><br />
  At Government Polytechnic Dhanbad, we believe in nurturing not only academic excellence but also the holistic development of our students. This includes fostering talents in technical workshops, sports arenas, cultural activities, and social service initiatives, all of which contribute to shaping well-rounded individuals ready to face the challenges of tomorrow.
  <br /><br />
  For parents and visitors, this collection offers a glimpse into the safe, supportive, and inclusive environment we provide, ensuring that every student feels valued and inspired. For our alumni, these moments bring back fond memories of friendship, learning, and growth. And for future students, this gallery offers a preview of the exciting, rewarding journey that awaits you at Government Polytechnic Dhanbad.
  <br /><br />
  We invite you to explore these snapshots of life on our campus and witness the spirit of enthusiasm, resilience, and unity that define our institution — a place where dreams take shape and lifelong bonds are formed.
</p>

    </div>
    {/* //gallery heading is getting css from galleryCarousel.css */}
      <div className="gallery-heading ">
        <h2 className="text-center">Campus Glimpses</h2>
      </div>
      <div className="individual-gallery-container row mb-5">
        {gallery.map((img, index) => (
          <div key={index} className=" col-lg-3 col-sm-6 mt-4 gallery-item" onClick={() => openModal(img)} style={{ cursor: "pointer" }}>
            <img
              src={typeof img === 'string' ? img : img.imageUrl}
              alt={img.alt || `Gallery Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {showModal && selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>×</span>
            <img src={selectedImage} alt="Zoomed" />
          </div>
        </div>
      )}
    </>
  );
}
