import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const EventRegist = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Nama wajib diisi";
    if (!formData.whatsapp) errors.whatsapp = "No. WhatsApp wajib diisi";
    if (!formData.email) errors.email = "Email wajib diisi";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsRegistered(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Navbar />
      <CustomHeader title="Events" />
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">
          Mengoptimalkan Strategi Bisnis di Era Digital: Kunci Sukses di Tahun
          2024
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            Sedang Berlangsung
          </span>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            Rp. 300,000
          </span>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            Senin, 29 April 2024
          </span>
        </div>
        <p className="mb-6 dark:text-zinc-300">
          Dalam dunia bisnis yang semakin terhubung secara digital, penting bagi
          para pengusaha dan pemimpin bisnis untuk terus beradaptasi dan
          mengembangkan strategi yang relevan dengan perkembangan teknologi.
          Webinar ini dirancang untuk memberikan wawasan mendalam tentang
          bagaimana mengoptimalkan strategi bisnis di era digital, mulai dari
          pemanfaatan media sosial, e-commerce, hingga analisis undefined untuk
          pengambilan keputusan yang lebih baik.
        </p>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Pembicara Tema
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg"
              >
                <img
                  src={`https://placehold.co/100x100?text=Speaker+${index + 1}`}
                  alt={`Speaker ${index + 1}`}
                  className="rounded-full mb-4"
                />
                <h3 className="font-semibold dark:text-white">
                  Transformasi Digital untuk Usaha Kecil dan Menengah
                </h3>
                <p className="text-sm dark:text-zinc-300">
                  Dr. Rina Wijayanti - Pakar Strategi Digital dan Dosen
                  Universitas Jaya
                </p>
              </div>
            ))}
        </div>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Manfaat Mengikuti Webinar Ini
        </h2>
        <ul className="list-decimal list-inside mb-6 dark:text-zinc-300">
          <li>
            Memahami pentingnya digitalisasi dalam bisnis dan cara
            mengimplementasikannya.
          </li>
          <li>
            Mengetahui strategi pemasaran digital terbaru dan paling efektif.
          </li>
          <li>
            Mengelola cara mengoptimalkan platform e-commerce untuk
            memaksimalkan penjualan.
          </li>
          <li>
            Mendapatkan wawasan tentang bagaimana analisis undefined dapat
            meningkatkan pengambilan keputusan bisnis.
          </li>
          <li>Networking dengan para profesional dan pelaku bisnis lainnya.</li>
        </ul>

        {isRegistered ? (
          <div className="p-4 mt-6 border rounded-lg">
            <p className="text-lg font-semibold">
              Anda sudah terdaftar dan hadir dalam acara ini.
            </p>
            <p className="text-zinc-500">
              Silahkan Cek Notifikasi Whatsapp & Email dari Kami untuk informasi
              lebih lanjut
            </p>
          </div>
        ) : (
          <div className="bg-zinc-100 dark:bg-zinc-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">
              Registrasi Acara
            </h2>
            <p className="mb-4 dark:text-zinc-300">
              Silahkan isi data diri untuk Pendaftaran Acara
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium dark:text-zinc-300"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                  placeholder="Masukkan Nama Anda"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium dark:text-zinc-300"
                >
                  No. WhatsApp
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                  placeholder="Masukkan No. WhatsApp"
                />
                {formErrors.whatsapp && (
                  <p className="text-red-500 text-sm">{formErrors.whatsapp}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-zinc-300 rounded-md dark:bg-zinc-600 dark:border-zinc-500 dark:text-white"
                  placeholder="Masukkan Email Aktif"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold"
              >
                Daftar Sekarang
              </button>
            </form>
          </div>
        )}
      </div>

      {isRegistered && (
        <div className="p-4">
          <div className="border rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold">
              Anda sudah terdaftar dan hadir dalam acara ini.
            </p>
            <p className="text-zinc-500">
              Silahkan Cek Notifikasi Whatsapp & Email dari Kami untuk informasi
              lebih lanjut
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Materi Acara</h2>
            <p className="text-zinc-500 mb-4">
              Silahkan Cek Notifikasi Whatsapp & Email dari Kami untuk informasi
              lebih lanjut
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Document preview"
                  className="w-16 h-16 rounded-md mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium">
                    Transformasi Digital untuk Usaha Kecil dan Menengah.ppt
                  </p>
                </div>
                <button className="p-2">
                  <img
                    hidden="true"
                    alt="download"
                    src="/icons/download.svg"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Document preview"
                  className="w-16 h-16 rounded-md mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium">
                    Transformasi Digital untuk Usaha Kecil dan Menengah.pdf
                  </p>
                </div>
                <button className="p-2">
                  <img
                    hidden="true"
                    alt="download"
                    src="/icons/download.svg"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default EventRegist;
