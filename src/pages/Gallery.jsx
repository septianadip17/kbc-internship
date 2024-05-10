const Gallery = () => {
  // Data contoh gambar untuk galeri
  const galleryData = [
    { id: 1, image: "https://via.placeholder.com/300", title: "Gambar 1" },
    { id: 2, image: "https://via.placeholder.com/300", title: "Gambar 2" },
    { id: 3, image: "https://via.placeholder.com/300", title: "Gambar 3" },
    { id: 4, image: "https://via.placeholder.com/300", title: "Gambar 4" },
    { id: 5, image: "https://via.placeholder.com/300", title: "Gambar 5" },
    { id: 6, image: "https://via.placeholder.com/300", title: "Gambar 6" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
