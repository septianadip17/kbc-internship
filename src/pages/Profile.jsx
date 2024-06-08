import Navbar from "../components/Navbar";
import CustomHeader from "../components/CustomHeader";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <>
      <Navbar />
      <CustomHeader title="PROFILE" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white flex flex-col md:flex-row items-center md:items-start p-6 rounded-lg shadow-md w-full max-w-4xl">
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://placehold.co/150x200"
              alt="Profile Picture"
              className="w-40 h-52 bg-zinc-200 rounded-md mb-4"
            />
            <p className="text-center md:text-left font-bold text-lg">
              DANI DAMARIS
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="mb-4">
              <p className="font-semibold">Nama :</p>
              <p>Dani Damaris</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">ID Anggota :</p>
              <p>1253155482</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Nomor Telepon :</p>
              <p>08******455</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Email :</p>
              <p>da*******s@gmail.com</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Alamat :</p>
              <p>Surabaya, Jl. Melati No 99 Selatan, Jawa Timur</p>
            </div>
            <button className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700">
              Edit Data Diri
            </button>
            <p className="mt-2 text-sm text-center md:text-left">
              Memiliki Kendala?{" "}
              <a href="#" className="font-semibold">
                Hubungi CS
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
