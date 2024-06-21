import PropTypes from "prop-types";

const ImageModal = ({ images, currentIndex, onClose, onPrevious, onNext }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
    <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
      >
        &times;
      </button>
      <div className="relative flex items-center justify-between mt-10">
        <button
          onClick={onPrevious}
          className="text-gray-500 hover:text-gray-700 text-2xl mx-2"
        >
          &larr;
        </button>
        <div className="flex flex-1 justify-center items-center mx-2">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-screen"
          />
        </div>
        <button
          onClick={onNext}
          className="text-gray-500 hover:text-gray-700 text-2xl mx-2"
        >
          &rarr;
        </button>
      </div>
      <div className="text-center mt-4">
        <p className="font-bold">{images[currentIndex].alt}</p>
        <p className="text-sm text-gray-600">{images[currentIndex].description}</p>
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

export default ImageModal;
