import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const Contact = () => {
  return (
    <>
      <Navbar />
      <CustomHeader title="CONTACT" />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Kontak di sini</h1>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
