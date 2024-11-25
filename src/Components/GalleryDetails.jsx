import React, { useState } from "react";
import "../Styles/GalleryDetails.css"

const GalleryDetails = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for image collections
  const collections = [
    {
      title: "Meeshappulimala",
      images: [
       'Images/pexels-julieaagaard-1374064.jpg',
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
      ],
      moreImages: [
        'Images/pexels-julieaagaard-1374064.jpg',
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
      ],
    },
    {
      title: "Gavi",
      images: [
        'Images/pexels-julieaagaard-1374064.jpg',
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
      ],
      moreImages: [
        'Images/pexels-julieaagaard-1374064.jpg',
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
      ],
    },
    {
      title: "Kazakisthan",
      images: [
        'Images/pexels-julieaagaard-1374064.jpg',
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
      ],
      moreImages: [
        'Images/pexels-julieaagaard-1374064.jpg',
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
        "Images/pexels-julieaagaard-1374064.jpg",
      ],
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
