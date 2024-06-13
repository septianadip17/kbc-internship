import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import articlesData from "../../data/articles.json";


const ArticleSummary = ({ title, author, image, idList }) => (
  <div className="border p-4 flex">
    <div className="w-1/4">
      <Link to={`/articles/list/${idList}`}>
        <img src={image} alt="Article Image" className="w-full h-auto mb-2" />
      </Link>
    </div>
    <div className="text-justify w-3/4 pl-4">
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-xs mt-1">{author}</p>
    </div>
  </div>
);

ArticleSummary.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  idList: PropTypes.string.isRequired,
};

const ListArticle = () => {
  const { articleList } = articlesData;
  return (
    <>
      <h1 className="text-3xl font-bold">List Article</h1>
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
    </>
  );
};

export default ListArticle;
