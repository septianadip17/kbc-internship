import { Link } from "react-router-dom";
import gambarKiri from "../assets/foto_ramai.png";

const Login = () => {
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
            <img
              src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
              alt="Sample image"
              className="mx-auto size-40"
            />
            <h1 className="text-2xl font-bold text-center md:hidden text-yellow-900">
              Login
            </h1>
          </div>
          <div className="w-full">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
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
            <div className="text-center mt-4">
              <button
                className="mr-4 bg-yellow-900 hover:bg-yellow-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </button>
              <Link
                to="/"
                className="bg-yellow-900 hover:bg-yellow-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              >
                Kembali ke halaman
              </Link>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
              Belum Punya Akun?{" "}
              <Link
                to="/register"
                className="text-red-600 hover:underline hover:underline-offset-4"
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
