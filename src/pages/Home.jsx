import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fotoRamai from "../assets/foto_ramai.png";

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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">cards, acara acara di sini</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
