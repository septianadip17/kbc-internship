import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const imageGridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
const imageClass = "w-full h-auto";
const linkClass = "text-blue-600 mt-2 inline-block text-end";

const BizcomEvent = ({ year, images }) => {
  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">BIZCOM {year}</h2>
        <div className={imageGridClass}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Bizcom ${year} Image ${index + 1}`}
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
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Gallery = () => {
  const events = [
    {
      year: 2022,
      images: [
        "https://placehold.co/300x200?text=2022+Image+1",
        "https://placehold.co/300x200?text=2022+Image+2",
        "https://placehold.co/300x200?text=2022+Image+3",
      ],
    },
    {
      year: 2023,
      images: [
        "https://placehold.co/300x200?text=2023+Image+1",
        "https://placehold.co/300x200?text=2023+Image+2",
        "https://placehold.co/300x200?text=2023+Image+3",
      ],
    },
    {
      year: 2024,
      images: [
        "https://placehold.co/300x200?text=2024+Image+1",
        "https://placehold.co/300x200?text=2024+Image+2",
        "https://placehold.co/300x200?text=2024+Image+3",
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
