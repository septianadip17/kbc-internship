import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fotoRamai from "../assets/foto_ramai.png";
import cardBackground from "../assets/card-background.png";

const Home = () => {
  // data alumni
  const alumniCount = 6;
  const alumniListItems = Array.from({ length: alumniCount }, (_, index) => (
    <li key={index} className="font-bold text-2xl text-center p-4">
      <h2>1.000</h2>
      <h2>ALUMNI SUKSES SEJATI</h2>
    </li>
  ));

  return (
    <>
      <Navbar />
      <Header />
      {/* About Us */}
      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 text-justify m-10">
            <h2 className="text-3xl font-bold pb-2">ONE FAMILY</h2>
            <p>
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
          <div className="md:col-span-4">
            <img
              src={fotoRamai}
              alt="foto ramai"
              className="align-center mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Total Alumni */}
      <div className="container mx-auto py-10">
        <ul className="my-6 grid grid-cols-3 gap-4 list-none">
          {alumniListItems}
        </ul>
      </div>

      {/* Events Card */}
      <div
        className="p-4 h-screen w-screen"
        style={{ backgroundImage: `url(${cardBackground})` }}
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={fotoRamai} alt="Event" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register Here
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
