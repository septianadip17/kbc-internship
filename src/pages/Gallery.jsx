import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import { galleryData } from "../data/galleryData";

const BizcomEvent = ({ year, images, onImageClick, onSeeMoreClick }) => (
  <div className="p-4">
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">BIZCOM {year}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto cursor-zoom-in"
            onClick={() => onImageClick(index, images)}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onSeeMoreClick(images)}
          className="text-blue-600 mt-2 inline-block text-end hover:text-blue-800 transition-colors duration-300"
        >
          See More...
        </button>
      </div>
    </div>
  </div>
);

BizcomEvent.propTypes = {
  year: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
  onSeeMoreClick: PropTypes.func.isRequired,
};

const ImageModal = ({ images, currentIndex, onClose, onPrevious, onNext }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
    <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
      >
        &times;
      </button>
      <div className="relative flex items-center justify-between">
        <button
          onClick={onPrevious}
          className="text-gray-500 hover:text-gray-700 text-2xl mx-2"
        >
          &larr;
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto mx-auto"
        />
        <button
          onClick={onNext}
          className="text-gray-500 hover:text-gray-700 text-2xl mx-2"
        >
          &rarr;
        </button>
      </div>
      <div className="text-center mt-4">
        <p className="font-bold">{images[currentIndex].alt}</p>
        <p className="text-sm text-gray-600">
          {images[currentIndex].description}
        </p>
      </div>
    </div>
  </div>
);

ImageModal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

const SeeMoreModal = ({ images, onClose, onImageClick }) => (
  <div className="fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-75 overflow-hidden">
    <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-6xl w-full mx-4 overflow-auto max-h-screen">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
      >
        &times;
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto cursor-zoom-in"
            onClick={() => onImageClick(index, images)}
          />
        ))}
      </div>
    </div>
  </div>
);

SeeMoreModal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeeMoreModalOpen, setIsSeeMoreModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [seeMoreImages, setSeeMoreImages] = useState([]);

  const openModal = useCallback((index, images) => {
    setCurrentImageIndex(index);
    setModalImages(images);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const openSeeMoreModal = useCallback((images) => {
    setSeeMoreImages(images);
    setIsSeeMoreModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeSeeMoreModal = useCallback(() => {
    setIsSeeMoreModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const closeModals = useCallback(() => {
    closeModal();
    closeSeeMoreModal();
  }, [closeModal, closeSeeMoreModal]);

  const showPreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  }, [modalImages.length]);

  const showNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [modalImages.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModals();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModals]);

  return (
    <div>
      <Navbar />
      <CustomHeader title="GALLERY" />
      <div className="container mx-auto">
        {galleryData.map((event) => (
          <BizcomEvent
            key={event.year}
            year={event.year}
            images={event.images}
            onImageClick={openModal}
            onSeeMoreClick={openSeeMoreModal}
          />
        ))}
      </div>
      <Footer />
      {isModalOpen && (
        <ImageModal
          images={modalImages}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onPrevious={showPreviousImage}
          onNext={showNextImage}
        />
      )}
      {isSeeMoreModalOpen && (
        <SeeMoreModal
          images={seeMoreImages}
          onClose={closeSeeMoreModal}
          onImageClick={openModal}
        />
      )}
    </div>
  );
};

export default Gallery;
