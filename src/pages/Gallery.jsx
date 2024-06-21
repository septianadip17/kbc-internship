import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";
import BizcomEvent from "../components/gallery/BizcomEvent";
import ImageModal from "../components/gallery/ImageModal";
import SeeMoreModal from "../components/gallery/SeeMoreModal";
import { galleryData } from "../data/galleryData";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSeeMoreModalOpen, setIsSeeMoreModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [seeMoreImages, setSeeMoreImages] = useState([]);

  const openModal = useCallback((index, images) => {
    setCurrentImageIndex(index);
    setModalImages(images);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const openSeeMoreModal = useCallback((images) => {
    setSeeMoreImages(images);
    setIsSeeMoreModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeSeeMoreModal = useCallback(() => {
    setIsSeeMoreModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const closeModals = useCallback(() => {
    closeModal();
    closeSeeMoreModal();
  }, [closeModal, closeSeeMoreModal]);

  const showPreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  }, [modalImages.length]);

  const showNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [modalImages.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModals();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModals]);

  return (
    <div>
      <Navbar />
      <CustomHeader title="GALLERY" />
      <div className="container mx-auto">
        {galleryData.map((event) => (
          <BizcomEvent
            key={event.year}
            year={event.year}
            images={event.images}
            onImageClick={openModal}
            onSeeMoreClick={openSeeMoreModal}
          />
        ))}
      </div>
      <Footer />
      {isModalOpen && (
        <ImageModal
          images={modalImages}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onPrevious={showPreviousImage}
          onNext={showNextImage}
        />
      )}
      {isSeeMoreModalOpen && (
        <SeeMoreModal
          images={seeMoreImages}
          onClose={closeSeeMoreModal}
          onImageClick={openModal}
        />
      )}
    </div>
  );
};

export default Gallery;
