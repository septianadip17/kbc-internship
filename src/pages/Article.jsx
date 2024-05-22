import PropTypes from 'prop-types';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import articlesData from "../data/articles.json";

const Article = () => {
  const { header, mainArticle, articleList } = articlesData;

  const ArticleCard = ({ title, description, image, buttonText }) => (
    <div className="border p-4 mb-4 flex">
      <div className="w-1/4">
        <img src={image} alt="Article Image" className="w-full h-auto" />
      </div>
      <div className="w-3/4 pl-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );

  ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  const ArticleSummary = ({ title, author, image }) => (
    <div className="border p-4 flex">
      <div className="w-1/4">
        <img src={image} alt="Article Image" className="w-full size-40 h-auto mb-2" />
      </div>
      <div className="w-3/4 pl-4">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs mt-1">{author}</p>
      </div>
    </div>
  );

  ArticleSummary.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <>
      <Navbar />
      <CustomHeader title={header} />

      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Today Top Article: About Business!</h2>
        <ArticleCard
          title={mainArticle.title}
          description={mainArticle.description}
          image={mainArticle.image}
          buttonText={mainArticle.buttonText}
        />
        <h2 className="text-xl font-bold mb-4">Read it again!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articleList.map((article, index) => (
            <ArticleSummary
              key={index}
              title={article.title}
              author={article.author}
              image={article.image}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Ini artikel</h1>
      </div>
      {/* <NewLogin /> */}
      <Footer />
    </>
  );
};

export default Article;
