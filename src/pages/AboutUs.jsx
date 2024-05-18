import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <CustomHeader title="ABOUT US" />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">About Us Page</h1>
      </div>
      <div className="container">
        <h1 className="text-3xl font-bold">KINGDOM BUSINESS COMMUNITY</h1>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
