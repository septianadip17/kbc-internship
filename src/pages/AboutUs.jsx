import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import { Carousel, IconButton } from "@material-tailwind/react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <CustomHeader title="ABOUT US" />
      {/* KBC Introduction */}
      <div className="container p-6 mx-auto">
        <h1 className="text-3xl font-bold text-center my-4">
          KINGDOM BUSINESS COMMUNITY
        </h1>
        <p className="text-justify">
          Kingdom Business Community (KBC) adalah sebuah gerakan moral dalam
          dunia kerja berbentuk yayasan nirlaba dengan fokus untuk
          memperlengkapi pebisnis & profesional dunia kerja untuk memiliki
          ‘transformasi pola pikir’ dalam melakukan Bisnis / Pekerjaan dengan
          Tujuan yang Mulia (tidak hanya orientasi profit) dan mempraktekkan
          nilai spiritual dalam bekerja. KBC didirikan pada 14 Januari 2005 oleh
          komunitas pebisnis & profesional di Jakarta (berawal dari 10 orang)
          dan telah berkembang lebih dari 20.000 anggota di 7 kota (Jakarta,
          Surabaya, Semarang, Jogja, Solo, Bali, Bandung) dengan lebih dari 200
          mentor / pembimbing.
        </p>
      </div>

      {/* vision and mission */}
      <div className="flex justify-center items-center mx-auto py-8">
        <div className="grid grid-cols-12 gap-4 text-center w-full mx-auto">
          <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-4">
            <h1 className="text-3xl font-bold text-center my-4">OUR VISSION</h1>
            <p className="text-start">
              Komunitas Dunia Usaha yang Berpusatkan Allah (A God Centered
              Marketplace Community).
            </p>
          </div>
          <div className="col-start-6 col-span-2 md:col-start-6 md:col-span-2 flex justify-center items-center">
            <div className="w-1 h-full bg-gray-600"></div>
          </div>
          <div className="col-start-8 col-span-4 md:col-start-8 md:col-span-4 text-start">
            <h1 className="text-3xl font-bold text-center my-4">OUR MISSION</h1>
            <p className="text-start">
              Membangun komunitas bisnis Kerajaan Allah yang :{" "}
              <ul className="list-disc pl-5">
                <li>Kuat dalam Firman,</li>
                <li>Ahli dalam bisnis dan</li>
                <li>
                  Menjadi berkat / peduli (Termasuk komunitas pra sejahtera)
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* documentation */}
      <div className="container p-6 mx-auto mb-5">
        <h1 className="text-3xl font-bold text-center my-4">DOCUMENTATION</h1>
        <div className="container text-center mx-auto">
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
