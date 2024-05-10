const Article = () => {
  // Data contoh artikel
  const articles = [
    {
      id: 1,
      title: "Tips Meningkatkan Produktivitas Kerja dari Rumah",
      image: "https://via.placeholder.com/600x400",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    },
    {
      id: 2,
      title: "Manfaat Olahraga bagi Kesehatan Mental",
      image: "https://via.placeholder.com/600x400",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
    },
    {
      id: 3,
      title: "Cara Efektif Mengatur Waktu untuk Pekerjaan Sampingan",
      image: "https://via.placeholder.com/600x400",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione...",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8" id="article">
      <h1 className="text-3xl font-bold mb-4">Article</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.content}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
