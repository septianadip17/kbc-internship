import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        {/* <div className="text-center md:text-left"></div> */}
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="No. Telepon / Whatsapp"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Buat Password"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Konfirmasi Password"
        />
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-yellow-900 hover:bg-yellow-600 px-6 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Daftar
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Sudah Punya Akun?{' '}
          <Link to="/login" className="text-red-600 hover:underline hover:underline-offset-4">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
