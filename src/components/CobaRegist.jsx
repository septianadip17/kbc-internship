import PropTypes from "prop-types";
import { useState } from "react";
import address from "../data/address.json";
// import gambarKiri from "../assets/login-register-foto.png";


const RegistrationForm = ({ handleRegister }) => (
  <form
    onSubmit={handleRegister}
    className="w-full max-w-sm bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md"
  >
    <div className="mb-4">
      <input
        type="text"
        placeholder="Nama"
        className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
    </div>
    <div className="mb-4">
      <input
        type="tel"
        placeholder="No Telepon / WhatsApp"
        className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        placeholder="Buat Password"
        className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        placeholder="Konfirmasi Password"
        className="w-full p-3 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
      />
    </div>
    <button
      type="submit"
      className="w-full p-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      Daftar
    </button>
  </form>
);

RegistrationForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

const AdditionalDetailsForm = () => {
  const [selectedKabupatenKota, setSelectedKabupatenKota] = useState("");
  const [selectedKecamatan, setSelectedKecamatan] = useState("");
  const [selectedKelurahan, setSelectedKelurahan] = useState("");
  const [kecamatanOptions, setKecamatanOptions] = useState([]);
  const [kelurahanOptions, setKelurahanOptions] = useState([]);

  const kabupatenKotaOptions = address.regencies.map((regency) => (
    <option key={regency.regency_id} value={regency.regency_id}>
      {regency.regency_name}
    </option>
  ));

  const handleKabupatenKotaChange = (e) => {
    const selectedRegencyId = e.target.value; // Cari nilai regencyId

    console.log(`Selected Regency ID: ${selectedRegencyId}`);
    // console.log(`Selected Regency Name: ${selectedRegencyName}`);

    setSelectedKabupatenKota(selectedRegencyId); // Memberi nilai pada kabupaten
    // Filter districts based on selectedRegencyId
    const filteredDistricts = address.districts.filter(
      (district) => district.regency_id === selectedRegencyId
    );
    console.log(`ini berapa ${selectedRegencyId}`);
    console.log(filteredDistricts);
    // Map filtered districts to options
    const districtOptions = filteredDistricts.map((district) => (
      <option key={district.district_id} value={district.district_id}>
        {district.district_name}
      </option>
    ));

    // Update kecamatanOptions with filtered districts
    setKecamatanOptions(districtOptions); // kecamatan muncul setelah kota atau kabupate dipilij
    setSelectedKecamatan(""); // Reset selected Kecamatan
    setSelectedKelurahan(""); // Reset selected Kelurahan
  };

  const handleKecamatanChange = (e) => {
    const selectedDistrictID = e.target.value; //cari nilai kecamatan
    setSelectedKecamatan(selectedDistrictID); // memberi nilai kecamatan

    const selectedDistrict = address.districts.find(
      (district) => district.district_id === selectedDistrictID
    );

    const { district_name, district_id } = selectedDistrict;
    console.log(`ini ${district_name} dan ${district_id}`);

    const filteredVillages = address.villages.filter(
      (village) => village.district_id === selectedDistrictID
    );

    const villageOptions = filteredVillages.map((village) => (
      <option key={village.village_id} value={village.village_id}>
        {village.village_name}
      </option>
    ));

    setKelurahanOptions(villageOptions);
  };

  return (
    <div className="w-full max-w-sm mt-6">
      {/* Dropdown Kota atau Kabupaten */}
      <div className="mb-4">
        <label
          className="block text-zinc-700 dark:text-zinc-300 mb-2"
          htmlFor="city"
        >
          Kabupaten / Kota
        </label>
        <div className="relative">
          <select
            id="city"
            className="block appearance-none w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500"
            value={selectedKabupatenKota}
            onChange={handleKabupatenKotaChange}
          >
            <option>Pilih Kabupaten / Kota</option>
            {kabupatenKotaOptions}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Dropdown Kecamatan */}
      <div className="mb-4">
        <label
          className="block text-zinc-700 dark:text-zinc-300 mb-2"
          htmlFor="district"
        >
          Kecamatan
        </label>
        <div className="relative">
          <select
            id="district"
            className="block appearance-none w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500"
            value={selectedKecamatan}
            onChange={handleKecamatanChange}
          >
            <option>Pilih Kecamatan</option>
            {kecamatanOptions}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Dropdown Kelurahan */}
      <div className="mb-4">
        <label
          className="block text-zinc-700 dark:text-zinc-300 mb-2"
          htmlFor="subdistrict"
        >
          Kelurahan
        </label>
        <div className="relative">
          <select
            id="subdistrict"
            className="block appearance-none w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500"
            value={selectedKelurahan}
            onChange={(e) => setSelectedKelurahan(e.target.value)}
          >
            <option>Pilih Kelurahan</option>
            {kelurahanOptions}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700 dark:text-zinc-300">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-zinc-700 dark:text-zinc-300 mb-2"
          htmlFor="postal-code"
        >
          Kode Pos
        </label>
        <input
          id="postal-code"
          type="text"
          className="block w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500"
          placeholder="Masukkan Kode Pos"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-zinc-700 dark:text-zinc-300 mb-2"
          htmlFor="address-details"
        >
          Detail Alamat
        </label>
        <textarea
          id="address-details"
          className="block w-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500"
          placeholder="Cth. Nama Jalan, No. Rumah, dsb"
        ></textarea>
      </div>
      <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
        Selesai
      </button>
    </div>
  );
};

const CobaRegist = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration form submitted");
    setIsRegistered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4">
      <img src="https://placehold.co/150x150" alt="KBC Logo" className="mb-6" />
      {!isRegistered ? (
        <RegistrationForm handleRegister={handleRegister} />
      ) : (
        <AdditionalDetailsForm />
      )}
    </div>
  );
};

export default CobaRegist;
