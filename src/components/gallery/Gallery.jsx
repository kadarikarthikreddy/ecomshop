import React from "react";
import g5 from "../../assets/GalleryPics/creams.avif";
import g1 from "../../assets/GalleryPics/shoe.webp";
import g2 from "../../assets/GalleryPics/dress.png";
import g3 from "../../assets/GalleryPics/speakers.jpg";
import g4 from "../../assets/GalleryPics/mandress.png";
import g6 from "../../assets/GalleryPics/kids.png";

function Gallery() {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block cursor-pointer hover:animate-pulse"
                  src={g1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block cursor-pointer hover:animate-pulse"
                  src={g6}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block cursor-pointer hover:animate-pulse"
                  src={g4}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block cursor-pointer hover:animate-pulse"
                  src={g3}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block cursor-pointer hover:animate-pulse"
                  src={g5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-right block cursor-pointer hover:animate-pulse"
                  src={g2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
