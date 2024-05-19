import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

// Data gambar untuk dokumentasi
const documentationImages = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <CustomHeader title="ABOUT US" />

      {/* KBC Introduction */}
      <div
        className="w-full p-6 mx-auto"
        style={{ backgroundColor: "#f6efdc" }}
      >
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center my-4">
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
      <div className="flex justify-center items-center mx-auto py-8">
        <div className="grid grid-cols-12 gap-4 text-center w-full mx-auto">
          <div className="col-start-2 col-span-4">
            <h1 className="text-3xl font-bold text-center my-4">OUR VISION</h1>
            <p className="text-start">
              Komunitas Dunia Usaha yang Berpusatkan Allah (A God Centered
              Marketplace Community).
            </p>
          </div>
          <div className="col-start-6 col-span-2 flex justify-center items-center">
            <div className="w-1 h-full bg-gray-600"></div>
          </div>
          <div className="col-start-8 col-span-4 text-start">
            <h1 className="text-3xl font-bold text-center my-4">OUR MISSION</h1>
            <p className="text-start">
              Membangun komunitas bisnis Kerajaan Allah yang :
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

      {/* Documentation */}
      <div className="container p-6 mx-auto mb-5">
        <h1 className="text-3xl font-bold text-center my-4">DOCUMENTATION</h1>
        <div className="flex justify-center gap-4">
          {documentationImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image ${index + 1}`}
              className="h-64 w-auto object-cover"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
