import { Link } from "react-router-dom";
import gambarKiri from "../assets/foto_ramai.png";

const ForgotPassword = () => {
  const inputClass =
    "text-sm w-full px-4 py-2 border border-solid bg-gray-100 border-gray-300 rounded-full mt-4";
  const buttonClass =
    "bg-yellow-600 hover:bg-yellow-900 px-4 py-2 text-white uppercase rounded text-xs tracking-wider w-full mt-4 rounded-full";

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
              Lupa Password
            </h1>
          </div>
          <div className="w-full">
            <input className={inputClass} type="tel" placeholder="No. Whatsapp" />
            <input className={inputClass} type="email" placeholder="Email" />
            <div className="text-center font-bold text-sm mt-4">
              <button className={buttonClass} type="submit">
                Verifikasi Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
