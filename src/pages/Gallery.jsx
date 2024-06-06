import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const imageGridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
const imageClass = "w-full h-auto";
const linkClass =
  "text-blue-600 mt-2 inline-block text-end hover:text-blue-800 transition-colors duration-300";

const BizcomEvent = ({ year, images }) => {
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
};

const Gallery = () => {
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
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
