import fotoRamai from "../assets/foto_ramai.png";
import kbcLogo from "../assets/KBC_Logo.png";

const NewLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={fotoRamai}
            alt="Community Event"
            className="w-full h-48 md:h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="flex justify-center mb-6">
            <img src={kbcLogo} alt="KBC Logo" />
          </div>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full p-3 border border-zinc-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="No Telepon / WhatsApp"
                className="w-full p-3 border border-zinc-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Buat Password"
                className="w-full p-3 border border-zinc-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Konfirmasi Password"
                className="w-full p-3 border border-zinc-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white p-3 rounded-lg font-semibold"
            >
              Daftar
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Sudah Punya Akun? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
