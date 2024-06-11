import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const inputClasses =
  "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-zinc-600 ";
const buttonClasses =
  "bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === "" || regex.test(value)) {
      setPhone(value);
      setError("");
    } else {
      setError("Nomor telepon harus berupa angka.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      setError("Nomor telepon harus diisi.");
    } else {
      setError("");
      // Proses pengiriman form
      console.log("Form submitted");
    }
  };

  return (
    <>
      <Navbar />
      <CustomHeader title="CONTACT" />
      <div className="container mx-auto bg-white border-2 dark:border-zinc-400 rounded-lg shadow-md p-6 min-h-screen m-6">
        <h2 className="text-center text-xl font-semibold mb-2">
          We would love to hear from you
        </h2>
        <p className="text-center mb-6">
          Contact us regarding any concerns or inquiries
        </p>
        <form className="px-4 md:px-24" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" placeholder="Nama" className={inputClasses} />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="No. Telepon"
              className={inputClasses}
              value={phone}
              onChange={handlePhoneChange}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Pesan yang ingin disampaikan"
              className={`${inputClasses} h-32`}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className={buttonClasses}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
