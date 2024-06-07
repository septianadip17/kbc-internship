import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import eventsData from "../data/eventsData.json";

const tailwindClasses = {
  container: "min-h-screen p-4 ",
  contentWrapper: "max-w-5xl mx-auto",
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
  timelineContainer: "relative space-y-8",
  timelineLine: "absolute left-5 top-10 bottom-0 w-px bg-yellow-500",
  timelineItem: "flex items-start space-x-4",
  timelineNumberContainer: "flex-shrink-0",
  timelineNumber:
    "flex items-center justify-center w-10 h-10 bg-yellow-500 text-white rounded-full z-10",
  timelineContent: "flex-1",
  timelineImage: "w-full h-auto mb-4",
  timelineTitle: "text-xl font-bold mb-2",
  timelineTags: "flex items-center space-x-4 mb-2",
  timelineTag:
    "bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded",
  timelinePrice:
    "bg-zinc-100 text-zinc-800 text-xs font-semibold px-2.5 py-0.5 rounded",
  timelineDate:
    "bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded",
  timelineDescription: "text-zinc-700 mb-4",
  timelineLink: "text-yellow-500 font-semibold",
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
      {/* Garis Horizontal */}
      <div className="container">
        <hr className="border-gray-300 border-4 h-full w-full m-4" />
      </div>
      {/* Event Terdekat */}
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mb-4">EVENT TERDEKAT</h2>
        <div className="mb-8">
          <img
            src="https://placehold.co/800x400"
            alt="Map of Surabaya"
            className="w-full h-auto"
          />
        </div>
        <div className={tailwindClasses.timelineContainer}>
          <div className={tailwindClasses.timelineLine}></div>
          {[1, 2].map((item, index) => (
            <div key={index} className={tailwindClasses.timelineItem}>
              <div className={tailwindClasses.timelineNumberContainer}>
                <div className={tailwindClasses.timelineNumber}>{item}</div>
              </div>
              <div className={tailwindClasses.timelineContent}>
                <img
                  src="https://placehold.co/150x100"
                  alt="Event Image"
                  className={tailwindClasses.timelineImage}
                />
                <h3 className={tailwindClasses.timelineTitle}>
                  Mengoptimalkan Strategi Bisnis di Era Digital: Kunci Sukses di
                  Tahun 2024
                </h3>
                <div className={tailwindClasses.timelineTags}>
                  <span className={tailwindClasses.timelineTag}>
                    Sedang Berlangsung
                  </span>
                  <span className={tailwindClasses.timelinePrice}>
                    Rp. 300.000
                  </span>
                  <span className={tailwindClasses.timelineDate}>
                    Senin, 29 April 2024
                  </span>
                </div>
                <p className={tailwindClasses.timelineDescription}>
                  Dalam dunia bisnis yang semakin terhubung secara digital,
                  penting bagi para profesional untuk memiliki strategi yang
                  efektif dalam menghadapi perubahan yang cepat dan tantangan
                  yang kompleks. Webinar ini dirancang untuk memberikan wawasan
                  mendalam tentang bagaimana mengoptimalkan strategi bisnis di
                  era digital, termasuk penggunaan teknologi terbaru, analisis
                  undefined untuk pengambilan keputusan yang lebih baik.
                </p>
                <a href="#" className={tailwindClasses.timelineLink}>
                  Lihat Lokasi di Maps
                </a>
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
