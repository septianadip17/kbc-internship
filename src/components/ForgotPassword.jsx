// Import useState dan Link dari react-router-dom, serta PropTypes dari prop-types
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import gambarKiri from "../assets/foto_ramai.png";

// Komponen ForgotPassword
const ForgotPassword = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [inputError, setInputError] = useState({
    whatsapp: false,
    email: false,
  });

  // Fungsi validasi nomor WhatsApp
  const isValidWhatsapp = (number) => {
    // Contoh validasi sederhana: pastikan panjang nomor WhatsApp minimal 10 digit
    return number.length >= 10;
  };

  // Fungsi validasi email
  const isValidEmail = (email) => {
    // Contoh validasi sederhana menggunakan regular expression
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const inputClass =
    "text-sm w-full px-4 py-2 border border-solid bg-gray-100 border-gray-300 rounded-full";
  const buttonClass =
    "bg-yellow-600 hover:bg-yellow-900 px-4 py-2 text-white uppercase rounded-full font-bold tracking-wider w-full";

  // Handle verifikasi email
  const handleVerification = () => {
    setInputError({ whatsapp: false, email: false });

    if (!isValidWhatsapp(whatsapp)) {
      setInputError((prev) => ({ ...prev, whatsapp: true }));
      return;
    }

    if (!isValidEmail(email)) {
      setInputError((prev) => ({ ...prev, email: true }));
      return;
    }

    setAlertMessage("Cek email Anda untuk verifikasi.");
    setWhatsapp("");
    setEmail("");
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
      <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-100 sm:bg-transparent relative">
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${gambarKiri})` }}
        ></div>
        <div className="flex flex-col justify-center items-center p-5 w-full max-w-full bg-white bg-opacity-90 md:bg-opacity-100 z-10 h-full md:h-auto min-h-screen">
          <div className="text-center">
            <Link to="/">
              <img
                src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
                alt="Logo image"
                className="mx-auto size-40"
              />
            </Link>
            <h1 className="text-2xl font-bold text-center md:hidden text-yellow-900">
              Lupa Password
            </h1>
          </div>
          <div className="w-full px-9">
            <InputField
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              error={inputError.whatsapp}
              errorMsg="Nomor Whatsapp tidak valid."
              placeholder="No. Whatsapp"
              className={inputClass}
            />
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={inputError.email}
              errorMsg="Email tidak valid."
              placeholder="Email"
              className={inputClass}
            />
            {alertMessage && (
              <p className="text-green-500 text-sm mt-4">{alertMessage}</p>
            )}
            <div className="text-center font-bold mt-6">
              <button
                className={buttonClass}
                type="button"
                onClick={handleVerification}
              >
                Verifikasi Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen InputField dengan PropTypes
const InputField = ({
  type,
  value,
  onChange,
  error,
  errorMsg,
  placeholder,
  className,
}) => (
  <div className="mt-4">
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} ${error ? "border-red-500" : ""}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{errorMsg}</p>}
  </div>
);

// PropTypes untuk InputField
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ForgotPassword;
