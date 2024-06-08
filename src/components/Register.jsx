import { useState } from "react";
import { Link } from "react-router-dom";
import gambarKiri from "../assets/login-register-foto.png";

const Register = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formValues, setFormValues] = useState({
    kabupatenKota: "",
    kecamatan: "",
    kelurahan: "",
    kodePos: "",
    detail: "",
    memberBisnis: "",
  });

  const inputClass =
    "text-sm text-gray-700 w-full bg-gray-100 px-4 py-2 border border-solid border-gray-300 rounded-full mt-4";
  const buttonClass =
    "w-full mt-4 bg-yellow-600 hover:bg-yellow-900 px-6 py-2 text-white uppercase rounded-full text-xs tracking-wider";

  const handleDaftarClick = () => {
    setShowAdditionalFields(true);
  };

  const handleSubmitClick = () => {
    alert("Selamat anda telah terdaftar, mohon cek email anda");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="md:w-2/3 hidden md:block">
        <img
          src={gambarKiri}
          alt="gambar ramai"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-100 md:bg-transparent relative">
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${gambarKiri})` }}
        ></div>
        <div className="flex flex-col justify-center items-center space-y-4 p-5 w-full max-w-sm bg-white bg-opacity-90 md:bg-opacity-100 z-10 h-full md:h-auto">
          <div className="text-center">
            <Link to="/">
              <img
                src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
                alt="Logo image"
                className="mx-auto size-40"
              />
            </Link>
            <h1 className="text-2xl font-bold text-center md:hidden text-yellow-900">
              Sign Up
            </h1>
          </div>
          <div className="w-full">
            {!showAdditionalFields ? (
              <>
                <input className={inputClass} type="text" placeholder="Nama" />
                <input className={inputClass} type="text" placeholder="Email" />
                <input
                  className={inputClass}
                  type="tel"
                  placeholder="No. Telepon / Whatsapp"
                />
                <input
                  className={inputClass}
                  type="password"
                  placeholder="Buat Password"
                />
                <input
                  className={inputClass}
                  type="password"
                  placeholder="Konfirmasi Password"
                />
              </>
            ) : (
              <>
                <input
                  name="kabupatenKota"
                  className={inputClass}
                  type="text"
                  placeholder="Kabupaten / Kota"
                  value={formValues.kabupatenKota}
                  onChange={handleChange}
                />
                <input
                  name="kecamatan"
                  className={inputClass}
                  type="text"
                  placeholder="Kecamatan"
                  value={formValues.kecamatan}
                  onChange={handleChange}
                />
                <input
                  name="kelurahan"
                  className={inputClass}
                  type="text"
                  placeholder="Kelurahan"
                  value={formValues.kelurahan}
                  onChange={handleChange}
                />
                <input
                  name="kodePos"
                  className={inputClass}
                  type="text"
                  placeholder="Kode Pos"
                  value={formValues.kodePos}
                  onChange={handleChange}
                />
                <input
                  name="detail"
                  className={inputClass}
                  type="text"
                  placeholder="Detail Alamat (Cth. Nama Jalan, No. Rumah, dsb)"
                  value={formValues.detail}
                  onChange={handleChange}
                />
                <input
                  name="memberBisnis"
                  className={inputClass}
                  type="text"
                  placeholder="Member Bisnis"
                  value={formValues.memberBisnis}
                  onChange={handleChange}
                />
              </>
            )}

            <div className="text-center mt-4">
              <button
                className={buttonClass}
                type="button"
                onClick={
                  showAdditionalFields ? handleSubmitClick : handleDaftarClick
                }
              >
                {showAdditionalFields ? "Selesai" : "Daftar"}
              </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
              Sudah Punya Akun?{" "}
              <Link
                to="/login"
                className="text-red-600 hover:underline hover:underline-offset-4"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
