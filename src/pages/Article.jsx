import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import articlesData from "../data/articles.json";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

const Article = () => {
  const { header, mainArticles, articleList } = articlesData;

  // eslint-disable-next-line no-unused-vars
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://d486ab47-019b-4bb4-acf7-0db10ab21add.mock.pstmn.io/articles"
  //     )
  //     .then((response) => {
  //       // Handle the response data
  //       setData(response.data);
  //       console.log(response.data.header);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //       console.error("Error:", error);
  //     });
  // }, []); // The empty array ensures this effect runs only once

  const ArticleCard = ({ title, description, image, id, buttonText }) => (
    <div className="border p-4 mb-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4">
        <img
          src={image}
          alt="Article Image"
          className="w-full h-auto md:order-last"
        />
      </div>
      <div className="w-full md:w-3/4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        <Link to={`/articles/${id}`}>
          <button className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );

  ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  const ArticleSummary = ({ title, author, image, idList }) => (
    <div className="border p-4 flex">
      <div className="w-1/4">
        <Link to={`/articles/list/${idList}`}>
          <img src={image} alt="Article Image" className="w-full h-auto mb-2 rounded-xl" />
        </Link>
      </div>
      <div className="text-justify w-3/4 pl-4 ">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs mt-1">{author}</p>
      </div>
    </div>
  );

  ArticleSummary.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    idList: PropTypes.number.isRequired,
  };

  return (
    <>
      <Navbar />
      <CustomHeader title={header} />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">
          Today Top Article: About Business!
        </h2>
        {mainArticles.map((mainArticle, index) => (
          <ArticleCard
            key={index}
            title={mainArticle.title}
            description={mainArticle.description}
            image={mainArticle.image}
            id={mainArticle.id}
            buttonText={mainArticle.buttonText}
          />
        ))}
        <h2 className="text-xl font-bold mb-4">Read it again!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articleList.map((article, index) => (
            <ArticleSummary
              key={index}
              title={article.title}
              author={article.author}
              image={article.image}
              idList={article.idList}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
