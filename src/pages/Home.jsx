import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const alumniCount = 6;
  const alumniListItems = Array.from({ length: alumniCount }, (_, index) => (
    <li key={index} className="font-bold text-2xl shadow-md p-4">
      <h2>1.000</h2>
      <h2>ALUMNI SUKSES SEJATI</h2>
    </li>
  ));

  return (
    <div className="relative text-center">
      <Navbar />
      <Header />
      <div className="grid">
        
      </div>
      <ul className="my-6 grid grid-cols-3 gap-4 list-none">
        {alumniListItems}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
