import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import eventsData from "../data/eventsData.json";

const tailwindClasses = {
  container: "min-h-screen p-4",
  contentWrapper: "max-w-7xl mx-auto",
  searchWrapper: "relative mb-8 flex",
  searchInput:
    "w-full p-3 pl-10 pr-20 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500",
  searchButton:
    "ml-2 bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg",
  eventCard: "bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row",
  eventImage: "w-full sm:w-36 h-36 bg-zinc-300 rounded-lg mb-4 sm:mb-0 sm:mr-6",
  eventTitle: "text-xl font-bold mb-2",
  eventTagsWrapper:
    "grid grid-cols-2 gap-1 sm:flex sm:items-center sm:space-x-2 mb-4",
  eventTag: "bg-yellow-500 text-white px-3 py-1 rounded-full text-sm",
  eventPrice:
    "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full text-sm",
  eventDate:
    "bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full text-sm",
  eventDescription: "text-zinc-700 text-justify mb-4 flex-grow",
  registerButton:
    "bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg w-full mt-auto",
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
      <div className={tailwindClasses.container}>
        <div className={tailwindClasses.contentWrapper}>
          <div className={tailwindClasses.searchWrapper}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Cari Event disini"
              className={tailwindClasses.searchInput}
            />
            <button className={tailwindClasses.searchButton}>Cari</button>
          </div>
          {filteredEvents.map((event) => (
            <div key={event.id} className={tailwindClasses.eventCard}>
              <img
                src={event.image}
                alt="Event Image"
                className={tailwindClasses.eventImage}
              />
              <div className="flex flex-col flex-grow">
                <h2 className={tailwindClasses.eventTitle}>{event.title}</h2>
                <div className={tailwindClasses.eventTagsWrapper}>
                  <span className={tailwindClasses.eventTag}>
                    {event.status}
                  </span>
                  <span className={tailwindClasses.eventPrice}>
                    {event.price}
                  </span>
                  <span className={tailwindClasses.eventDate}>
                    {event.date}
                  </span>
                </div>
                <p className={tailwindClasses.eventDescription}>
                  {event.description}
                </p>
                <button className={tailwindClasses.registerButton}>
                  Registrasi Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Event;
