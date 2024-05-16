import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import fotoRamai from "../assets/foto_ramai.png";

const Home = () => {
  const alumniCount = 6;
  const alumniListItems = Array.from({ length: alumniCount }, (_, index) => (
    <li key={index} className="font-bold text-2xl shadow-md p-4">
      <h2>1.000</h2>
      <h2>ALUMNI SUKSES SEJATI</h2>
    </li>
  ));

  return (
    <>
      <Navbar />
      <Header />
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-8">
            <div className="row text-justify mr-10">
              <h2 className="text-3xl font-bold pb-2">ONE FAMILY</h2>
              <p>
                Kingdom Business Community (KBC) adalah sebuah gerakan moral
                dalam dunia kerja berbentuk yayasan nirlaba dengan fokus untuk
                memperlengkapi pebisnis & profesional dunia kerja untuk memiliki
                ‘transformasi pola pikir’ dalam melakukan Bisnis / Pekerjaan
                dengan Tujuan yang Mulia (tidak hanya orientasi profit) dan
                mempraktekkan nilai spiritual dalam bekerja.
              </p>
              <div className="row">
                <h2 className="text-3xl font-bold pb-2 text-end  md:text-left">
                  ONE VALUE
                </h2>
                <p>
                  God Centered (Berpusatkan Allah), Loyal to Process (Belajar
                  Setia pada Proses), Obedient to Truth (Berani Melakukan
                  Kebenaran), Real Spirit of Excellence (Memberi yang Terbaik),
                  Yielding Rights (Berkorban untuk Orang Lain / Penyerahan Hak).
                </p>
              </div>
            </div>
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
      <div className="container mx-4">
        <ul className="my-6 grid grid-cols-3 gap-4 list-none">
          {alumniListItems}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
