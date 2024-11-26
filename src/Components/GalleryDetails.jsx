import React, { useState } from "react";
import "../Styles/GalleryDetails.css";

const GalleryDetails = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamically fetch image paths from .env
  const image1 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_1;
  const image2 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_2;
  const image3 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_3;
  const image4 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_4;
  const image5 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_1;
  const image6 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_2;
  const image7 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_3;
  const image8 = import.meta.env.VITE_Galler_Deatils_M_IMAGE_4;


  const gimage1 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_1;
  const gimage2 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_2;
  const gimage3 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_3;
  const gimage4 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_4;
  const gimage5 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_1;
  const gimage6 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_2;
  const gimage7 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_3;
  const gimage8 = import.meta.env.VITE_Galler_Deatils_G_IMAGE_4;

  const kimage1 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_1;
  const kimage2 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_2;
  const kimage3 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_3;
  const kimage4 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_4;
  const kimage5 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_1;
  const kimage6 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_2;
  const kimage7 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_3;
  const kimage8 = import.meta.env.VITE_Galler_Deatils_K_IMAGE_4;

  // Sample data for image collections
  const collections = [
    {
      title: "Meeshappulimala",
      images: [image1, image2, image3, image4],
      moreImages: [image5, image6, image7, image8],
    },
    {
      title: "Gavi",
      images: [gimage1, gimage2, gimage3, gimage4],
      moreImages: [gimage5, gimage6, gimage7, gimage8],
    },
    {
      title: "Kazakisthan",
      images: [kimage1, kimage2, kimage3, kimage4],
      moreImages: [kimage5, kimage6, kimage7, kimage8],
    },
  ];

  const openModal = (collection) => {
    setSelectedCollection(collection);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCollection(null);
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-container">
      {collections.map((collection, index) => (
        <div
          key={index}
          className="collection"
          onClick={() => openModal(collection)}
        >
          <h3 className="collection-title">{collection.title}</h3>
          <div className="image-grid">
            {collection.images.map((image, idx) => (
              <div key={idx} className="image-item">
                <img src={image} alt={collection.title} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {isModalOpen && selectedCollection && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCollection.title}</h2>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-grid">
              {selectedCollection.moreImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={selectedCollection.title}
                  className="modal-img"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDetails;
