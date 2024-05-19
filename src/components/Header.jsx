import header_background from "../assets/header-home.png";
import kbcLogo from "../assets/KBC_Logo.png";

const Header = () => {
  return (
    <div
      className="bg-center bg-no-repeat h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${header_background})`,
        backgroundSize: "1440px 1030px",
      }}
    >
      <div className="container flex flex-col items-center">
        <img className="h-60 mb-10" src={kbcLogo} alt="KBC Logo" />
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
