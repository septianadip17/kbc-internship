import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const imageGridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
const imageClass = "w-full h-auto cursor-pointer";
const linkClass =
  "text-blue-600 mt-2 inline-block text-end hover:text-blue-800 transition-colors duration-300";

const BizcomEvent = ({ year, images, onImageClick }) => {
  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">BIZCOM {year}</h2>
        <div className={imageGridClass}>
          {images.map((image, index) => (
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
          <a href="#" className={linkClass}>
            See More...
          </a>
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
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  const events = [
    {
      year: 2022,
      images: [
        {
          src: "https://source.unsplash.com/300x200/?nature",
          alt: "Image 1",
        },
        {
          src: "https://source.unsplash.com/300x200/?landscape",
          alt: "Image 2",
        },
        {
          src: "https://source.unsplash.com/300x200/?water",
          alt: "Image 3",
        },
      ],
    },
    {
      year: 2023,
      images: [
        {
          src: "https://source.unsplash.com/300x200/?mountain",
          alt: "Image 1",
        },
        {
          src: "https://source.unsplash.com/300x200/?forest",
          alt: "Image 2",
        },
        {
          src: "https://source.unsplash.com/300x200/?sunset",
          alt: "Image 3",
        },
      ],
    },
    {
      year: 2024,
      images: [
        {
          src: "https://source.unsplash.com/300x200/?beach",
          alt: "Image 1",
        },
        {
          src: "https://source.unsplash.com/300x200/?city",
          alt: "Image 2",
        },
        {
          src: "https://source.unsplash.com/300x200/?night",
          alt: "Image 3",
        },
      ],
    },
  ];

  const openModal = (index, images) => {
    setCurrentImageIndex(index);
    setModalImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        {events.map((event) => (
          <BizcomEvent
            key={event.year}
            year={event.year}
            images={event.images}
            onImageClick={openModal}
          />
        ))}
      </div>
      <Footer />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="relative flex items-center">
              <button
                onClick={showPreviousImage}
                className="absolute left-0 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <img
                src={modalImages[currentImageIndex].src}
                alt={modalImages[currentImageIndex].alt}
                className="w-full h-auto mx-auto"
              />
              <button
                onClick={showNextImage}
                className="absolute right-0 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-center mt-4">
              <p>{modalImages[currentImageIndex].alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
