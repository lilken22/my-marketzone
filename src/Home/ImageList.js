import React from 'react';
import image7 from '../Images/List7.jpg';
import image6 from '../Images/List6.jpg';
import image2 from '../Images/List2.jpg';
import image1 from '../Images/List1.jpg';
import image5 from '../Images/List5.jpg';
const ImageList = () => {
  // Array of objects containing image URLs and titles
  const images = [
    { url: image7, title: 'Groceries' },
    { url: image6, title: 'Sport' },
    { url: image2, title: 'Fashion' },
    { url: image1, title: 'Body Care' },
    { url: image5, title: 'Appliance' }
  ];

  return (
    <div className="container mx-auto mt-10 overflow-x-scroll rounded-3xl ">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Map through the images and render each one with its title */}
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center"> 
            <img src={image.url} alt={image.title} className="w-60 h-40 object-center rounded-3xl" />
            <div className=" bg-gray-200 w-24 text-center  text-black  py-1 hover:text-white">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;

