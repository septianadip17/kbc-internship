import header_background from "../assets/header-home.png";
import kbcLogo from "../assets/KBC_Logo.png";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${header_background})` }}
    >
      <div className="flex flex-col items-center">
        <img className="max-w-xl max-h-30 mb-5" src={kbcLogo} alt="KBC Logo" />
        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl text-center uppercase">
          Welcome To <br />
          Kingdom Business Community <br />
          Surabaya
        </h1>
      </div>
    </div>
  );
};

export default Header;
