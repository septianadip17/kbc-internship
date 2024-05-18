import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const Event = () => {
  return (
    <>
      <Navbar />
      <CustomHeader title="Events" />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Acara KBC di sini</h1>
      </div>
      <Footer />
    </>
  );
};

export default Event;
