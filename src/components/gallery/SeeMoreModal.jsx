import PropTypes from "prop-types";

const SeeMoreModal = ({ images, onClose, onImageClick }) => (
  <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75 overflow-hidden">
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
            className="w-full z-40 h-auto cursor-zoom-in"
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

export default SeeMoreModal;
