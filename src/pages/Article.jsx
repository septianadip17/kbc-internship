import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Article = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Ini artikel</h1>
      </div>
      <Footer />
    </>
  );
};

export default Article;
