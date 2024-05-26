import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import articlesData from "../../data/articles.json";
import NotFound from "../NotFound";

const MoreArticle = () => {
  const { idList } = useParams();

  const article = articlesData.articleList.find(
    (articleList) => articleList.id === parseInt(idList)
  );
  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="space-y-8 p-4">
        <h1 className="text-3xl font-bold text-center">{article.title}</h1>
        <div className="flex justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-96 h-80"
          />
        </div>
        <p className="text-zinc-7000 text-justify">{article.description}</p>
        <div className="flex justify-center"> {/* Memindahkan tombol ke tengah */}
          <Link to="/articles">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">
              Back
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreArticle;
