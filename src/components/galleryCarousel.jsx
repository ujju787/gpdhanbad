import React, { useEffect, useState } from "react";
import "./galleryCarousel.css";
import { Images } from './GalleryImages';
import { Link } from "react-router-dom";

function ImageSwitcher() {
  const gallery = Images.GalleryData;

  const [startIndex, setStartIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(getVisibleCount());
  const [fade, setFade] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // For zoom
  const [showModal, setShowModal] = useState(false); // Modal visibility

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 992) return 2;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      setImagesToShow(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % gallery.length);
      setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      setFade(false);
    }, 300);
  };

  const getCurrentImages = () =>
    Array.from({ length: imagesToShow }, (_, i) => {
      const index = (startIndex + i) % gallery.length;
      return gallery[index];
    });

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <> 
      <div className="gallery-heading">
        <h2 className="text-center">Campus Glimpses</h2>
      </div>

      <div className="container gallery-container">
        <div className="d-flex justify-content-center me-3">
          <button onClick={handlePrev} className="btn btn-outline-primary mx-2">❮</button>
        </div>

        <div className="row justify-content-center mb-3">
          {getCurrentImages().map((image, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
              <div
                className={`image-box p-2 ${fade ? "fade-out" : "fade-in"}`}
                onClick={() => openModal(image)} // Click to zoom
                style={{ cursor: "pointer" }}
              >
                <img
                  src={image.imageUrl}
                  alt={`Image ${image.id}`}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center ms-3">
          <button onClick={handleNext} className="btn btn-outline-primary mx-2">❯</button>
        </div>
      </div>

      <div className="btn-container">
        <Link to="/JumpToGallery">
          <button className="btn text-center see-more-btn">See more</button>
        </Link>
      </div>

      {/* Modal for Zoomed Image */}
      {showModal && selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>×</span>
            <img src={selectedImage.imageUrl} alt="Zoomed" />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSwitcher;
