import { useState } from "react";
import { Link } from "react-router-dom";
import gambarKiri from "../assets/login-register-foto.png";
import showButton from "../assets/show.png";
import hideButton from "../assets/hide.png";
import axios from "axios";

const Register = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [formValues, setFormValues] = useState({
    nama: "",
    email: "",
    noTelepon: "",
    password: "",
    konfirmasiPassword: "",
    kabupatenKota: "",
    kecamatan: "",
    kelurahan: "",
    kodePos: "",
    detail: "",
    memberBisnis: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputClass =
    "text-sm text-gray-700 w-full bg-gray-100 px-4 py-2 border border-solid border-gray-300 rounded-full mt-4";
  const buttonClass =
    "w-full mt-4 bg-yellow-600 hover:bg-yellow-900 px-6 py-2 text-white uppercase rounded-full text-xs tracking-wider";

  const handleDaftarClick = () => {
    setShowAdditionalFields(true);
  };

  const handleSubmitClick = () => {
    const {
      nama,
      email,
      noTelepon,
      password,
      konfirmasiPassword,
      kabupatenKota,
      kecamatan,
      kelurahan,
      kodePos,
      detail,
      memberBisnis,
    } = formValues;

    // Validate fields
    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Email harus mengandung '@'.";
    }

    if (!/^[0-9]+$/.test(noTelepon)) {
      newErrors.noTelepon = "Nomor telepon harus berupa angka.";
    }

    if (!/^[0-9]+$/.test(kodePos)) {
      newErrors.kodePos = "Kode pos harus berupa angka.";
    }

    if (password !== konfirmasiPassword) {
      newErrors.password = "Password dan konfirmasi password tidak cocok.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = {
      nama,
      email,
      noTelepon,
      password,
      kabupatenKota,
      kecamatan,
      kelurahan,
      kodePos,
      detail,
      memberBisnis,
    };

    axios
      .post("http://harahapproject.biz.id/ms-kbc/member/", formData)
      .then(() => {
        alert("Selamat anda telah terdaftar, mohon cek email anda");
      })
      .catch((err) => {
        console.error(err);
        alert("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                <input
                  className={inputClass}
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={formValues.nama}
                  onChange={handleChange}
                />
                <input
                  className={inputClass}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
                <input
                  className={inputClass}
                  type="tel"
                  name="noTelepon"
                  placeholder="No. Telepon / Whatsapp"
                  value={formValues.noTelepon}
                  onChange={handleChange}
                />
                {errors.noTelepon && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.noTelepon}
                  </p>
                )}
                <div className="relative">
                  <input
                    className={inputClass}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Buat Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 top-3 flex items-center px-4 text-gray-600"
                  >
                    <img
                      src={showPassword ? hideButton : showButton}
                      alt="Toggle Password Visibility"
                      className="h-4 w-4"
                    />
                  </button>
                </div>
                <div className="relative">
                  <input
                    className={inputClass}
                    type={showConfirmPassword ? "text" : "password"}
                    name="konfirmasiPassword"
                    placeholder="Konfirmasi Password"
                    value={formValues.konfirmasiPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    className="absolute inset-y-0 right-0 top-4 flex items-center px-4 text-gray-600"
                  >
                    <img
                      src={showConfirmPassword ? hideButton : showButton}
                      alt="Toggle Confirm Password Visibility"
                      className="h-4 w-4 align-items-center"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
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
                {errors.kodePos && (
                  <p className="text-red-500 text-xs mt-1">{errors.kodePos}</p>
                )}
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
