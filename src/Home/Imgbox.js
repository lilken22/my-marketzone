import React from 'react';
// import '../index.css'
import image8 from '../Images/List8.jpg';
import image9 from '../Images/List9.jpg';
import image10 from '../Images/List10.jpg';
import image11 from '../Images/List11.jpg';
import image12 from '../Images/List12.jpg';

const ImageBox = () => {
  // Array of objects containing image URLs and titles
  const images = [
    { url: image8, title: 'PHONES' },
    { url: image9, title: 'INTERNET' },
    { url: image10, title: 'FRIDGE' },
    { url: image11, title: 'FANS' },
    { url: image12, title: 'SPEAKERS' }
  ];

  return (
    <div className="container mx-auto mt-10 overflow-x-scroll">
      <button className="bg-black text-green-600 font-bold py-4 px-5 rounded-3xl mb-4">SPONSORED BRANDS</button>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5 ">
        {/* Map through the images and render each one with its title */}
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-60 object-cover opacity-50 group-hover:opacity-400 shadow-md rounded-3xl"
            />
            <div className="shadow">
              <p className="text-green-500">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBox;

