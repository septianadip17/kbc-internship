import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
  return (
    <div className="relative text-center">
      <Navbar />
      <Header />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
