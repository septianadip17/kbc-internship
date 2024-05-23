// src/pages/Event.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import eventsData from "../data/eventsData.json";

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
      <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Cari Event disini"
              className="w-full p-3 pl-10 pr-20 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-zinc-800 dark:text-zinc-200"
            />
            <button className="absolute right-2 top-2 bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Cari
            </button>
          </div>
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md mb-6 flex"
            >
              <img
                src={event.image}
                alt="Event Image"
                className="w-36 h-36 bg-zinc-300 dark:bg-zinc-700 rounded-lg mr-6"
              />
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {event.title}
                </h2>
                <div className="flex items-center space-x-2 mb-4">
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
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  {event.description}
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg">
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
