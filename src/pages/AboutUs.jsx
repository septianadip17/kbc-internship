import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import AOS from "aos";
import "aos/dist/aos.css";

// Data gambar untuk dokumentasi
const documentationImages = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // global animation duration (1000ms = 1s)
    });
  }, []);

  return (
    <>
      <Navbar />
      <CustomHeader title="ABOUT US" />

      {/* KBC Introduction */}
      <div
        className="w-full flex justify-center items-center px-4 sm:px-8 lg:px-16"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center py-4 max-w-5xl w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">
            KINGDOM BUSINESS COMMUNITY
          </h1>
          <p className="text-justify">
            Kingdom Business Community (KBC) adalah sebuah gerakan moral dalam
            dunia kerja berbentuk yayasan nirlaba dengan fokus untuk
            memperlengkapi pebisnis & profesional dunia kerja untuk memiliki
            ‘transformasi pola pikir’ dalam melakukan Bisnis / Pekerjaan dengan
            Tujuan yang Mulia (tidak hanya orientasi profit) dan mempraktekkan
            nilai spiritual dalam bekerja. KBC didirikan pada 14 Januari 2005
            oleh komunitas pebisnis & profesional di Jakarta (berawal dari 10
            orang) dan telah berkembang lebih dari 20.000 anggota di 7 kota
            (Jakarta, Surabaya, Semarang, Jogja, Solo, Bali, Bandung) dengan
            lebih dari 200 mentor / pembimbing.
          </p>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="flex justify-center items-center mx-auto py-8 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-center w-full max-w-5xl">
          <div
            className="md:col-start-2 md:col-span-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl font-bold text-center my-4">OUR VISION</h1>
            <p className="text-justify">
              Komunitas Dunia Usaha yang Berpusatkan Allah (A God Centered
              Marketplace Community).
            </p>
          </div>
          <div
            className="md:col-start-6 md:col-span-2 flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="w-1 h-full bg-gray-600 hidden md:block"></div>
          </div>
          <div
            className="md:col-start-8 md:col-span-4 text-start"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl font-bold text-center my-4">OUR MISSION</h1>
            <p className="text-justify">
              Membangun komunitas bisnis Kerajaan Allah yang :
            </p>
            <ul className="list-disc pl-5 text-justify">
              <li>Kuat dalam Firman,</li>
              <li>Ahli dalam bisnis dan</li>
              <li>
                Menjadi berkat / peduli (Termasuk komunitas pra sejahtera)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-white p-6 px-4 sm:px-8 lg:px-16" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center my-4">DOCUMENTATION</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentationImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Documentation Image ${index + 1}`}
              className="rounded-lg shadow-md"
              data-aos="zoom-in"
              data-aos-duration="2000" // individual animation duration
              data-aos-delay={`${index * 200}`} // adding delay to stagger animations
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
