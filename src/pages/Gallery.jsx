import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import { galleryData } from "../data/galleryData";

const imageGridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
const imageClass = "w-full h-auto cursor-pointer";
const linkClass =
  "text-blue-600 mt-2 inline-block text-end hover:text-blue-800 transition-colors duration-300";

const BizcomEvent = ({ year, images, onImageClick, onSeeMoreClick }) => {
  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">BIZCOM {year}</h2>
        <div className={imageGridClass}>
          {images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={imageClass}
              onClick={() => onImageClick(index, images)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button onClick={() => onSeeMoreClick(images)} className={linkClass}>
            See More...
          </button>
        </div>
      </div>
    </div>
  );
};

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

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeeMoreModalOpen, setIsSeeMoreModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [seeMoreImages, setSeeMoreImages] = useState([]);

  const openModal = (index, images) => {
    setCurrentImageIndex(index);
    setModalImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSeeMoreModal = (images) => {
    setSeeMoreImages(images);
    setIsSeeMoreModalOpen(true);
  };

  const closeSeeMoreModal = () => {
    setIsSeeMoreModalOpen(false);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <div className="relative flex items-center justify-between">
              <button
                onClick={showPreviousImage}
                className="text-gray-500 hover:text-gray-700 text-2xl mx-2"
              >
                &larr;
              </button>
              <img
                src={modalImages[currentImageIndex].src}
                alt={modalImages[currentImageIndex].alt}
                className="w-full h-auto mx-auto"
              />
              <button
                onClick={showNextImage}
                className="text-gray-500 hover:text-gray-700 text-2xl mx-2"
              >
                &rarr;
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="font-bold">{modalImages[currentImageIndex].alt}</p>
              <p className="text-sm text-gray-600">
                {modalImages[currentImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
      {isSeeMoreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-6xl w-full mx-4">
            <button
              onClick={closeSeeMoreModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <div className={imageGridClass}>
              {seeMoreImages.slice(0, 9).map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={imageClass}
                  onClick={() => openModal(index, seeMoreImages)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
