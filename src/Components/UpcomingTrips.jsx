// Gallery.jsx
import React from 'react';
import Card from './Card';
import '../Styles/Gallery.css';
import img1 from  "/Images/pexels-julieaagaard-1374064.jpg"
import img2 from "/Images/pexels-sebastian-palomino-933481-1875480.jpg"
import img3 from "/Images/pexels-m-venter-792254-1659438.jpg"
import img4 from "/Images/waterfall-7478709_640.jpg"
import img5 from "/Images/photo-1515444744559-7be63e1600de.jpeg"
function Gallery() {
  return (
    <div className="card-container">
      <Card
        imageUrl={img1}
        title="MEESHAPPULIMALA"
        description="This is a description for Sample Card 1."
      />
      <Card
        imageUrl={img2}
        title="GAVI"
        description="This is a description for Sample Card 2."
      />
      <Card
        imageUrl={img3}
        title="MANALI"
        description={img1}
      />
      <Card
        imageUrl={img4}
        title="KAZAKISTHAN"
        description="This is a description for Sample Card 3."
      />
      <Card
        imageUrl={img5}
        title="MANA"
        description="This is a description for Sample Card 3."
      />
    </div>
  );
}

export default Gallery;
