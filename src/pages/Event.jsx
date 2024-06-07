import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import eventsData from "../data/eventsData.json";

// Event Card Component
const EventCard = ({ event, isNearestEvent }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-1">
      <img
        src={event.image}
        alt="Event Image"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="md:col-span-2 flex flex-col">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <div className="grid grid-cols-2 gap-1 md:flex md:items-center md:space-x-2 mb-4">
        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
          {event.status}
        </span>
        <span className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full text-sm">
          {event.price}
        </span>
        <span className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full text-sm">
          {event.date}
        </span>
      </div>
      <p className="text-zinc-700 text-justify mb-4 flex-grow">
        {event.description}
      </p>
      <button
        className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg w-full mt-auto"
        onClick={() => {
          if (isNearestEvent) {
            window.open('https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed', '_blank');
          }
        }}
      >
        {isNearestEvent ? "Lihat Lokasi di Maps" : "Registrasi Sekarang"}
      </button>
    </div>
  </div>
);

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isNearestEvent: PropTypes.bool,
};

EventCard.defaultProps = {
  isNearestEvent: false,
};

// Google Map Component
const GoogleMap = ({ src }) => (
  <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        width="100%"
        height="100%"
        className="rounded-lg"
        id="gmap_canvas"
        src={src}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
    <style>{`
      .mapouter {
        position: relative;
        text-align: right;
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        width: 100%;
      }
      .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 100%;
        width: 100%;
        position: absolute;
      }
    `}</style>
  </div>
);

GoogleMap.propTypes = {
  src: PropTypes.string.isRequired,
};

const Event = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <CustomHeader title="Events" />
      <div className="min-h-screen p-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-8 flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Cari Event disini"
              className="w-full p-3 pl-10 pr-20 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="ml-2 bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Cari
            </button>
          </div>
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Garis Horizontal */}
        <hr className="border-gray-300 border-4 h-full w-full m-4" />

        {/* Event Terdekat */}
        <div className="min-h-screen p-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            EVENT TERDEKAT
          </h2>
          <div className="mb-8 flex justify-center">
            <GoogleMap src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed" />
          </div>
          <div className="relative space-y-8">
            <div className="absolute left-5 top-10 bottom-0 w-px bg-yellow-500"></div>
            {filteredEvents.slice(0, 2).map((event, index) => (
              <div key={event.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 text-white rounded-full z-10">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <EventCard key={event.id} event={event} isNearestEvent={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Event;
