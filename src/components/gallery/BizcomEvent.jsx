import PropTypes from "prop-types";

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

export default BizcomEvent;
