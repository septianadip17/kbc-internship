import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Login />
      <Register />
      <Footer/>
    </div>
  );
};

export default Home;
