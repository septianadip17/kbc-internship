import header_background from "../assets/header-home.png";
import kbcLogo from "../assets/KBC_Logo.png";

const Header = () => {
  return (
    <div
      className="relative h-screen w-screen flex justify-center items-center bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${header_background})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <img className="h-60 mb-10" src={kbcLogo} alt="KBC Logo" />
        <p className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl text-center uppercase">
          Welcome To <br className="hidden md:inline" /> Kingdom Business
          Community <br className="hidden md:inline" /> Surabaya
        </p>
      </div>
    </div>
  );
};

export default Header;
