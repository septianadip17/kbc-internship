import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const Gallery = () => {
  return (
    <>
      <Navbar/>
      <CustomHeader title="GALLERY" />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Gallery di sini yaa</h1>
      </div>
      <Footer/>
    </>
  );
};

export default Gallery;
