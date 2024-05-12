// import Login from "../components/Login";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
  
      <div>
        <Navbar/>
        <h1 className="w-100vh">Ini adalah bagian Home</h1>
        {/* <Login /> */}
        <Register />
        <Footer/>
      </div>
  
  );
};

export default Home;
