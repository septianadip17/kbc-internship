import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
          alt="Logo KBC"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left"></div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address atau Nomor Telepon"
        />
      
        <div className="text-center md:text-left mt-4">
          <Link
            className=" mr-4 bg-yellow-900 hover:bg-yellow-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            kirim
          </Link>
          <Link
            to="/"
            className="bg-yellow-900 hover:bg-yellow-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="button"
          >
            Kembali ke halaman
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
