import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import articlesData from '../../data/articles.json';
import NotFound from "../NotFound";



const CustomArticle = () => {
  const { id } = useParams();
  // Untuk mencari data artcle berdasarkan id
  const article = articlesData.mainArticles.find(mainArticle => mainArticle.id === parseInt(id));
  if(!article){
    return <NotFound />
  }

  return (
    <>
      <Navbar />
      <div className="space-y-8 p-4">
        <div className="container flex flex-row space-x-3">
          <Link to="/articles">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">Back</button>
          </Link>
          <h1 className="text-3xl font-bold text-center">{article.title}</h1>
        </div>
        <div className="space-y-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto bg-zinc-300"
          />
          <p className="text-zinc-700 dark:text-zinc-300">
            {article.description}
          </p>
          {/* Add any other article content here */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomArticle;
