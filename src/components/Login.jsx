import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import gambarKiri from "../assets/foto_ramai.png";

const Login = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const inputClass =
    "text-sm w-full px-4 py-2 border border-solid bg-gray-100 border-gray-300 rounded-full mt-4";
  const buttonClass =
    "bg-yellow-600 hover:bg-yellow-900 px-4 py-2 text-white uppercase rounded-full text-xs tracking-wider w-full mt-4";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData();
      formData.append("whatsapp", whatsapp);
      formData.append("password", password);
      formData.append("action", "login");

      const response = await axios.post(
        "http://harahapproject.biz.id/ms-kbc/member/",
        formData
      );
      
      console.log(response.data);
      // alert("Selamat, kamu berhasil login!"); // Show success alert
      history.push("/"); // Redirect to home page
    } catch (error) {
      // Handle login error here
      setError("Login failed. Please check your credentials and try again.");
      console.error(error);
      console.log("login gagal");
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="relative md:w-2/3 hidden md:block">
        <div className="absolute inset-0 md:w-[840px] md:h-[1088px] w-full h-full">
          <img
            src={gambarKiri}
            alt="gambar ramai"
            className="w-full h-full object-cover"
          />
        </div>
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
              Login
            </h1>
          </div>
          <div className="w-full">
            <form onSubmit={handleLogin}>
              <input
                className={inputClass}
                type="text"
                placeholder="No. Whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <input
                className={inputClass}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="mt-4 flex justify-between font-semibold text-sm">
                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                  <input className="mr-1" type="checkbox" />
                  <span>Ingatkan Saya</span>
                </label>
                <Link
                  to="/recovery"
                  className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                >
                  Lupa Password
                </Link>
              </div>
              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}
              <div className="text-center mt-4">
                <button className={buttonClass} type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
              Belum Punya Akun?{" "}
              <Link
                to="/register"
                className="text-red-600 hover:underline hover:underline-offset-4 text-bold"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
