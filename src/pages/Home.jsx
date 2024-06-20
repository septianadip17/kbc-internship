import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fotoRamai from "../assets/foto_ramai.png";
import cardBackground from "../assets/card-background.png";
import { Link } from "react-router-dom";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  // useInView for detecting elements in the viewport
  const { ref, inView } = useInView({
    // triggerOnce: true, // Trigger only once
    threshold: 0.1, // How much of the element is visible before triggering
  });

  // data alumni
  const alumniListItems = [
    { count: 12010, label: "ALUMNI SUKSES SEJATI" },
    { count: 6002, label: "ALUMNI KINGDOM FINANCIAL" },
    { count: 900, label: "ALUMNI FIRE" },
    { count: 8084, label: "ALUMNI ROAD TO SUCCESS" },
    { count: 1130, label: "ALUMNI DARE TO SUCCEED" },
    { count: 1558, label: "ALUMNI GLORY LEADER IN MARKETPLACE" },
    { count: 583, label: "ALUMNI LEAD TO BLESS" },
    { count: 314, label: "ALUMNI SHIFTING UP" },
  ].map((item, index) => (
    <li key={index} className="font-bold text-2xl text-center p-4">
      <h2>{inView ? <CountUp end={item.count} duration={2} /> : "0"}</h2>
      <h2>{item.label}</h2>
    </li>
  ));

  return (
    <>
      <Navbar />
      <Header />
      {/* About Us */}
      <div
        className="container mx-auto py-10 px-4 sm:px-8 lg:px-16"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 text-justify">
            <h2 className="text-3xl font-bold pb-2">ONE FAMILY</h2>
            <p className="mb-6">
              Kingdom Business Community (KBC) adalah sebuah gerakan moral dalam
              dunia kerja berbentuk yayasan nirlaba dengan fokus untuk
              memperlengkapi pebisnis & profesional dunia kerja untuk memiliki
              ‘transformasi pola pikir’ dalam melakukan Bisnis / Pekerjaan
              dengan Tujuan yang Mulia (tidak hanya orientasi profit) dan
              mempraktekkan nilai spiritual dalam bekerja.
            </p>
            <h2 className="text-3xl font-bold pb-2 text-end md:text-left">
              ONE VALUE
            </h2>
            <p>
              God Centered (Berpusatkan Allah), Loyal to Process (Belajar Setia
              pada Proses), Obedient to Truth (Berani Melakukan Kebenaran), Real
              Spirit of Excellence (Memberi yang Terbaik), Yielding Rights
              (Berkorban untuk Orang Lain / Penyerahan Hak).
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center items-center">
            <img
              src={fotoRamai}
              alt="foto ramai"
              className="align-center mx-auto max-w-full h-auto"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>

      {/* Total Alumni */}
      <div
        className="container mx-auto py-10 px-4 sm:px-8 lg:px-16"
        ref={ref}
        data-aos="fade-up"
      >
        <ul className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none">
          {alumniListItems}
        </ul>
      </div>

      {/* Events Card */}
      <div
        className="text-white p-5"
        style={{
          backgroundImage: `url(${cardBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        <div className="flex flex-wrap justify-center md:justify-between items-center max-w-7xl mx-auto">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-zinc-800 bg-opacity-70 p-4 rounded-lg m-2 w-full sm:w-auto"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative flex items-center justify-center w-20 h-20 mt-2 mb-4 rounded-full bg-white text-black">
                <div className="text-center">
                  <div className="text-4xl font-bold">12</div>
                  <div className="text-sm">MEI 2024</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold">Business Community</h3>
                <p className="text-xs">12 Mei 2024 - 19 Mei 2024</p>
                <p className="text-xs">12.00 PM - 15.00 PM</p>
                <p className="text-xs">@KBC Surabaya</p>
              </div>
              <Link to="/register">
                <button className="mt-4 bg-yellow-600 text-white py-2 px-4 font-bold rounded hover:bg-yellow-700 hover:text-gray-200">
                  Register Here
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/events">
            <button className="bg-white text-red-500 font-bold py-2 px-6 rounded hover:bg-red-500 hover:text-white">
              See More Events
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
