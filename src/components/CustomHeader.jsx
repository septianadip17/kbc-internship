import PropTypes from 'prop-types';
import header_background_custom from "../assets/header-home-custom.png";
import kbcLogo from "../assets/KBC_Logo.png";

const CustomHeader = ({ title }) => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${header_background_custom})` }}
    >
      <div className="container flex flex-col items-center">
        <img className="h-60 mb-10" src={kbcLogo} alt="KBC Logo" />
        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl text-center uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomHeader;
